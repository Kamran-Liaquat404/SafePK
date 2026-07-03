/* Theme control engine for SafePK platform */
/* This module manages dark mode and light mode settings with local storage caching and system preference sync */

// Yahan global setup initialize ho raha hai.
var __DEFINES__ = window.__DEFINES__ || {};
window.__DEFINES__ = __DEFINES__;

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
}

// Theme toggle button is removed to make the UI permanently GitHub Dark.
// Kisi aur toggle setup ki ab zaroorat nahi hai.
function setupThemeToggle() {
  // Theme toggle button is removed to make the UI permanently GitHub Dark
}

// Is function ka kaam mobile screens par side menu ya mobile list trigger karna hai.
function setupResponsiveMenu() {
  const navContainer = document.querySelector('.navbar-container');
  if (!navContainer) return;

  const navLinks = document.querySelector('.nav-links');
  const navActions = document.querySelector('.nav-actions');

  // Agar toggle button pehle se hi render ho chuka hai, to dubara nahi banayenge.
  if (document.getElementById('mobile-menu-trigger')) return;

  // Menu button element dynamically create ho raha hai.
  const trigger = document.createElement('button');
  trigger.id = 'mobile-menu-trigger';
  trigger.className = 'icon-btn mobile-menu-toggle';
  trigger.style.display = 'none'; // CSS media queries iska display control karengi.
  trigger.innerHTML = '<i data-lucide="menu" class="w-5 h-5"></i>';
  trigger.title = 'Toggle Navigation Menu';

  navContainer.appendChild(trigger);

  // Click handler jo mobile views me links ko slide-in ya hide karega.
  trigger.addEventListener('click', () => {
    const isShowing = navLinks.classList.toggle('mobile-open');
    if (navActions) navActions.classList.toggle('mobile-open', isShowing);
    trigger.innerHTML = isShowing ? '<i data-lucide="x" class="w-5 h-5"></i>' : '<i data-lucide="menu" class="w-5 h-5"></i>';
    
    // Lucide icons re-render ho rahe hain icons update hone par.
    if (window.lucide) {
      window.lucide.createIcons();
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
