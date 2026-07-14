/* Theme control engine for SafePK platform */
/* This module manages dark mode and light mode settings with local storage caching and system preference sync */

// Yahan global setup initialize ho raha hai.
var __DEFINES__ = window.__DEFINES__ || {};
window.__DEFINES__ = __DEFINES__;

// Global error shield to handle and silence cross-origin and third-party script/ad network errors
window.onerror = function (message, source, lineno, colno, error) {
  const msg = String(message || '');
  const src = String(source || '');
  if (
    msg.includes('Script error.') || 
    src.includes('highperformanceformat') || 
    src.includes('unpkg.com') ||
    src.includes('lucide')
  ) {
    console.warn('[SafePK] Silenced cross-origin or third-party script error:', msg, 'at', src);
    return true; // Stop error from propagating and showing up in browser / test runner console as unhandled
  }
  return false; // Let local/important errors propagate normally
};

// Also handle unhandled promise rejections which can be triggered by cross-origin resource blockages
window.addEventListener('unhandledrejection', function (event) {
  const reason = String(event.reason || '');
  if (reason.includes('Script error.') || reason.includes('lucide') || reason.includes('highperformanceformat')) {
    console.warn('[SafePK] Silenced unhandled rejection:', reason);
    event.preventDefault();
  }
});

// Is function ka kaam preferred theme return karna hai, jo ke hamesha 'dark' rahega.
function getPreferredTheme() {
  return 'dark';
}

// Is function ke zariye pure document standard par 'dark' class apply ki jati hai.
function applyTheme(theme) {
  document.documentElement.classList.add('dark');
}

// Jab page load hoga, to ye function call hoga aur system ko permanently dark mode me lock kar dega.
function initTheme() {
  applyTheme('dark');
  localStorage.setItem('safepk_theme', 'dark');
  
  // Mobile responsive dynamic menus ko initialize karne ke liye helper call ho raha hai.
  setupResponsiveMenu();
  
  // Scroll to Top paper plane button ko initialize karein.
  initScrollToTop();
}

// Ek interactive "Back to Top" plane button setup karne ka function.
function initScrollToTop() {
  if (document.getElementById('back-to-top-btn')) return;

  // CSS Styles inject karein with dynamic hover and smooth flight animation
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    .back-to-top-container {
      position: fixed;
      bottom: 24px;
      left: 24px;
      z-index: 9999;
      pointer-events: none;
    }
    .back-to-top-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3.25rem;
      height: 3.25rem;
      background: rgba(15, 23, 42, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #94a3b8;
      border-radius: 50%;
      cursor: pointer;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      opacity: 0;
      transform: translateY(15px) scale(0.8);
      pointer-events: none;
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .back-to-top-btn.show {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: auto;
    }
    .back-to-top-btn:hover {
      background: rgba(30, 41, 59, 0.9);
      border-color: #38bdf8;
      color: #38bdf8;
      box-shadow: 0 8px 30px rgba(56, 189, 248, 0.25);
      transform: translateY(-4px) scale(1.05);
    }
    .back-to-top-btn:active {
      transform: translateY(-1px) scale(0.97);
    }
    .plane-icon {
      transition: transform 0.3s ease;
    }
    .back-to-top-btn:hover .plane-icon {
      transform: translate(2px, -2px) rotate(-10deg);
    }
    .back-to-top-btn.flying .plane-icon {
      animation: plane-fly-away 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    @keyframes plane-fly-away {
      0% {
        transform: translate(2px, -2px) rotate(-10deg) scale(1);
        opacity: 1;
      }
      40% {
        transform: translate(-3px, 3px) rotate(5deg) scale(0.95);
        opacity: 0.9;
      }
      100% {
        transform: translate(50px, -50px) rotate(-45deg) scale(1.5);
        opacity: 0;
      }
    }
    @media (max-width: 640px) {
      .back-to-top-container {
        bottom: 16px;
        left: 16px;
        transform: none;
      }
      .back-to-top-btn {
        width: 2.85rem;
        height: 2.85rem;
      }
    }
  `;
  document.head.appendChild(styleEl);

  // Button element create karein
  const container = document.createElement('div');
  container.className = 'back-to-top-container';
  
  const btn = document.createElement('button');
  btn.id = 'back-to-top-btn';
  btn.className = 'back-to-top-btn';
  btn.setAttribute('aria-label', 'Scroll to Top');
  btn.setAttribute('title', 'Back to Top');
  btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="plane-icon" style="width: 1.25rem; height: 1.25rem;">
      <path d="m22 2-7 20-4-9-9-4Z"></path>
      <path d="M22 2 11 13"></path>
    </svg>
  `;
  
  container.appendChild(btn);
  document.body.appendChild(container);

  // Scroll visibility check karein based on 80% page scroll
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (scrollPercent >= 80) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  // Smooth scroll and takeoff animation
  btn.addEventListener('click', () => {
    if (btn.classList.contains('flying')) return;
    
    btn.classList.add('flying');
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    setTimeout(() => {
      btn.classList.remove('flying');
    }, 850);
  });
}

// Theme toggle button is removed to make the UI permanently GitHub Dark.
// Kisi aur toggle setup ki ab zaroorat nahi hai.
function setupThemeToggle() {
  // Theme toggle button is removed to make the UI permanently GitHub Dark
}

// Is function ka kaam mobile screens par professional navigation trigger karna hai.
function setupResponsiveMenu() {
  const header = document.querySelector('header');
  const navContainer = document.querySelector('.navbar-container');
  if (!navContainer || !header) return;

  // Pehle se mojood triggers ya dropdowns ko remove karna taake duplicate na hon
  const existingTrigger = document.getElementById('mobile-menu-trigger');
  if (existingTrigger) existingTrigger.remove();
  const existingDropdown = document.getElementById('mobile-nav-dropdown');
  if (existingDropdown) existingDropdown.remove();

  // Mobile menu button container ke right me append karne ke liye create ho raha hai
  const trigger = document.createElement('button');
  trigger.id = 'mobile-menu-trigger';
  trigger.className = 'mobile-menu-toggle-btn';
  trigger.setAttribute('aria-label', 'Toggle Navigation Menu');
  trigger.innerHTML = `
    <span class="hamburger-bar"></span>
    <span class="hamburger-bar"></span>
    <span class="hamburger-bar"></span>
  `;

  navContainer.appendChild(trigger);

  // Path check karne ka automatic robust system taake subpages par links na tootain
  const isSubpage = window.location.pathname.includes('/pages/') || 
                    (window.location.pathname.split('/').filter(Boolean).slice(-2)[0] === 'pages');
  const basePath = isSubpage ? '../' : '';
  const pagesPath = isSubpage ? '' : 'pages/';

  const path = window.location.pathname;
  let activeIndex = 0; // Default: Home
  if (path.includes('learn.html')) activeIndex = 1;
  else if (path.includes('tools.html')) activeIndex = 2;
  else if (path.includes('directory.html')) activeIndex = 3;
  else if (path.includes('help.html')) activeIndex = 4;

  // Mobile dropdown content build karna beautiful SVGs ke sath
  const dropdown = document.createElement('div');
  dropdown.id = 'mobile-nav-dropdown';
  dropdown.className = 'mobile-navigation-dropdown';
  dropdown.innerHTML = `
    <div class="mobile-dropdown-inner">
      <a href="${basePath}index.html" class="mobile-nav-item ${activeIndex === 0 ? 'active' : ''}">
        <span class="mobile-nav-link-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-icon"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          Home
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon"><path d="m9 18 6-6-6-6"></path></svg>
      </a>
      <a href="${pagesPath}learn.html" class="mobile-nav-item ${activeIndex === 1 ? 'active' : ''}">
        <span class="mobile-nav-link-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-icon"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
          Learn
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon"><path d="m9 18 6-6-6-6"></path></svg>
      </a>
      <a href="${pagesPath}tools.html" class="mobile-nav-item ${activeIndex === 2 ? 'active' : ''}">
        <span class="mobile-nav-link-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-icon"><rect x="3" y="11" width="18" height="10" rx="2"></rect><path d="M12 2v9"></path><path d="M8 5h8"></path></svg>
          Tools
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon"><path d="m9 18 6-6-6-6"></path></svg>
      </a>
      <a href="${pagesPath}directory.html" class="mobile-nav-item ${activeIndex === 3 ? 'active' : ''}">
        <span class="mobile-nav-link-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-icon"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          Directory
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon"><path d="m9 18 6-6-6-6"></path></svg>
      </a>
      <a href="${pagesPath}help.html" class="mobile-nav-item ${activeIndex === 4 ? 'active' : ''}">
        <span class="mobile-nav-link-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-icon"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          Help Center
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon"><path d="m9 18 6-6-6-6"></path></svg>
      </a>
    </div>
  `;

  // Header ke exact neeche mobile menu append ho jayega
  header.appendChild(dropdown);

  // Click triggers toggle menu dropdown action
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    trigger.classList.toggle('active');
    document.body.classList.toggle('mobile-nav-active', isOpen);
  });

  // Clicking anywhere on the screen (including navigation buttons/links inside or any outside area) closes the dropdown
  document.addEventListener('click', (e) => {
    if (e.target !== trigger && !trigger.contains(e.target)) {
      dropdown.classList.remove('open');
      trigger.classList.remove('active');
      document.body.classList.remove('mobile-nav-active');
    }
  });
}

// Forced mode function user custom triggers ko bypass karne ke liye.
function toggleTheme() {
  applyTheme('dark');
  localStorage.setItem('safepk_theme', 'dark');
}

// In saare helpers ko global window scope me expose kar rahe hain taake pages inko access kar sakein.
window.initTheme = initTheme;
window.setupResponsiveMenu = setupResponsiveMenu;
window.setupThemeToggle = setupThemeToggle;
window.toggleTheme = toggleTheme;
