/* ============================================================================
 * SafePK — Feedback & Reviews Client Engine
 * Data Source: Google Sheets (Feedback_Reviews) via Google Apps Script Backend
 * ============================================================================
 *
 * CONFIGURATION:
 * - SAFEPK_REVIEWS_CONFIG.SCRIPT_URL: Set to your deployed Google Apps Script
 *   Web App URL (/exec). Can also be overridden via:
 *   1. window.SAFEPK_REVIEWS_SCRIPT_URL
 *   2. localStorage.getItem('SAFEPK_REVIEWS_SCRIPT_URL')
 *   3. data-script-url attribute on #safepk-feedback-form
 * ============================================================================ */

const SAFEPK_REVIEWS_CONFIG = {
  // Google Spreadsheet ID (for Feedback & Reviews)
  SPREADSHEET_ID: '1CZS8Xc3ecIcyOl8pCELuKicy2brA9hNwSIFlsXdMCdA',
  SHEET_TAB_NAME: 'Sheet1',
  // Dedicated Apps Script Web App URL for Feedback & Reviews (completely separate from Help Center)
  SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbwqFcgYWoq8ufAjX4azAkFoJeWdQ9zsvQ9fO7CrcHXp819q5Vz8IFinF-yfy0J2fOcW/exec',
  REVIEWS_PER_PAGE: 9,
  MAX_NAME_LENGTH: 80,
  MAX_EMAIL_LENGTH: 120,
  MAX_DETAILS_LENGTH: 1000,
  MIN_DETAILS_LENGTH: 5,
  SUBMIT_COOLDOWN_MS: 15000
};

// SVG star path used for fractional & interactive stars
const STAR_SVG_MARKUP = `<svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;

// Escape HTML entities to prevent XSS / HTML injection from user-submitted content
function escapeHtmlSafe(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Resolve active Apps Script Web App URL
function getActiveReviewsScriptUrl() {
  const formEl = document.getElementById('safepk-feedback-form');
  const formAttrUrl = formEl ? formEl.getAttribute('data-script-url') : '';
  let storedUrl = '';
  try {
    storedUrl = localStorage.getItem('SAFEPK_REVIEWS_SCRIPT_URL') || '';
  } catch (e) {}

  return (
    window.SAFEPK_REVIEWS_SCRIPT_URL ||
    storedUrl ||
    formAttrUrl ||
    SAFEPK_REVIEWS_CONFIG.SCRIPT_URL ||
    ''
  ).trim();
}

/**
 * Render 5 fractional stars based on any numeric rating from 0 to 5.
 * E.g. 1.0 -> 1 star, 3.0 -> 3 stars, 4.5 -> 4.5 stars, 5.0 -> 5 stars.
 */
function buildFractionalStarsHtml(ratingValue, sizeClass = '') {
  const numericRating = Number(ratingValue);
  const clamped = !isNaN(numericRating) && numericRating > 0
    ? Math.min(5, Math.max(0, numericRating))
    : 0;

  let starsHtml = '';
  for (let i = 1; i <= 5; i++) {
    let fillPercent = 0;
    if (clamped >= i) {
      fillPercent = 100;
    } else if (clamped > i - 1) {
      fillPercent = Math.round((clamped - (i - 1)) * 100);
    }

    const itemClass = sizeClass ? `star-fractional-item ${sizeClass}` : 'star-fractional-item';
    starsHtml += `
      <span class="${itemClass}" aria-hidden="true">
        <span class="star-fractional-bg">${STAR_SVG_MARKUP}</span>
        <span class="star-fractional-fill" style="width: ${fillPercent}%;">${STAR_SVG_MARKUP}</span>
      </span>
    `;
  }

  return starsHtml;
}

// State for pagination of approved public reviews
let allApprovedReviews = [];
let visibleReviewsCount = SAFEPK_REVIEWS_CONFIG.REVIEWS_PER_PAGE;
let selectedFormRating = 0;
let lastSubmissionTimestamp = 0;

/**
 * Update the Overall Rating Summary & Rating Distribution UI
 */
function renderRatingSummaryAndDistribution(summary) {
  const avgNumEl = document.getElementById('reviews-avg-number');
  const avgStarsEl = document.getElementById('reviews-avg-stars');
  const totalCountEl = document.getElementById('reviews-total-count');

  const totalApproved = summary && typeof summary.totalApproved === 'number' && summary.totalApproved > 0
    ? summary.totalApproved
    : 0;

  const hasApproved = totalApproved > 0 && summary.averageRating !== null && !isNaN(Number(summary.averageRating));
  const avgRating = hasApproved ? Number(summary.averageRating) : 0;

  if (avgNumEl) {
    avgNumEl.textContent = hasApproved ? avgRating.toFixed(1) : '—';
  }

  if (avgStarsEl) {
    avgStarsEl.innerHTML = buildFractionalStarsHtml(hasApproved ? avgRating : 0);
    avgStarsEl.setAttribute(
      'aria-label',
      hasApproved ? `Average rating ${avgRating.toFixed(1)} out of 5 stars` : 'No ratings yet'
    );
  }

  if (totalCountEl) {
    if (hasApproved) {
      totalCountEl.textContent = `Based on ${totalApproved} approved ${totalApproved === 1 ? 'review' : 'reviews'}`;
    } else {
      totalCountEl.textContent = 'Be the first to rate SafePK.';
    }
  }

  // Update 5-star to 1-star distribution bars and counts
  const dist = (summary && summary.distribution) ? summary.distribution : {};
  for (let star = 5; star >= 1; star--) {
    const countVal = Number(dist[star] || dist[String(star)] || 0);
    const safeCount = !isNaN(countVal) && countVal > 0 ? countVal : 0;
    const pct = totalApproved > 0 ? Math.round((safeCount / totalApproved) * 100) : 0;

    const barEl = document.getElementById(`dist-bar-${star}`);
    const countEl = document.getElementById(`dist-count-${star}`);

    if (barEl) {
      barEl.style.width = `${pct}%`;
      barEl.setAttribute('aria-valuenow', String(pct));
    }
    if (countEl) {
      countEl.textContent = String(safeCount);
    }
  }
}

/**
 * Render Approved Public Review Cards (strictly excluding email addresses)
 */
function renderApprovedReviewCards() {
  const listContainer = document.getElementById('approved-reviews-container');
  const paginationWrap = document.getElementById('reviews-pagination-wrap');
  const loadMoreBtn = document.getElementById('reviews-load-more-btn');

  if (!listContainer) return;

  if (!Array.isArray(allApprovedReviews) || allApprovedReviews.length === 0) {
    listContainer.innerHTML = `
      <div class="reviews-empty-state" style="grid-column: 1 / -1;">
        <div style="width: 2.75rem; height: 2.75rem; border-radius: 50%; background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary); display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem auto;">
          <i data-lucide="message-square" class="w-5 h-5"></i>
        </div>
        <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.35rem 0;">
          Be the first to rate SafePK.
        </h3>
        <p style="font-size: 0.86rem; color: var(--text-secondary); margin: 0 auto; max-width: 460px;">
          No approved public reviews are available yet. Share your experience using the feedback form below.
        </p>
      </div>
    `;
    if (paginationWrap) paginationWrap.style.display = 'none';
    if (window.lucide) window.lucide.createIcons();
    return; /* Function ko yahin safely roka ja raha hai */
  }

  const sliceToRender = allApprovedReviews.slice(0, visibleReviewsCount);

  listContainer.innerHTML = sliceToRender.map((item) => {
    const safeName = escapeHtmlSafe(item.name || 'Community Member');
    const initial = escapeHtmlSafe((item.name || 'S').trim().charAt(0).toUpperCase() || 'S');
    const ratingNum = Math.min(5, Math.max(1, Math.round(Number(item.rating) || 5)));
    const safeDetails = escapeHtmlSafe(item.details || '');
    const safeDate = escapeHtmlSafe(item.date || '');

    return `
      <article class="review-card-item">
        <div>
          <div class="review-card-header">
            <div class="review-author-wrap">
              <div class="review-avatar" aria-hidden="true">${initial}</div>
              <div>
                <div class="review-author-name">${safeName}</div>
                <div class="rating-stars-fractional" style="margin: 0.2rem 0 0 0;" aria-label="Rated ${ratingNum} out of 5 stars">
                  ${buildFractionalStarsHtml(ratingNum, 'star-sm')}
                </div>
              </div>
            </div>
            ${safeDate ? `<span class="review-date-badge">${safeDate}</span>` : ''}
          </div>
          <p class="review-body-text" style="margin-top: 0.9rem;">${safeDetails}</p>
        </div>
      </article>
    `;
  }).join('');

  if (paginationWrap && loadMoreBtn) {
    if (allApprovedReviews.length > visibleReviewsCount) {
      paginationWrap.style.display = 'flex';
      const remaining = allApprovedReviews.length - visibleReviewsCount;
      loadMoreBtn.textContent = `Show More Reviews (${remaining} remaining)`;
    } else {
      paginationWrap.style.display = 'none';
    }
  }

  if (window.lucide) window.lucide.createIcons();
}

/**
 * Fetch Public Reviews and Rating Summary from the Google Apps Script Backend
 */
async function fetchPublicReviewsFromBackend() {
  const statusBanner = document.getElementById('reviews-backend-status');
  const listContainer = document.getElementById('approved-reviews-container');
  const scriptUrl = getActiveReviewsScriptUrl();

  if (!scriptUrl || !scriptUrl.startsWith('http')) {
    renderRatingSummaryAndDistribution({ totalApproved: 0, averageRating: null, distribution: {} });
    if (statusBanner) {
      statusBanner.style.display = 'flex';
      statusBanner.innerHTML = `
        <i data-lucide="alert-circle" class="w-4 h-4" style="color: var(--color-warning); flex-shrink: 0; margin-top: 0.15rem;"></i>
        <span>Reviews backend URL is not configured yet. Please configure the Google Apps Script Web App URL to load live reviews.</span>
      `;
    }
    if (listContainer) {
      listContainer.innerHTML = `
        <div class="reviews-empty-state" style="grid-column: 1 / -1;">
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0;">
            Reviews service is awaiting backend configuration.
          </p>
        </div>
      `;
    }
    if (window.lucide) window.lucide.createIcons();
    return; /* Function ko yahin safely roka ja raha hai */
  }

  try {
    const endpoint = `${scriptUrl}${scriptUrl.includes('?') ? '&' : '?'}action=getReviews&_t=${Date.now()}`;
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }

    const data = await response.json();

    // Check if the endpoint returned a legacy Help Center response instead of the Feedback_Reviews payload
    if (!data || typeof data !== 'object' || (!('summary' in data) && !('reviews' in data))) {
      throw new Error('UNCONFIGURED_FEEDBACK_ENDPOINT');
    }

    if (data.status === 'error') {
      throw new Error(data.message || 'Backend reported an error');
    }

    if (statusBanner) {
      statusBanner.style.display = 'none';
      statusBanner.innerHTML = '';
    }

    const summary = data.summary || {
      totalApproved: 0,
      averageRating: null,
      distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    };

    // Enforce client-side sanity check on top of server-side filtering
    const validReviews = Array.isArray(data.reviews)
      ? data.reviews.filter((r) => {
          const rating = Number(r.rating);
          return !isNaN(rating) && rating >= 1 && rating <= 5 && r.details;
        })
      : [];

    allApprovedReviews = validReviews;
    visibleReviewsCount = SAFEPK_REVIEWS_CONFIG.REVIEWS_PER_PAGE;

    renderRatingSummaryAndDistribution(summary);
    renderApprovedReviewCards();
  } catch (err) {
    console.warn('[SafePK Reviews] Live fetch notice:', err);
    renderRatingSummaryAndDistribution({ totalApproved: 0, averageRating: null, distribution: {} });

    if (listContainer) {
      const isLegacyEndpoint = err && err.message === 'UNCONFIGURED_FEEDBACK_ENDPOINT';
      listContainer.innerHTML = `
        <div class="reviews-empty-state" style="grid-column: 1 / -1;">
          <div style="width: 2.5rem; height: 2.5rem; border-radius: 50%; background: rgba(217, 119, 6, 0.1); color: var(--color-warning); display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem auto;">
            <i data-lucide="alert-triangle" class="w-5 h-5"></i>
          </div>
          <h3 style="font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.35rem 0;">
            ${isLegacyEndpoint ? 'Feedback Backend Update Required' : 'Unable to Load Reviews Right Now'}
          </h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0 auto; max-width: 520px; line-height: 1.55;">
            ${
              isLegacyEndpoint
                ? 'The connected Google Apps Script deployment does not yet include the Feedback_Reviews handler. Deploy the updated Apps Script code to enable live reviews.'
                : 'Live reviews from Google Sheets are temporarily unavailable. Please try refreshing the page in a moment.'
            }
          </p>
        </div>
      `;
    }
    if (window.lucide) window.lucide.createIcons();
  }
}

/**
 * Initialize Interactive 5-Star Rating Selector with keyboard & screen-reader support
 */
function initInteractiveStarSelector() {
  const starButtons = Array.from(document.querySelectorAll('.star-selector-btn'));
  const ratingInput = document.getElementById('feedback-rating-input');
  const ratingLabel = document.getElementById('feedback-rating-text');

  if (!starButtons.length || !ratingInput) return;

  const ratingDescriptions = {
    0: 'Select a rating (1 to 5 stars)',
    1: '1 Star — Poor',
    2: '2 Stars — Fair',
    3: '3 Stars — Good',
    4: '4 Stars — Very Good',
    5: '5 Stars — Excellent'
  };

  function updateStarsVisual(activeValue, hoverValue = 0) {
    const targetVal = hoverValue > 0 ? hoverValue : activeValue;
    starButtons.forEach((btn) => {
      const btnVal = Number(btn.getAttribute('data-rating-value')) || 0;
      btn.classList.toggle('is-filled', hoverValue === 0 && btnVal <= activeValue);
      btn.classList.toggle('is-hovered', hoverValue > 0 && btnVal <= hoverValue);
      btn.setAttribute('aria-checked', btnVal === activeValue ? 'true' : 'false');
    });

    if (ratingLabel) {
      ratingLabel.textContent = ratingDescriptions[targetVal] || ratingDescriptions[0];
      ratingLabel.style.color = targetVal > 0 ? 'var(--text-primary)' : 'var(--text-muted)';
      ratingLabel.style.fontWeight = targetVal > 0 ? '600' : '400';
    }
  }

  function selectRating(val) {
    const cleanVal = Math.min(5, Math.max(1, Number(val) || 0));
    selectedFormRating = cleanVal;
    ratingInput.value = String(cleanVal);
    updateStarsVisual(selectedFormRating, 0);
  }

  starButtons.forEach((btn, idx) => {
    const val = Number(btn.getAttribute('data-rating-value')) || (idx + 1);

    btn.addEventListener('click', () => {
      selectRating(val);
    });

    btn.addEventListener('mouseenter', () => {
      updateStarsVisual(selectedFormRating, val);
    });

    btn.addEventListener('mouseleave', () => {
      updateStarsVisual(selectedFormRating, 0);
    });

    btn.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        e.preventDefault();
        const nextIdx = Math.min(starButtons.length - 1, idx + 1);
        starButtons[nextIdx].focus();
        selectRating(nextIdx + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        e.preventDefault();
        const prevIdx = Math.max(0, idx - 1);
        starButtons[prevIdx].focus();
        selectRating(prevIdx + 1);
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        selectRating(val);
      }
    });
  });

  // Expose reset helper
  window.__resetFeedbackStars = function () {
    selectedFormRating = 0;
    ratingInput.value = '';
    updateStarsVisual(0, 0);
  };
}

/**
 * Initialize Feedback Form Validation & Submission to Google Apps Script
 */
function initFeedbackFormSubmission() {
  const form = document.getElementById('safepk-feedback-form');
  const detailsInput = document.getElementById('feedback-details');
  const charCountEl = document.getElementById('feedback-char-count');
  const feedbackNoticeEl = document.getElementById('feedback-form-message');

  if (detailsInput && charCountEl) {
    detailsInput.addEventListener('input', () => {
      const len = detailsInput.value.length;
      charCountEl.textContent = `${len} / ${SAFEPK_REVIEWS_CONFIG.MAX_DETAILS_LENGTH}`;
    });
  }

  if (!form) return;

  function showFormFeedback(message, type) {
    if (!feedbackNoticeEl) return;
    feedbackNoticeEl.style.display = 'flex';
    const isSuccess = type === 'success';
    const isError = type === 'danger';
    feedbackNoticeEl.style.borderColor = isSuccess
      ? 'var(--color-success)'
      : isError
      ? 'var(--color-danger)'
      : 'var(--color-warning)';
    feedbackNoticeEl.style.backgroundColor = isSuccess
      ? 'rgba(var(--color-primary-rgb), 0.06)'
      : isError
      ? 'rgba(220, 38, 38, 0.06)'
      : 'rgba(217, 119, 6, 0.06)';

    const iconName = isSuccess ? 'check-circle' : isError ? 'alert-octagon' : 'alert-triangle';
    const iconColor = isSuccess
      ? 'var(--color-success)'
      : isError
      ? 'var(--color-danger)'
      : 'var(--color-warning)';

    feedbackNoticeEl.innerHTML = `
      <i data-lucide="${iconName}" class="w-5 h-5" style="color: ${iconColor}; flex-shrink: 0; margin-top: 0.1rem;"></i>
      <div style="font-size: 0.86rem; color: var(--text-primary); line-height: 1.55;">${escapeHtmlSafe(message)}</div>
    `;
    if (window.lucide) window.lucide.createIcons();
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    if (feedbackNoticeEl) {
      feedbackNoticeEl.style.display = 'none';
    }

    // Basic anti-spam honeypot check
    const honeyVal = (document.getElementById('feedback-website-hp')?.value || '').trim();
    if (honeyVal) {
      showFormFeedback('Submission rejected.', 'danger');
      return; /* Function ko yahin safely roka ja raha hai */
    }

    // Rate-limit rapid repeated submissions
    const now = Date.now();
    if (now - lastSubmissionTimestamp < SAFEPK_REVIEWS_CONFIG.SUBMIT_COOLDOWN_MS) {
      const waitSec = Math.ceil((SAFEPK_REVIEWS_CONFIG.SUBMIT_COOLDOWN_MS - (now - lastSubmissionTimestamp)) / 1000);
      showFormFeedback(`Please wait ${waitSec} seconds before submitting another review.`, 'warning');
      return; /* Function ko yahin safely roka ja raha hai */
    }

    const nameVal = (document.getElementById('feedback-name')?.value || '').trim();
    const emailVal = (document.getElementById('feedback-email')?.value || '').trim();
    const ratingVal = Number(document.getElementById('feedback-rating-input')?.value || selectedFormRating || 0);
    const detailsVal = (document.getElementById('feedback-details')?.value || '').trim();

    // Client-side validation
    if (!nameVal || nameVal.length < 2 || nameVal.length > SAFEPK_REVIEWS_CONFIG.MAX_NAME_LENGTH) {
      showFormFeedback('Please enter a valid name (2 to 80 characters).', 'warning');
      return; /* Function ko yahin safely roka ja raha hai */
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal || !emailRegex.test(emailVal) || emailVal.length > SAFEPK_REVIEWS_CONFIG.MAX_EMAIL_LENGTH) {
      showFormFeedback('Please enter a valid email address.', 'warning');
      return; /* Function ko yahin safely roka ja raha hai */
    }

    if (!Number.isInteger(ratingVal) || ratingVal < 1 || ratingVal > 5) {
      showFormFeedback('Please select a star rating between 1 and 5 stars.', 'warning');
      return; /* Function ko yahin safely roka ja raha hai */
    }

    if (!detailsVal || detailsVal.length < SAFEPK_REVIEWS_CONFIG.MIN_DETAILS_LENGTH) {
      showFormFeedback('Please write a brief review (at least 5 characters).', 'warning');
      return; /* Function ko yahin safely roka ja raha hai */
    }

    if (detailsVal.length > SAFEPK_REVIEWS_CONFIG.MAX_DETAILS_LENGTH) {
      showFormFeedback(`Review details cannot exceed ${SAFEPK_REVIEWS_CONFIG.MAX_DETAILS_LENGTH} characters.`, 'warning');
      return; /* Function ko yahin safely roka ja raha hai */
    }

    const scriptUrl = getActiveReviewsScriptUrl();
    if (!scriptUrl || !scriptUrl.startsWith('http')) {
      showFormFeedback('The Feedback & Reviews backend URL is not configured yet.', 'danger');
      return; /* Function ko yahin safely roka ja raha hai */
    }

    const submitBtn = document.getElementById('feedback-submit-btn');
    const origBtnHtml = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Submitting...';
    }

    try {
      const payload = {
        action: 'submitFeedback',
        formType: 'feedback_review',
        Name: nameVal,
        Email: emailVal,
        Rating: ratingVal,
        'Review Details': detailsVal,
        name: nameVal,
        email: emailVal,
        rating: ratingVal,
        details: detailsVal
      };

      // Use text/plain with CORS mode so Google Apps Script doPost(e) returns a readable JSON confirmation
      // without triggering a browser preflight OPTIONS rejection.
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Server returned HTTP ${response.status}`);
      }

      const result = await response.json();

      // Verify that the backend explicitly confirmed saving the review
      if (!result || result.status !== 'success') {
        const errMsg = (result && result.message)
          ? result.message
          : 'The Apps Script backend did not confirm saving your review. Please check the deployment URL.';
        throw new Error(errMsg);
      }

      lastSubmissionTimestamp = Date.now();

      const assignedId = result.reviewId ? ` (Reference: ${result.reviewId})` : '';
      const successMsg = `Thank you! Your feedback${assignedId} has been saved and will appear publicly once approved.`;

      showFormFeedback(successMsg, 'success');
      if (window.showToast) {
        window.showToast('Feedback submitted for review.', 'success');
      }

      form.reset();
      if (typeof window.__resetFeedbackStars === 'function') {
        window.__resetFeedbackStars();
      }
      if (charCountEl) {
        charCountEl.textContent = `0 / ${SAFEPK_REVIEWS_CONFIG.MAX_DETAILS_LENGTH}`;
      }
    } catch (err) {
      console.error('[SafePK Reviews] Submission failed:', err);
      const userMessage = err && err.message
        ? err.message
        : 'Could not confirm that your feedback was saved. Please verify the Apps Script deployment and try again.';
      showFormFeedback(userMessage, 'danger');
      if (window.showToast) {
        window.showToast('Submission could not be verified.', 'danger');
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origBtnHtml;
        if (window.lucide) window.lucide.createIcons();
      }
    }
  });
}

// Initialize Load More pagination button
function initReviewsPagination() {
  const loadMoreBtn = document.getElementById('reviews-load-more-btn');
  if (!loadMoreBtn) return;

  loadMoreBtn.addEventListener('click', () => {
    visibleReviewsCount += SAFEPK_REVIEWS_CONFIG.REVIEWS_PER_PAGE;
    renderApprovedReviewCards();
  });
}

// Boot the Feedback & Reviews system when DOM is ready
function initSafePKReviewsPage() {
  initInteractiveStarSelector();
  initReviewsPagination();
  initFeedbackFormSubmission();
  fetchPublicReviewsFromBackend();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSafePKReviewsPage);
} else {
  initSafePKReviewsPage();
}
