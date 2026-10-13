/* Global Application Helper Engine for SafePK */
// Global state / setup defining
var __DEFINES__ = window.__DEFINES__ || {};
window.__DEFINES__ = __DEFINES__;

// Setup global modal handlers
function openScamModal(id) {
    const scam = learningTopics.find(item => item.id === id);
  if (!scam) return;

  const modal = document.getElementById('univ-modal');
  const modalIcon = document.getElementById('univ-modal-icon');
  const modalTitle = document.getElementById('univ-modal-title');
  const modalBody = document.getElementById('univ-modal-body');
  const modalFooter = document.getElementById('univ-modal-footer');

  if (!modal || !modalBody) return;

  modalIcon.innerHTML = `<i data-lucide="${scam.iconName || 'shield-alert'}" class="w-6 h-6"></i>`;
  modalTitle.textContent = scam.title;

  let bodyHtml = `
    <div class="modal-body-section">
      <div class="modal-section-title text-primary">
        <i data-lucide="info" class="w-4 h-4"></i> Overview
      </div>
      <p class="modal-overview">${scam.overview}</p>
    </div>

    <div class="modal-body-section">
      <div class="modal-section-title text-danger">
        <i data-lucide="alert-triangle" class="w-4 h-4"></i> Warning Signs
      </div>
      <div class="modal-list-group">
        ${scam.warningSigns.map(sign => `
          <div class="modal-list-item modal-list-danger">
            <i data-lucide="x-circle" class="modal-list-icon text-danger"></i>
            <span class="modal-list-text">${sign}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="modal-body-section">
      <div class="modal-section-title text-warning">
        <i data-lucide="alert-circle" class="w-4 h-4"></i> Local Examples
      </div>
      <div class="modal-list-group">
        ${scam.examples.map(ex => `
          <div class="modal-list-item modal-list-warning">
            <i data-lucide="help-circle" class="modal-list-icon text-warning"></i>
            <span class="modal-list-text">${ex}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="modal-body-section">
      <div class="modal-section-title text-success">
        <i data-lucide="check-circle" class="w-4 h-4"></i> Prevention Tips
      </div>
      <div class="modal-list-group">
        ${scam.preventionTips.map(tip => `
          <div class="modal-list-item modal-list-success">
            <i data-lucide="shield" class="modal-list-icon text-success"></i>
            <span class="modal-list-text">${tip}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="modal-body-section" style="margin-bottom: 0; border-bottom: none; padding-bottom: 0;">
      <div class="modal-section-title text-indigo">
        <i data-lucide="file-text" class="w-4 h-4"></i> Reporting Guidance
      </div>
      <div class="modal-list-item modal-list-primary">
        <i data-lucide="landmark" class="modal-list-icon text-indigo"></i>
        <span class="modal-list-text">${scam.reportingGuidance}</span>
      </div>
    </div>
  `;

  modalBody.innerHTML = bodyHtml;

  // Determine correct relative path to tools page depending on whether we are in a subpage inside /pages/
  const isSubpage = window.location.pathname.includes('/pages/') || window.location.href.includes('/pages/');
  const targetToolsUrl = isSubpage ? `tools.html?scamId=${scam.id}&tab=fia` : `pages/tools.html?scamId=${scam.id}&tab=fia`;

  modalFooter.innerHTML = `
    <button class="btn btn-secondary" onclick="window.closeUnivModal()">Close</button>
    <a href="${targetToolsUrl}" class="btn btn-primary" style="font-size: 0.75rem;">
      <i data-lucide="file-text" class="w-4 h-4"></i> Draft NCCIA Complaint Report
    </a>
  `;

  modal.classList.add('show');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function openArticleModal(id) {
  const article = articlesData.find(item => item.id === id);
  if (!article) return;

  const modal = document.getElementById('univ-modal');
  const modalIcon = document.getElementById('univ-modal-icon');
  const modalTitle = document.getElementById('univ-modal-title');
  const modalBody = document.getElementById('univ-modal-body');
  const modalFooter = document.getElementById('univ-modal-footer');

  if (!modal || !modalBody) return;

  modalIcon.innerHTML = `<i data-lucide="file-text" class="w-6 h-6"></i>`;
  modalTitle.textContent = article.title;

  let bodyHtml = `
    <div class="modal-body-section">
      <p class="modal-article-intro">${article.introduction}</p>
    </div>

    <div class="modal-body-section">
      <div class="modal-section-title text-primary">
        <i data-lucide="book-open" class="w-4 h-4"></i> Detailed Explanation
      </div>
      <div class="modal-article-paragraphs">
        ${article.fullExplanation.map(para => `
          <p class="modal-article-p">${para}</p>
        `).join('')}
      </div>
    </div>

    <div class="modal-body-section">
      <div class="modal-section-title text-warning">
        <i data-lucide="info" class="w-4 h-4"></i> Legal Precedents & Examples
      </div>
      <div class="modal-list-group">
        ${article.examples.map(ex => `
          <div class="modal-list-item modal-list-warning">
            <i data-lucide="alert-circle" class="modal-list-icon text-warning"></i>
            <span class="modal-list-text">${ex}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="modal-body-section" style="margin-bottom: 0; border-bottom: none; padding-bottom: 0;">
      <div class="modal-section-title text-success">
        <i data-lucide="shield" class="w-4 h-4"></i> Legal Safety Defenses
      </div>
      <div class="modal-list-group">
        ${article.preventionMethods.map(method => `
          <div class="modal-list-item modal-list-success">
            <i data-lucide="check" class="modal-list-icon text-success"></i>
            <span class="modal-list-text">${method}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  modalBody.innerHTML = bodyHtml;

  modalFooter.innerHTML = `
    <button class="btn btn-secondary" onclick="window.closeUnivModal()">Close</button>
  `;

  modal.classList.add('show');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closeUnivModal() {
  const modal = document.getElementById('univ-modal');
  if (modal) {
    modal.classList.remove('show');
  }
}

// Global methods registry lines
window.openScamModal = openScamModal;
window.openArticleModal = openArticleModal;
window.closeUnivModal = closeUnivModal;

// Premium Toast Notification System
// Is helper se screen par notification alert (toast) render hota hai.
function showToast(message, type = 'success') {
  let container = document.getElementById('safepk-toast-container');

  if (!container) {
    container = document.createElement('div');
    container.id = 'safepk-toast-container';
    container.className = 'safepk-toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div'); /* Naya HTML element 'toast' dynamically banaya ja raha hai */
  toast.className = `safepk-toast ${type}`;

  let iconName = 'check-circle';
  if (type === 'danger') iconName = 'alert-octagon';
  if (type === 'warning') iconName = 'alert-triangle';
  if (type === 'info') iconName = 'info';

  const titleText = type.charAt(0).toUpperCase() + type.slice(1);

  toast.innerHTML = `
    <div class="safepk-toast-icon">
      <i data-lucide="${iconName}" style="width: 1.15rem; height: 1.15rem;"></i>
    </div>
    <div class="safepk-toast-content">
      <div class="safepk-toast-title">${titleText}</div>
      <div class="safepk-toast-message">${message}</div>
    </div>
    <button class="safepk-toast-close">&times;</button>
  `;

  container.appendChild(toast);

  if (window.lucide) {
    window.lucide.createIcons();
  }

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  const dismissTimeout = setTimeout(() => {
    dismissToast();
  }, 4000);

  function dismissToast() {
    toast.classList.remove('show');
    const onTransitionEnd = () => {
      toast.removeEventListener('transitionend', onTransitionEnd);
      toast.remove();
      if (container.children.length === 0) {
        container.remove();
      }
    };
    toast.addEventListener('transitionend', onTransitionEnd);
  }

  toast.querySelector('.safepk-toast-close').addEventListener('click', () => {
    clearTimeout(dismissTimeout);
    dismissToast();
  });
}

window.showToast = showToast;

// Clipboard helper methods
window.copyToClipboard = function(text, btnId, successText = 'Copied!') {
  const btn = document.getElementById(btnId);
  if (!btn) return;

  const handleSuccess = () => {
    const origHtml = btn.innerHTML;
    btn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i> ${successText}`;
    if (window.showToast) {
      window.showToast(`${text} copied to clipboard!`, "success");
    }
    if (window.lucide) {
      window.lucide.createIcons();
    }
    setTimeout(() => {
      btn.innerHTML = origHtml;
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }, 2000);
  };

  const fallbackCopy = (val) => {
    const textArea = document.createElement("textarea"); /* Naya HTML element 'textArea' dynamically banaya ja raha hai */
    textArea.value = val;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        handleSuccess();
      } else {
        console.error('Fallback copy command failed');
      }
    } catch (err) {
      console.error('Fallback copy failed', err);
    }
    document.body.removeChild(textArea);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(handleSuccess).catch(err => {
      console.warn('Navigator clipboard failed, trying fallback...', err);
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
};

/* ---------------------------------------------------- */
/* EMERGENCY ONE-CLICK DIALER BUTTON FOR CITIZENS       */
/* ---------------------------------------------------- */
// Is function se emergency floating dialer button initialize hota hai jo direct 1799 dial pad me open karta hai.
function initPanicButton() {

  if (document.getElementById('panic-floating-btn')) return;

  const styleEl = document.createElement('style'); /* Naya HTML element 'styleEl' dynamically banaya ja raha hai */
  styleEl.innerHTML = `
    .panic-btn-container {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      font-family: var(--font-sans);
    }
    .panic-floating-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background-color: var(--color-danger);
      color: #fff !important;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: var(--radius-md);
      padding: 0.65rem 1.1rem;
      font-weight: 700;
      font-size: 0.825rem;
      cursor: pointer;
      box-shadow: var(--shadow-md);
      transition: all var(--transition-fast);
      font-family: var(--font-sans);
      text-decoration: none !important;
    }
    .panic-floating-btn:hover {
      background-color: #b91c1c;
      color: #fff !important;
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }
    @media (max-width: 640px) {
      .panic-btn-container {
        bottom: 16px;
        right: 16px;
      }
      .panic-floating-btn {
        padding: 0.65rem 1rem;
        font-size: 0.75rem;
      }
    }
  `;
  document.head.appendChild(styleEl);

  const container = document.createElement('div'); /* Naya HTML element 'container' dynamically banaya ja raha hai */
  container.id = 'panic-floating-btn';
  container.className = 'panic-btn-container';
  container.innerHTML = `
    <a href="tel:1799" class="panic-floating-btn" id="open-panic-modal-btn" aria-label="Call NCCIA Helpline 1799">
      <i data-lucide="phone-call" class="w-4 h-4"></i> NCCIA 1799
    </a>
  `;
  document.body.appendChild(container);

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Automatically mount when DOM content is loaded or script runs
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initPanicButton();
    initSecurityTools();
  });
} else {
  initPanicButton();
  initSecurityTools();
}

// Register Service Worker for PWA Offline support
const isDevEnvironment = window.location.hostname === 'localhost' ||
                         window.location.hostname === '127.0.0.1' ||
                         window.location.hostname.includes('.run.app');

if ('serviceWorker' in navigator) {
  if (isDevEnvironment) {
    // Unregister any active service worker in development/sandbox to prevent stale __DEFINES__ or caching issues
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.unregister().then((success) => {
          if (success) {
            console.log('[SafePK] Unregistered service worker in development mode to prevent stale cache issues.');
          }
        });
      }
    }).catch((err) => {
      console.warn('[SafePK] Error unregistering service workers:', err);
    });

    // Clear Cache Storage to prevent stale cached assets
    if (window.caches) {
      window.caches.keys().then((keys) => {
        keys.forEach((key) => {
          window.caches.delete(key).then(() => {
            console.log('[SafePK] Cleared Cache Storage:', key);
          });
        });
      }).catch((err) => {
        console.warn('[SafePK] Error clearing cache storage:', err);
      });
    }
  } else {
    window.addEventListener('load', () => {
      const isSubpage = window.location.pathname.includes('/pages/') || window.location.href.includes('/pages/');
      const swPath = isSubpage ? '../sw.js' : 'sw.js';
      navigator.serviceWorker.register(swPath)
        .then((registration) => {
          console.log('[SafePK] ServiceWorker successfully registered with scope: ', registration.scope);
        })
        .catch((error) => {
          console.error('[SafePK] ServiceWorker registration failed: ', error);
        });
    });
  }
}

/* ---------------------------------------------------- */
/* INCIDENT REPORT GENERATOR ENGINE                     */
/* ---------------------------------------------------- */
function initSecurityTools() {
  const fiaBuilderForm = document.getElementById('fia-builder-form');
  const fiaDraftPre = document.getElementById('fia-draft-pre');
  const scamTypeSelect = document.getElementById('fia-scam-type');

  if (!fiaBuilderForm && !scamTypeSelect) return;

  // Populate incident categories from learningTopics
  if (scamTypeSelect && typeof learningTopics !== 'undefined') {
    scamTypeSelect.innerHTML = learningTopics.map(topic =>
      `<option value="${topic.id}">${topic.title}</option>`
    ).join('');
  }

  // Handle deep-linking scamId parameter if present
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const scamIdParam = urlParams.get('scamId');
    if (scamIdParam && scamTypeSelect) {
      scamTypeSelect.value = scamIdParam;
    }
  } catch (err) {
    console.warn("[SafePK] Deep-linking parameters read restricted in this environment:", err);
  }

  if (fiaBuilderForm) {
    fiaBuilderForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('fia-fullname').value.trim();
      const phone = document.getElementById('fia-phone').value.trim();
      const scamId = document.getElementById('fia-scam-type').value;
      const offender = document.getElementById('fia-offender').value.trim();
      const timeline = document.getElementById('fia-timeline').value.trim();
      const narrative = document.getElementById('fia-narrative').value.trim();

      const scamTopic = typeof learningTopics !== 'undefined' ? learningTopics.find(t => t.id === scamId) : null;
      const scamName = scamTopic ? scamTopic.title : 'Online Digital Fraud';

      const formattedDraft = compileArziStatement(name, phone, scamName, offender, timeline, narrative);

      if (fiaDraftPre) {
        if (fiaDraftPre.tagName === 'TEXTAREA') {
          fiaDraftPre.value = formattedDraft;
        } else {
          fiaDraftPre.textContent = formattedDraft;
        }
      }
      if (window.showToast) {
        window.showToast("Incident report generated.", "success");
      }
    });
  }

  function compileArziStatement(name, phone, scamName, offender, timeline, narrative) {
    return `CYBERCRIME INCIDENT REPORT STATEMENT
--------------------------------------

1. COMPLAINANT INFORMATION
   - Full Name: ${name}
   - Contact Number: ${phone}

2. INCIDENT SUMMARY
   - Category / Nature of Incident: ${scamName}
   - Reported Number / Link / Account ID: ${offender}
   - Date & Time of Occurrence: ${timeline}

3. STATEMENT OF EVENTS
${narrative}

4. SUPPORTING RECORDS CHECKLIST
   [ ] Screenshots of messages, profiles, or call logs
   [ ] Transaction receipts / Bank or Mobile Wallet reference IDs
   [ ] Relevant URLs, phone numbers, or account identifiers
--------------------------------------`;
  }
}

// Bind functions to global window scope
window.openScamModal = openScamModal;
window.openArticleModal = openArticleModal;
window.closeUnivModal = closeUnivModal;
window.initPanicButton = initPanicButton;
window.initSecurityTools = initSecurityTools;
