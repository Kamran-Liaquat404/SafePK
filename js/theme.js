/* Theme control engine for SafePK platform */
/* This module manages dark mode and light mode settings with local storage caching and system preference sync */

var __DEFINES__ = window.__DEFINES__ || {};
window.__DEFINES__ = __DEFINES__;

// Preferred theme is clean light theme
function getPreferredTheme() {
  return 'light';
}

// Apply light theme across document
function applyTheme(theme) {
  document.documentElement.classList.remove('dark');
  document.documentElement.classList.remove('light');
}

// On page load, initialize clean white theme, responsive menu, and language toggle
function initTheme() {
  applyTheme('light');
  try {
    localStorage.setItem('safepk_theme', 'light');
    localStorage.removeItem('safepk_theme_mode');
  } catch (e) {}

  // Initialize mobile responsive menu, footer links, floating dialer & language toggle
  setupResponsiveMenu();
  ensureFooterFeedbackLink();
  ensureFloatingHelplineBtn();
  setupLanguageSwitcher();
}

// Ensure every page has the direct one-click NCCIA 1799 dialer button (opens phone dialer directly without any popup card)
function ensureFloatingHelplineBtn() {
  if (typeof window.initPanicButton === 'function') {
    window.initPanicButton();
    return; /* Function ko yahin safely roka ja raha hai */
  }
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

// Ensure every page's footer includes Feedback & Reviews, Contact link, and Official Email infosafepk@proton.me
function ensureFooterFeedbackLink() {
  const footerNavs = document.querySelectorAll('.footer-minimal-nav');
  if (!footerNavs.length) return;

  const isPagesSubfolder = window.location.pathname.includes('/pages/') || window.location.href.includes('/pages/');
  const isArticleSubfolder = /\/(individual|family|organizations|freelancers|learn)\//.test(window.location.pathname) || /\/(individual|family|organizations|freelancers|learn)\//.test(window.location.href);
  const targetHref = isPagesSubfolder ? 'reviews.html' : (isArticleSubfolder ? '../pages/reviews.html' : 'pages/reviews.html');
  const contactHref = isPagesSubfolder ? 'contact.html' : (isArticleSubfolder ? '../pages/contact.html' : 'pages/contact.html');

  footerNavs.forEach((nav) => {
    const existing = Array.from(nav.querySelectorAll('a')).some((a) => {
      const href = a.getAttribute('href') || '';
      return href.includes('reviews.html');
    });
    if (!existing) {
      const link = document.createElement('a'); /* Naya HTML element 'link' dynamically banaya ja raha hai */
      link.href = targetHref;
      link.className = 'footer-minimal-link';
      link.textContent = 'Feedback & Reviews';

      const sponsorLink = Array.from(nav.querySelectorAll('a')).find((a) =>
        (a.getAttribute('href') || '').includes('sponsor.html')
      );
      if (sponsorLink) {
        nav.insertBefore(link, sponsorLink);
      } else {
        nav.appendChild(link);
      }
    }

    const hasContact = Array.from(nav.querySelectorAll('a')).some((a) => {
      const href = a.getAttribute('href') || '';
      return href.includes('contact.html');
    });
    if (!hasContact) {
      const cLink = document.createElement('a'); /* Naya HTML element 'cLink' dynamically banaya ja raha hai */
      cLink.href = contactHref;
      cLink.className = 'footer-minimal-link';
      cLink.textContent = 'Contact';
      nav.appendChild(cLink);
    }
  });

  const footerWraps = document.querySelectorAll('.footer-minimal-wrap');
  footerWraps.forEach((wrap) => {
    wrap.querySelectorAll('.pro-share-trigger-btn').forEach((btn) => btn.remove()); /* Koi bhi Share SafePK button ho to usay remove kar dein */
    const copyEl = wrap.querySelector('.footer-minimal-copy'); /* Copyright paragraph element dhunda ja raha hai */
    if (copyEl) {
      copyEl.innerHTML = '&copy; SafePK &mdash; All Rights Reserved';
    }
    if (!wrap.querySelector('.footer-contact-row')) { /* Agar contact row pehle se nahi hai */
      const row = document.createElement('div'); /* Naya HTML element 'row' dynamically banaya ja raha hai */
      row.className = 'footer-contact-row notranslate';
      row.setAttribute('translate', 'no');
      row.innerHTML = `
        <a href="mailto:infosafepk@proton.me" class="footer-email-pill" title="Official SafePK Email: infosafepk@proton.me">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <span>infosafepk@proton.me</span>
        </a>
      `;
      if (copyEl) { /* Agar copyEl mojood hai */
        wrap.insertBefore(row, copyEl);
      } else { /* Warna */
        wrap.appendChild(row);
      }
    }
    if (copyEl) {
      while (copyEl.nextSibling) { /* Jab tak copyEl ke baad koi node mojood hai */
        wrap.removeChild(copyEl.nextSibling); /* Us node ko remove kar dein */
      }
    }
  });
}

// Theme toggle button is removed to make the UI permanently clean light.
function setupThemeToggle() {
  // Retained for backward compatibility
}

// Is function ka kaam mobile screens par side menu ya mobile list trigger karna hai.
function setupResponsiveMenu() {
  const navContainer = document.querySelector('.navbar-container');
  if (!navContainer) return;

  // Protect brand logo from automatic translation
  const logoBlock = navContainer.querySelector('.logo-block, .logo-link');
  if (logoBlock) {
    logoBlock.classList.add('notranslate');
    logoBlock.setAttribute('translate', 'no');
  }

  const navLinks = document.querySelector('.nav-links');
  const navActions = document.querySelector('.nav-actions');

  // Place language toggle button inside the menu (.nav-links) at the very end
  if (navLinks && !document.getElementById('lang-toggle-btn')) {
    const langBtn = document.createElement('button'); /* Naya HTML element 'langBtn' dynamically banaya ja raha hai */
    langBtn.id = 'lang-toggle-btn';
    langBtn.type = 'button';
    langBtn.className = 'lang-toggle-btn notranslate';
    langBtn.setAttribute('translate', 'no');
    navLinks.appendChild(langBtn);
  }

  if (document.getElementById('mobile-menu-trigger')) return;

  const trigger = document.createElement('button'); /* Naya HTML element 'trigger' dynamically banaya ja raha hai */
  trigger.id = 'mobile-menu-trigger';
  trigger.type = 'button';
  trigger.className = 'icon-btn mobile-menu-toggle';
  trigger.style.display = 'none'; // CSS media queries iska display control karengi.
  trigger.setAttribute('aria-label', 'Toggle Navigation Menu');
  trigger.setAttribute('aria-expanded', 'false');
  trigger.innerHTML = `
    <span class="hamburger-box" aria-hidden="true">
      <span class="hamburger-line line-1"></span>
      <span class="hamburger-line line-2"></span>
      <span class="hamburger-line line-3"></span>
    </span>
  `;
  trigger.title = 'Toggle Navigation Menu';

  navContainer.appendChild(trigger);

  const setMenuState = (open) => {
    if (!navLinks) return;
    navLinks.classList.toggle('mobile-open', open);
    if (navActions) navActions.classList.toggle('mobile-open', open);
    trigger.classList.toggle('is-active', open);
    trigger.setAttribute('aria-expanded', open ? 'true' : 'false');

    if (!open) {
      document.querySelectorAll('.nav-dropdown.open').forEach((dd) => {
        dd.classList.remove('open');
        const ddBtn = dd.querySelector('.nav-dropdown-trigger');
        if (ddBtn) ddBtn.setAttribute('aria-expanded', 'false');
      });
    }
  };

  window.__closeSafePKMobileMenu = () => setMenuState(false);

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isShowing = !navLinks.classList.contains('mobile-open');
    setMenuState(isShowing);
  });

  // Close mobile menu when clicking a direct navigation link inside the drawer
  if (navLinks) {
    navLinks.querySelectorAll('a.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        setMenuState(false);
      });
    });
  }

  // Close mobile menu automatically when user clicks or touches anywhere outside the menu & toggle button
  const handleOutsideInteraction = (e) => {
    if (!navLinks || !navLinks.classList.contains('mobile-open')) return;
    const target = e.target;
    if (navLinks.contains(target) || trigger.contains(target)) return;
    setMenuState(false);
  };

  document.addEventListener('click', handleOutsideInteraction);
  document.addEventListener('touchstart', handleOutsideInteraction, { passive: true });

  // Close on Escape key or desktop resize
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('mobile-open')) {
      setMenuState(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('mobile-open')) {
      setMenuState(false);
    }
  });

  // Setup Audience Dropdown Interactions
  setupAudienceDropdown(navLinks, trigger);
}

// ============================================================================
// Live Urdu <-> English Language Switcher (All Pages Instant Sync)
// ============================================================================

const ALL_SITE_PAGES = [
  '/index.html',
  '/individual.html',
  '/family.html',
  '/organizations.html',
  '/freelancers.html',
  '/donate.html',
  '/sponsor.html',
  '/kamran-liaquat.html',
  '/about.html',
  '/pages/about.html',
  '/pages/contact.html',
  '/pages/cookie-policy.html',
  '/pages/cyber-assistance-disclaimer.html',
  '/pages/directory.html',
  '/pages/disclaimer.html',
  '/pages/donate.html',
  '/pages/external-links-policy.html',
  '/pages/help.html',
  '/pages/reviews.html',
  '/pages/learn.html',
  '/pages/privacy-policy.html',
  '/pages/terms-of-use.html',
  '/pages/tools.html'
];

// Cross-tab & cross-page live broadcast channel
let langBroadcast = null;
try {
  if (typeof BroadcastChannel !== 'undefined') {
    langBroadcast = new BroadcastChannel('safepk_lang_channel');
    langBroadcast.onmessage = (event) => {
      if (event.data && (event.data.lang === 'ur' || event.data.lang === 'en')) {
        try {
          sessionStorage.setItem(LANG_SESSION_KEY, event.data.lang);
        } catch (e) {}
        syncCurrentPageLanguage();
      }
    };
  }
} catch (e) {
  // Ignore if BroadcastChannel is unsupported
}

// Explicit language state key (strictly defaults to English on initial website visit;
// only translates to Urdu after the user manually clicks the Urdu button)
const LANG_SESSION_KEY = 'safepk_active_lang_session';

function getActiveLanguage() {
  // Primary and ONLY source of truth is explicit user choice in the active browsing session.
  // Never fall back to leftover googtrans cookies or old localStorage keys so initial load is 100% English.
  try {
    const sessionLang = sessionStorage.getItem(LANG_SESSION_KEY);
    if (sessionLang === 'ur' || sessionLang === 'en') {
      return sessionLang;
    }
  } catch (e) {}

  return 'en';
}

function setLanguageCookies(targetLang, isExplicitUserAction = false) {
  const host = window.location.hostname;
  const maxAge = 60 * 60 * 24 * 365; // 1 year persistence
  const isSecure = window.location.protocol === 'https:';
  // Set both Lax and None (when HTTPS) so cookies work in both standalone windows and preview iframes
  const flagsList = isSecure
    ? ['; SameSite=Lax; Secure', '; SameSite=None; Secure']
    : ['; SameSite=Lax'];

  const paths = ['/', '/pages', '/pages/'];
  const domains = [''];
  if (host && host !== 'localhost' && host !== '127.0.0.1') {
    domains.push('; domain=' + host);
    domains.push('; domain=.' + host);
  }

  // Clean up legacy storage keys from older versions so they never auto-trigger Urdu on fresh load
  try {
    localStorage.removeItem('safepk_lang');
    localStorage.removeItem('safepk_user_lang_v2');
    sessionStorage.removeItem('safepk_lang');
  } catch (e) {}

  if (targetLang === 'ur') {
    try {
      if (isExplicitUserAction) {
        sessionStorage.setItem(LANG_SESSION_KEY, 'ur');
      }
    } catch (e) {}

    flagsList.forEach((flag) => {
      // Default current-path cookie
      document.cookie = 'googtrans=/en/ur; max-age=' + maxAge + flag;
      paths.forEach((p) => {
        domains.forEach((d) => {
          document.cookie = 'googtrans=/en/ur; path=' + p + '; max-age=' + maxAge + d + flag;
        });
      });
    });
  } else {
    try {
      sessionStorage.setItem(LANG_SESSION_KEY, 'en');
    } catch (e) {}

    // Clear any #googtrans hash from URL if present
    if (window.location.hash && window.location.hash.includes('googtrans')) {
      try {
        history.replaceState(null, document.title, window.location.pathname + window.location.search);
      } catch (e) {}
    }

    const expire = 'expires=Thu, 01 Jan 1970 00:00:00 UTC';
    flagsList.forEach((flag) => {
      document.cookie = 'googtrans=; ' + expire + flag;
      paths.forEach((p) => {
        domains.forEach((d) => {
          document.cookie = 'googtrans=; ' + expire + '; path=' + p + d + flag;
        });
      });
    });
  }
}

// Immediately enforce default English (or active user choice) BEFORE any scripts run
(function preBootLanguageSync() {
  const active = getActiveLanguage();
  setLanguageCookies(active, false);
  document.documentElement.setAttribute('lang', active === 'ur' ? 'ur' : 'en');
  document.documentElement.setAttribute('data-safepk-lang', active);
})();

// Pre-warm all website pages in the background within 1 second so navigation is instant and cookies are propagated
function prewarmAllWebsitePages(targetLang) {
  if (!navigator.onLine) return;

  // Broadcast to any other open tabs/windows immediately
  if (langBroadcast) {
    try {
      langBroadcast.postMessage({ lang: targetLang, timestamp: Date.now() });
    } catch (e) {}
  }

  // Background fetch all HTML pages in parallel so browser HTTP cache + cookies are warmed up within 1 second
  try {
    ALL_SITE_PAGES.forEach((pagePath) => {
      fetch(pagePath, {
        method: 'GET',
        credentials: 'same-origin',
        cache: 'default'
      }).catch(() => {});
    });
  } catch (e) {}
}

function triggerComboLanguage(combo, langCode) {
  if (!combo) return;
  combo.value = langCode;
  combo.dispatchEvent(new Event('change', { bubbles: true }));
  try {
    const evt = document.createEvent('HTMLEvents');
    evt.initEvent('change', true, true);
    combo.dispatchEvent(evt);
  } catch (e) {
    // Ignore fallback error
  }
}

function updateLangButtonUI(currentLang) {
  const btn = document.getElementById('lang-toggle-btn');
  if (!btn) return;

  const globeSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>';

  if (currentLang === 'ur') {
    // Website is currently in Urdu -> show "English" on the button
    btn.innerHTML = globeSvg + '<span>English</span>';
    btn.title = 'Switch website language to English';
    btn.setAttribute('aria-label', 'Switch website language to English');
  } else {
    // Website is currently in English -> show "اردو" on the button
    btn.innerHTML = globeSvg + '<span>اردو</span>';
    btn.title = 'ویب سائٹ اردو میں دیکھیں (Switch to Urdu)';
    btn.setAttribute('aria-label', 'Switch website language to Urdu');
  }
}

function showOfflineLanguageToast() {
  let toast = document.getElementById('lang-offline-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'lang-offline-toast';
    toast.className = 'lang-offline-toast notranslate';
    toast.setAttribute('translate', 'no');
    toast.textContent = 'Internet connection is required to switch language / زبان تبدیل کرنے کے لیے انٹرنیٹ ضروری ہے';
    document.body.appendChild(toast);
  }
  toast.classList.add('show');
  clearTimeout(window.__langToastTimer);
  window.__langToastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// Keep a single global callback queue so multiple callers never overwrite each other
window.__safepkTranslateCallbacks = window.__safepkTranslateCallbacks || [];

function ensureGoogleTranslateLoaded(callback) {
  if (!navigator.onLine) {
    showOfflineLanguageToast();
    return; /* Function ko yahin safely roka ja raha hai */
  }

  if (callback) {
    window.__safepkTranslateCallbacks.push(callback);
  }

  // Ensure hidden container exists
  if (document.body && !document.getElementById('google_translate_element')) {
    const holder = document.createElement('div'); /* Naya HTML element 'holder' dynamically banaya ja raha hai */
    holder.id = 'google_translate_element';
    holder.className = 'notranslate';
    holder.setAttribute('translate', 'no');
    holder.style.display = 'none';
    document.body.appendChild(holder);
  }

  const flushCallbacks = (combo) => {
    const queue = window.__safepkTranslateCallbacks.splice(0);
    queue.forEach((cb) => {
      try {
        cb(combo);
      } catch (e) {}
    });
  };

  const waitForReadyCombo = () => {
    if (window.__safepkComboPoller) return;
    let attempts = 0;
    window.__safepkComboPoller = setInterval(() => {
      attempts++;
      const combo = document.querySelector('.goog-te-combo');
      // Wait until combo exists AND its language options are populated
      if ((combo && combo.options && combo.options.length > 0) || attempts > 80) {
        clearInterval(window.__safepkComboPoller);
        window.__safepkComboPoller = null;
        if (combo) {
          flushCallbacks(combo);
        }
      }
    }, 60);
  };

  const existingCombo = document.querySelector('.goog-te-combo');
  if (existingCombo && existingCombo.options && existingCombo.options.length > 0) {
    flushCallbacks(existingCombo);
    return; /* Function ko yahin safely roka ja raha hai */
  }

  window.googleTranslateElementInit = function () {
    try {
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,ur',
            autoDisplay: false
          },
          'google_translate_element'
        );
      }
    } catch (e) {}
    waitForReadyCombo();
  };

  if (!document.getElementById('google-translate-script')) {
    const script = document.createElement('script'); /* Naya HTML element 'script' dynamically banaya ja raha hai */
    script.id = 'google-translate-script';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.onerror = function () {
      showOfflineLanguageToast();
    };
    document.head.appendChild(script);
  } else {
    // If google.translate is already loaded but widget wasn't instantiated yet
    if (
      window.google &&
      window.google.translate &&
      window.google.translate.TranslateElement &&
      !document.querySelector('.goog-te-combo')
    ) {
      window.googleTranslateElementInit();
    } else {
      waitForReadyCombo();
    }
  }
}

function forceApplyUrduOnCombo(combo) {
  const activeCombo = combo || document.querySelector('.goog-te-combo');
  if (activeCombo) {
    triggerComboLanguage(activeCombo, 'ur');
  }

  // Poll rapidly (every 150ms) until Google Translate translates the page into Urdu
  clearInterval(window.__safepkUrduVerifyTimer);
  let checks = 0;
  window.__safepkUrduVerifyTimer = setInterval(() => {
    checks++;
    const htmlEl = document.documentElement;
    const isTranslated =
      htmlEl.classList.contains('translated-rtl') ||
      htmlEl.classList.contains('translated-ltr');

    if (isTranslated || getActiveLanguage() !== 'ur' || checks >= 20) {
      clearInterval(window.__safepkUrduVerifyTimer);
      return; /* Function ko yahin safely roka ja raha hai */
    }
    const freshCombo = document.querySelector('.goog-te-combo') || activeCombo;
    if (freshCombo) {
      triggerComboLanguage(freshCombo, 'ur');
    }
  }, 150);
}

function applyLanguageSwitch(targetLang) {
  if (!navigator.onLine) {
    showOfflineLanguageToast();
    return; /* Function ko yahin safely roka ja raha hai */
  }

  setLanguageCookies(targetLang, true);
  document.documentElement.setAttribute('lang', targetLang === 'ur' ? 'ur' : 'en');
  document.documentElement.setAttribute('data-safepk-lang', targetLang);
  updateLangButtonUI(targetLang);

  // Call & pre-warm all website pages in the background within 1s
  prewarmAllWebsitePages(targetLang);

  if (targetLang === 'ur') {
    ensureGoogleTranslateLoaded((combo) => {
      forceApplyUrduOnCombo(combo);
    });
  } else {
    clearInterval(window.__safepkUrduVerifyTimer);
    // Switching back to English across all pages
    const combo = document.querySelector('.goog-te-combo');
    if (combo) {
      triggerComboLanguage(combo, 'en');
      triggerComboLanguage(combo, '');
    }

    setTimeout(() => {
      const htmlEl = document.documentElement;
      if (
        htmlEl.classList.contains('translated-rtl') ||
        htmlEl.classList.contains('translated-ltr') ||
        document.querySelector('.goog-te-combo')
      ) {
        window.location.reload();
      }
    }, 120);
  }
}

function syncCurrentPageLanguage() {
  const activeLang = navigator.onLine ? getActiveLanguage() : 'en';
  document.documentElement.setAttribute('lang', activeLang === 'ur' ? 'ur' : 'en');
  document.documentElement.setAttribute('data-safepk-lang', activeLang);
  updateLangButtonUI(activeLang);

  if (!navigator.onLine) return;

  if (activeLang === 'ur') {
    // User explicitly selected Urdu -> ensure cookie is set and translate page
    setLanguageCookies('ur', false);
    ensureGoogleTranslateLoaded((combo) => {
      forceApplyUrduOnCombo(combo);
    });
  } else {
    // Default or explicitly English -> DO NOT load Google Translate script at all!
    // Clear any leftover Google Translate cookies/state so it stays 100% pure English.
    clearInterval(window.__safepkUrduVerifyTimer);
    setLanguageCookies('en', false);
    const htmlEl = document.documentElement;
    if (
      htmlEl.classList.contains('translated-rtl') ||
      htmlEl.classList.contains('translated-ltr')
    ) {
      const combo = document.querySelector('.goog-te-combo');
      if (combo) {
        triggerComboLanguage(combo, 'en');
        triggerComboLanguage(combo, '');
      }
      window.location.reload();
    }
  }
}

function setupLanguageSwitcher() {
  const btn = document.getElementById('lang-toggle-btn');

  // Always sync current page language immediately on call
  syncCurrentPageLanguage();

  if (!btn || btn.dataset.bound === 'true') return;
  btn.dataset.bound = 'true';

  // Handle browser back/forward cache (bfcache), visibility, focus, and storage events so every page stays in sync
  window.addEventListener('pageshow', () => {
    syncCurrentPageLanguage();
  });

  window.addEventListener('focus', () => {
    syncCurrentPageLanguage();
  });

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      syncCurrentPageLanguage();
    }
  });

  window.addEventListener('storage', (e) => {
    if (e.key === LANG_SESSION_KEY) {
      syncCurrentPageLanguage();
    }
  });

  btn.addEventListener('click', () => {
    if (!navigator.onLine) {
      showOfflineLanguageToast();
      return; /* Function ko yahin safely roka ja raha hai */
    }
    const current = getActiveLanguage();
    const next = current === 'ur' ? 'en' : 'ur';
    applyLanguageSwitch(next);

    // Close mobile menu drawer if open after selecting language
    if (typeof window.__closeSafePKMobileMenu === 'function') {
      window.__closeSafePKMobileMenu();
    }
  });

  // Prevent Google Translate from pushing body down by 40px
  if (window.MutationObserver && document.body) {
    const bodyObserver = new MutationObserver(() => {
      if (document.body.style.top && document.body.style.top !== '0px') {
        document.body.style.top = '0px';
      }
      const banner = document.querySelector('.goog-te-banner-frame');
      if (banner) {
        banner.style.display = 'none';
      }
    });
    bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['style'] });
  }
}

// Self-boot fallback: even if a page doesn't explicitly call initTheme(), ensure it initializes on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('lang-toggle-btn')) {
      initTheme();
    } else {
      syncCurrentPageLanguage();
    }
  });
} else {
  setTimeout(() => {
    if (!document.getElementById('lang-toggle-btn')) {
      initTheme();
    } else {
      syncCurrentPageLanguage();
    }
  }, 0);
}

function setupAudienceDropdown(navLinks, mobileTrigger) {
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.nav-dropdown-trigger');
    const items = dropdown.querySelectorAll('.nav-dropdown-item');

    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = dropdown.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    items.forEach(item => {
      // Clicking an audience option closes the menu and navigates directly to its dedicated page
      item.addEventListener('click', () => {
        dropdown.classList.remove('open');
        if (btn) btn.setAttribute('aria-expanded', 'false');
        if (typeof window.__closeSafePKMobileMenu === 'function') {
          window.__closeSafePKMobileMenu();
        }
      });
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        const btn = dropdown.querySelector('.nav-dropdown-trigger');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// Keep light theme permanently active
function toggleTheme() {
  applyTheme('light');
}

// ============================================================================
// Pro Share System (safepk.net Canonical Share Modal & Quick Social Actions)
// ============================================================================
function getCanonicalSafePKUrl(customPathOrQuery) { /* 'getCanonicalSafePKUrl' function safepk.net domain ke sath clean shareable URL banata hai */
  const baseDomain = 'https://safepk.net';
  if (customPathOrQuery && typeof customPathOrQuery === 'string') {
    if (customPathOrQuery.startsWith('http://') || customPathOrQuery.startsWith('https://')) {
      return customPathOrQuery; /* Poora URL wapas bheja ja raha hai */
    }
    const cleanRel = customPathOrQuery.startsWith('/') ? customPathOrQuery : '/' + customPathOrQuery;
    return baseDomain + cleanRel;
  }
  let path = window.location.pathname || '/'; /* Current page ka path liya ja raha hai */
  if (path === '/index.html') path = '/'; /* Home page path ko clean root '/' banaya ja raha hai */
  const search = window.location.search || ''; /* URL query parameters liye ja rahe hain */
  return baseDomain + path + search; /* Final safepk.net URL wapas bheja ja raha hai */
}

// In saare helpers ko global window scope me expose kar rahe hain taake pages inko access kar sakein.
window.initTheme = initTheme;
window.setupResponsiveMenu = setupResponsiveMenu;
window.setupThemeToggle = setupThemeToggle;
window.toggleTheme = toggleTheme;
window.getCanonicalSafePKUrl = getCanonicalSafePKUrl;
