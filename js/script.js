/* Global Application Helper Engine for SafePK */
/* Is module me universal modal openings, clipboard helpers aur custom routes configurations handle hote hain */

// Global state / setup defining
var __DEFINES__ = window.__DEFINES__ || {};
window.__DEFINES__ = __DEFINES__;

// Setup global modal handlers
// Is function se scam details wala card pop-up (modal) me load hota hai.
function openScamModal(id) {
  // learningTopics array se correct card search kiya jata hai.
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

  // Set reporting trigger button
  modalFooter.innerHTML = `
    <button class="btn btn-secondary" onclick="window.closeUnivModal()">Close</button>
    <a href="${targetToolsUrl}" class="btn btn-primary" style="font-size: 0.75rem;">
      <i data-lucide="file-text" class="w-4 h-4"></i> Draft FIA Complaint Report
    </a>
  `;
  
  modal.classList.add('show');
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Is function ke zariye legal updates ya acts articles ka complete modal render hota hai.
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
  // Agar container body me nahi hai to dynamic create karein.
  if (!container) {
    container = document.createElement('div');
    container.id = 'safepk-toast-container';
    container.className = 'safepk-toast-container';
    document.body.appendChild(container);
  }
  
  const toast = document.createElement('div');
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
    const textArea = document.createElement("textarea");
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
/* EMERGENCY PANIC BUTTON POP-UP SYSTEM FOR CITIZENS */
/* ---------------------------------------------------- */
// Is function se emergency floating dialer buttons initialize hote hain.
function initPanicButton() {
  // Agar button pehle se hi container me active hai to bypass karein.
  if (document.getElementById('panic-floating-btn')) return;

  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    .panic-btn-container {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      font-family: var(--font-sans);
    }
    .panic-floating-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background-color: var(--color-danger);
      color: #fff;
      border: none;
      border-radius: 9999px;
      padding: 0.75rem 1.25rem;
      font-weight: 700;
      font-size: 0.85rem;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(248, 113, 113, 0.4);
      transition: all var(--transition-fast);
      animation: pulse-red-rings 2s infinite;
      font-family: var(--font-sans);
    }
    .panic-floating-btn:hover {
      background-color: #ef4444;
      transform: translateY(-2px);
      box-shadow: 0 6px 25px rgba(248, 113, 113, 0.6);
    }
    .panic-modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(2, 6, 23, 0.85);
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      opacity: 0;
      pointer-events: none;
      transition: opacity var(--transition-normal);
      padding: 1rem;
    }
    .panic-modal-backdrop.show {
      opacity: 1;
      pointer-events: auto;
    }
    .panic-modal-card {
      background-color: var(--bg-secondary);
      border: 2px solid var(--color-danger);
      border-radius: 1.5rem;
      width: 100%;
      max-width: 460px;
      padding: 2rem;
      box-shadow: 0 10px 40px rgba(248, 113, 113, 0.15);
      transform: scale(0.95);
      transition: transform var(--transition-normal);
      position: relative;
    }
    .panic-modal-backdrop.show .panic-modal-card {
      transform: scale(1);
    }
    .panic-modal-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      color: var(--text-secondary);
      cursor: pointer;
      padding: 0.25rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all var(--transition-fast);
    }
    .panic-modal-close:hover {
      background-color: rgba(255, 255, 255, 0.05);
      color: var(--text-primary);
    }
    .panic-number-grid {
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      margin-top: 1.5rem;
      max-height: 50vh;
      overflow-y: auto;
      padding-right: 0.25rem;
    }
    .panic-number-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.9rem;
      background-color: var(--bg-tertiary);
      border: 1px solid var(--border-muted);
      border-radius: 1rem;
      transition: all var(--transition-fast);
      gap: 0.75rem;
    }
    .panic-number-row:hover {
      border-color: var(--color-danger);
      background-color: rgba(248, 113, 113, 0.02);
    }
    .panic-number-info {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      text-align: left;
    }
    .panic-number-title {
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--text-primary);
    }
    .panic-number-desc {
      font-size: 0.72rem;
      color: var(--text-secondary);
      line-height: 1.3;
    }
    .panic-call-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background-color: var(--color-danger-bg);
      color: var(--color-danger);
      border: 1px solid rgba(248, 113, 113, 0.3);
      padding: 0.45rem 0.8rem;
      border-radius: 0.75rem;
      font-size: 0.78rem;
      font-weight: 700;
      font-family: var(--font-mono);
      text-decoration: none;
      transition: all var(--transition-fast);
      white-space: nowrap;
    }
    .panic-call-btn:hover {
      background-color: var(--color-danger);
      color: #fff;
      transform: translateY(-1px);
    }
    @keyframes pulse-red-rings {
      0% {
        box-shadow: 0 0 0 0 rgba(248, 113, 113, 0.6);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(248, 113, 113, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(248, 113, 113, 0);
      }
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
      .panic-modal-card {
        padding: 1.5rem 1.25rem;
      }
      .panic-number-title {
        font-size: 0.82rem;
      }
      .panic-number-desc {
        font-size: 0.68rem;
      }
    }
  `;
  document.head.appendChild(styleEl);

  const container = document.createElement('div');
  container.id = 'panic-floating-btn';
  container.className = 'panic-btn-container';
  container.innerHTML = `
    <button class="panic-floating-btn" id="open-panic-modal-btn">
      <i data-lucide="shield-alert" class="w-4 h-4"></i> NCCIA 1799
    </button>
  `;
  document.body.appendChild(container);

  const backdrop = document.createElement('div');
  backdrop.id = 'panic-modal-backdrop';
  backdrop.className = 'panic-modal-backdrop';
  backdrop.innerHTML = `
    <div class="panic-modal-card">
      <button class="panic-modal-close" id="close-panic-modal-btn">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
      
      <div style="text-align: center; margin-bottom: 1.25rem;">
        <div style="width: 3rem; height: 3rem; border-radius: 50%; background-color: rgba(248, 113, 113, 0.1); color: var(--color-danger); display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem auto;">
          <i data-lucide="alert-octagon" class="w-6 h-6"></i>
        </div>
        <h3 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.25rem;">EMERGENCY HELPLINE</h3>
        <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.4; max-width: 350px; margin: 0 auto;">
          One-touch secure dial link for Pakistani citizens facing financial scams, security threats, or cyber harassment.
        </p>
      </div>

      <div class="panic-number-grid">
        <!-- Row 1: NCCIA Helpline -->
        <div class="panic-number-row">
          <div class="panic-number-info">
            <span class="panic-number-title">NCCIA Helpline</span>
            <span class="panic-number-desc">Report cyber crimes, online financial frauds, harassment, and hacking.</span>
          </div>
          <a href="tel:1799" class="panic-call-btn">
            <i data-lucide="phone" class="w-3 h-3"></i> 1799
          </a>
        </div>
      </div>

      <div style="margin-top: 1.15rem; font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted); text-align: center; border-top: 1px solid var(--border-muted); padding-top: 0.75rem; line-height: 1.35;">
        * Dialing helplines early helps secure transit funds and block fraudulent numbers.
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);

  // Event handlers
  const openBtn = document.getElementById('open-panic-modal-btn');
  const closeBtn = document.getElementById('close-panic-modal-btn');

  openBtn.addEventListener('click', () => {
    backdrop.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    backdrop.classList.remove('show');
  });

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      backdrop.classList.remove('show');
    }
  });

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
/* FREE CYBER SECURITY TOOLS INTERACTIVE SYSTEM ENGINE */
/* ---------------------------------------------------- */
// Tools page ke dynamic features (password strength check, generator, quiz) ko handle karne ke liye main initializer.
function initSecurityTools() {
  const tabHeaders = document.getElementById('tools-tab-headers');
  if (!tabHeaders) return; // Agar tools page nahi hai to skip karein.

  // 1. POPULATE SCAM TYPES IN DRAFT BUILDER SELECT
  // FIA complaint form me dropdown choices ko standard learningTopics se build karna.
  const scamTypeSelect = document.getElementById('fia-scam-type');
  if (scamTypeSelect && typeof learningTopics !== 'undefined') {
    scamTypeSelect.innerHTML = learningTopics.map(topic => 
      `<option value="${topic.id}">${topic.title}</option>`
    ).join('');
  }

  // 2. TAB SWITCHER SYSTEM
  function activateToolTab(tabId) {
    console.log('[SafePK] Activating tool tab:', tabId);
    const tabBtn = document.querySelector(`.tool-tab-btn[data-tab="${tabId}"]`);
    if (!tabBtn) {
      console.warn('[SafePK] No tab button found for:', tabId);
      return;
    }
    
    // Update active state of buttons
    document.querySelectorAll('.tool-tab-btn').forEach(btn => btn.classList.remove('active'));
    tabBtn.classList.add('active');
    
    // Update panel visibility
    document.querySelectorAll('.tool-panel').forEach(panel => panel.classList.add('hidden'));
    const targetPanel = document.getElementById(`panel-${tabId}`);
    if (targetPanel) {
      targetPanel.classList.remove('hidden');
      console.log('[SafePK] Displayed panel:', `panel-${tabId}`);
    } else {
      console.warn('[SafePK] No panel element found for:', `panel-${tabId}`);
    }
  }

  // Direct individual event binding on each tab button to bypass nested event delegation target bugs
  const allTabBtns = document.querySelectorAll('.tool-tab-btn');
  if (allTabBtns.length > 0) {
    allTabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tabId = btn.getAttribute('data-tab');
        if (tabId) {
          activateToolTab(tabId);
          
          try {
            const url = new URL(window.location.href);
            url.searchParams.set('tab', tabId);
            window.history.pushState({}, '', url);
          } catch (err) {
            console.warn("[SafePK] History API pushState is disabled or restricted in this environment:", err);
          }
        }
      });
    });
  }

  // Backup delegator handler for absolute backwards compatibility
  tabHeaders.addEventListener('click', (e) => {
    const btn = e.target.closest('.tool-tab-btn');
    if (btn) {
      const tabId = btn.getAttribute('data-tab');
      activateToolTab(tabId);
      
      try {
        const url = new URL(window.location.href);
        url.searchParams.set('tab', tabId);
        window.history.pushState({}, '', url);
      } catch (err) {
        console.warn("[SafePK] History API pushState is disabled or restricted in this environment:", err);
      }
    }
  });

  // 3. HANDLE DEEP-LINKING URL PARAMETERS ON INITIAL LOAD
  let activeTab = null;
  let scamIdParam = null;
  try {
    const urlParams = new URLSearchParams(window.location.search);
    activeTab = urlParams.get('tab');
    scamIdParam = urlParams.get('scamId');
  } catch (err) {
    console.warn("[SafePK] Deep-linking parameters read restricted in this environment:", err);
  }

  if (activeTab) {
    activateToolTab(activeTab);
  } else {
    activateToolTab('password'); // Default tab on load
  }

  if (scamIdParam && scamTypeSelect) {
    scamTypeSelect.value = scamIdParam;
  }

  /* --- A. PASSWORD GUARD REAL-TIME EVALUATOR --- */
  const pwdInput = document.getElementById('pwd-test-input');
  const pwdStatusTxt = document.getElementById('pwd-status-txt');
  const pwdEntropyTxt = document.getElementById('pwd-entropy-txt');
  const pwdProgressFill = document.getElementById('pwd-progress-fill');
  const pwdAlertsContainer = document.getElementById('pwd-alerts-container');

  if (pwdInput) {
    pwdInput.addEventListener('input', () => {
      const pwd = pwdInput.value;
      evaluatePassword(pwd);
    });
  }

  // Password strength calculator aur complexity metrics evaluation.
  function evaluatePassword(pwd) {
    if (!pwd) {
      pwdStatusTxt.textContent = 'Empty';
      pwdStatusTxt.style.color = 'var(--text-muted)';
      pwdEntropyTxt.textContent = '0 bits';
      pwdProgressFill.style.width = '0%';
      pwdProgressFill.style.backgroundColor = 'transparent';
      pwdAlertsContainer.innerHTML = '';
      return;
    }
    
    // Algos criteria score setup aur metrics analysis
    let score = 0;
    const alerts = [];
    
    // Password length evaluation
    if (pwd.length >= 8) {
      score += 1;
    } else {
      alerts.push({ text: 'Too short (Minimum 8 characters required for basic security)', type: 'danger' });
    }
    
    if (pwd.length >= 12) {
      score += 1;
    }
    
    // Character variety checks
    if (/[A-Z]/.test(pwd)) {
      score += 1;
    } else {
      alerts.push({ text: 'Missing uppercase capital letters (A-Z)', type: 'warning' });
    }
    
    if (/[a-z]/.test(pwd)) {
      score += 1;
    } else {
      alerts.push({ text: 'Missing lowercase letters (a-z)', type: 'warning' });
    }
    
    if (/[0-9]/.test(pwd)) {
      score += 1;
    } else {
      alerts.push({ text: 'Missing numbers/numeric pins (0-9)', type: 'warning' });
    }
    
    if (/[^A-Za-z0-9]/.test(pwd)) {
      score += 1;
    } else {
      alerts.push({ text: 'Missing special symbols (e.g. !@#$%)', type: 'warning' });
    }
    
    // Common local passwords check
    const commonPasswords = ['123456', 'password', 'pakistan', 'pakistan123', 'admin', 'bismillah', '12345678', 'qwerty', 'pakistan786', 'ilovepakistan'];
    if (commonPasswords.includes(pwd.toLowerCase())) {
      score = Math.max(1, score - 3);
      alerts.unshift({ text: 'Extremely common local password! Easily guessable by brute force.', type: 'danger' });
    }
    
    // Map secure scores to visual statuses
    let status = 'Weak';
    let color = 'var(--color-danger)';
    let width = '15%';
    
    if (score >= 5) {
      status = 'Very Strong';
      color = 'var(--color-success)';
      width = '100%';
    } else if (score >= 4) {
      status = 'Strong';
      color = '#10b981'; // solid green
      width = '75%';
    } else if (score >= 3) {
      status = 'Moderate';
      color = 'var(--color-warning)';
      width = '50%';
    } else {
      status = 'Weak';
      color = 'var(--color-danger)';
      width = '25%';
    }
    
    // Entropy calculator math
    let charsetSize = 0;
    if (/[A-Z]/.test(pwd)) charsetSize += 26;
    if (/[a-z]/.test(pwd)) charsetSize += 26;
    if (/[0-9]/.test(pwd)) charsetSize += 10;
    if (/[^A-Za-z0-9]/.test(pwd)) charsetSize += 33;
    if (charsetSize === 0) charsetSize = 1;
    const entropy = Math.round(pwd.length * Math.log2(charsetSize));
    
    pwdStatusTxt.textContent = status;
    pwdStatusTxt.style.color = color;
    pwdEntropyTxt.textContent = `${entropy} bits entropy`;
    pwdProgressFill.style.width = width;
    pwdProgressFill.style.backgroundColor = color;
    
    // Render alert logs
    if (alerts.length === 0) {
      pwdAlertsContainer.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; color: var(--color-success); background-color: rgba(16, 185, 129, 0.08); padding: 0.6rem 0.8rem; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.2);">
          <i data-lucide="check-circle" class="w-4 h-4 flex-shrink-0"></i> Excellent! This password is highly secure and fully optimized.
        </div>
      `;
    } else {
      pwdAlertsContainer.innerHTML = alerts.map(alert => {
        const alertColor = alert.type === 'danger' ? 'var(--color-danger)' : 'var(--color-warning)';
        const alertBg = alert.type === 'danger' ? 'rgba(239, 68, 68, 0.08)' : 'rgba(245, 158, 11, 0.08)';
        const alertBorder = alert.type === 'danger' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(245, 158, 11, 0.2)';
        const icon = alert.type === 'danger' ? 'x-circle' : 'alert-circle';
        return `
          <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; color: ${alertColor}; background-color: ${alertBg}; padding: 0.5rem 0.75rem; border-radius: 8px; border: 1px solid ${alertBorder};">
            <i data-lucide="${icon}" class="w-4 h-4 flex-shrink-0"></i> <span>${alert.text}</span>
          </div>
        `;
      }).join('');
    }
    
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  /* --- B. PASSWORD GENERATOR MECHANICS --- */
  const pwdLenSlider = document.getElementById('pwd-len-slider');
  const pwdLenVal = document.getElementById('pwd-len-val');
  const genPwdOutput = document.getElementById('gen-pwd-output');
  const btnRegenerate = document.getElementById('btn-regenerate');
  const btnCopyGenPwd = document.getElementById('btn-copy-gen-pwd');

  if (pwdLenSlider) {
    pwdLenSlider.addEventListener('input', () => {
      pwdLenVal.textContent = pwdLenSlider.value;
      generateSecurePassword();
    });
  }

  if (btnRegenerate) {
    btnRegenerate.addEventListener('click', generateSecurePassword);
  }

  if (btnCopyGenPwd) {
    btnCopyGenPwd.addEventListener('click', () => {
      const pwdText = genPwdOutput.textContent;
      window.copyToClipboard(pwdText, 'btn-copy-gen-pwd', 'Password Copied!');
    });
  }

  // Random, secure aur high entropy complex password generator system.
  function generateSecurePassword() {
    if (!genPwdOutput) return;
    
    const length = parseInt(pwdLenSlider.value) || 16;
    const useUpper = document.getElementById('g-upper').checked;
    const useLower = document.getElementById('g-lower').checked;
    const useDigits = document.getElementById('g-digits').checked;
    const useSymbols = document.getElementById('g-symbols').checked;
    
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let pool = '';
    let guaranteed = [];
    
    if (useUpper) {
      pool += upperChars;
      guaranteed.push(upperChars[Math.floor(Math.random() * upperChars.length)]);
    }
    if (useLower) {
      pool += lowerChars;
      guaranteed.push(lowerChars[Math.floor(Math.random() * lowerChars.length)]);
    }
    if (useDigits) {
      pool += digitChars;
      guaranteed.push(digitChars[Math.floor(Math.random() * digitChars.length)]);
    }
    if (useSymbols) {
      pool += symbolChars;
      guaranteed.push(symbolChars[Math.floor(Math.random() * symbolChars.length)]);
    }
    
    if (pool === '') {
      genPwdOutput.textContent = 'Choose at least 1 checkbox!';
      return;
    }
    
    let password = '';
    // Guarantee characters first to satisfy options checks
    password += guaranteed.join('');
    
    for (let i = password.length; i < length; i++) {
      password += pool[Math.floor(Math.random() * pool.length)];
    }
    
    // Perform robust shuffle on character indices
    const shuffled = password.split('').sort(() => 0.5 - Math.random()).join('');
    genPwdOutput.textContent = shuffled;
  }

  // Pre-load initial password
  if (genPwdOutput) {
    generateSecurePassword();
  }

  /* --- C. LOCAL CYBER SAFETY QUIZ --- */
  const quizQuestions = [
    {
      q: "You receive an SMS from a personal mobile number claiming: 'Congratulations! Your Ehsaas cash grant of Rs. 25,000 is approved. Call 0302-XXXXXXX immediately to collect.' What is the safest response?",
      options: [
        { text: "Call the phone connection to verify, as BISP/Ehsaas funding is critical.", correct: false, reason: "Phishing SMS messages from personal mobile connections claiming lotteries/grants are always scams. Government departments do not use personal 11-digit mobile lines." },
        { text: "Ignore the SMS completely, and report the caller number to PTA shortcode 9000.", correct: true, reason: "Excellent! Standard government schemes only issue SMS from official shortcodes (e.g. 8171), and they never request registration fees." },
        { text: "Send Rs. 1,000 security deposit to unlock the funds registration.", correct: false, reason: "Never pay processing fees or security taxes to claim a lottery. Real schemes never ask you for money to release funds." }
      ]
    },
    {
      q: "Someone posing as a 'State Bank of Pakistan Audit Specialist' calls and says: 'Your Easypaisa/JazzCash account will be terminated unless you verify your 4-digit PIN and OTP code.' What should you do?",
      options: [
        { text: "Give them the security PIN immediately to prevent account cancellation.", correct: false, reason: "Never share PINs. SBP, bank officials, or customer specialists will never ask for PINs, OTP codes, or passwords over telephone calls." },
        { text: "Hang up the call immediately. Call Easypaisa (3737) or JazzCash (4444) directly to double-check.", correct: true, reason: "Correct! If some caller requests your PIN or OTP, it is 100% scam attempt. Just hang up immediately." },
        { text: "Tell them a fake PIN so they hang up.", correct: false, reason: "While safe from theft, the safest and cleanest practice is to disconnect immediately, block, and report the offender." }
      ]
    },
    {
      q: "A relative's account contacts you on WhatsApp claiming: 'I am trying to register my profile. I accidentally sent my 6-digit WhatsApp code to your phone number. Resend it to me!' What is happening?",
      options: [
        { text: "They are setting up backup devices, so you should copy-paste and help them.", correct: false, reason: "This is a trap. The 6-digit code received on your screen is for YOUR phone number. Sharing it will log you out and hijack your account." },
        { text: "It is an account hijack trap. Refuse to share, and call your relative directly on cellular line to warn them.", correct: true, reason: "Perfect! Hackers hijack friend accounts and send urgent pleas to trap contacts. Always verify using real cellular calls." },
        { text: "It is safe to share because the sender is someone you know personally.", correct: false, reason: "No! Scammers impersonate hijacked contacts. Never share verification tokens, even with close family members." }
      ]
    },
    {
      q: "You are purchasing a discounted phone on Facebook Marketplace or OLX. The seller insists: 'Many people are calling. Transfer Rs. 5,000 via JazzCash to lock the deal, and I will ship the phone.' What should you do?",
      options: [
        { text: "Refuse to pay advance deposits. Insist on hand-to-hand exchange or official COD.", correct: true, reason: "Correct! Demanding advance wallet deposits is the primary classified marketplace scam in Pakistan. Never pay advance deposits." },
        { text: "Send the money quickly to secure the smartphone.", correct: false, reason: "Once you transfer the advance deposit, the seller will immediately block your communication profiles and disappear with your money." },
        { text: "Ask for a photo of their CNIC card, then make the advance transaction.", correct: false, reason: "Scammers share stolen or photoshopped CNICs to generate false trust. A photo receipt offers no security." }
      ]
    },
    {
      q: "What is the single most effective setting to permanently safeguard your WhatsApp account from hijackers?",
      options: [
        { text: "Hiding your profile picture and active status from public viewers.", correct: false, reason: "This changes visibility details, but does not stop a hijacker from logging in if they steal your SMS code." },
        { text: "Enabling 'Two-Step Verification' (2FA PIN) in WhatsApp account settings.", correct: true, reason: "Superb! With Two-Step Verification active, even if a scammer steals your SMS code, they cannot access your profile without entering your secret 2FA passcode." },
        { text: "Re-installing WhatsApp every month.", correct: false, reason: "Re-installing does not enhance protection, but setting a secure 2FA PIN secures you permanently." }
      ]
    }
  ];

  let currentQuizIdx = 0;
  let quizScore = 0;

  const btnStartQuiz = document.getElementById('btn-start-quiz');
  const quizIntroContainer = document.getElementById('quiz-intro-container');
  const quizPlayContainer = document.getElementById('quiz-play-container');
  const quizResultContainer = document.getElementById('quiz-result-container');
  const quizQuestionIdx = document.getElementById('quiz-question-idx');
  const quizQuestionProgress = document.getElementById('quiz-question-progress');
  const quizProgressFill = document.getElementById('quiz-progress-fill');
  const quizQuestionText = document.getElementById('quiz-question-text');
  const quizOptionsContainer = document.getElementById('quiz-options-container');
  const quizNextBtn = document.getElementById('quiz-next-btn');

  if (btnStartQuiz) {
    btnStartQuiz.addEventListener('click', () => {
      quizIntroContainer.classList.add('hidden');
      quizPlayContainer.classList.remove('hidden');
      quizResultContainer.classList.add('hidden');
      currentQuizIdx = 0;
      quizScore = 0;
      loadQuizQuestion();
    });
  }

  // Quiz container me agla ya current question load karne ke liye helper.
  function loadQuizQuestion() {
    if (!quizPlayContainer) return;
    
    quizNextBtn.classList.add('hidden');
    quizOptionsContainer.innerHTML = '';
    
    const qData = quizQuestions[currentQuizIdx];
    quizQuestionIdx.textContent = currentQuizIdx + 1;
    const progressPercent = Math.round(((currentQuizIdx + 1) / quizQuestions.length) * 100);
    quizQuestionProgress.textContent = `${progressPercent}%`;
    quizProgressFill.style.width = `${progressPercent}%`;
    
    quizQuestionText.textContent = qData.q;
    
    qData.options.forEach((opt, oIdx) => {
      const button = document.createElement('button');
      button.className = 'btn btn-secondary';
      button.style.textAlign = 'left';
      button.style.width = '100%';
      button.style.padding = '1rem';
      button.style.fontSize = '0.85rem';
      button.style.display = 'flex';
      button.style.flexDirection = 'column';
      button.style.gap = '0.5rem';
      button.style.transition = 'all var(--transition-fast)';
      
      button.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
          <span class="option-marker" style="width: 1.25rem; height: 1.25rem; border-radius: 50%; border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 700; flex-shrink: 0; background-color: var(--bg-tertiary);">${String.fromCharCode(65 + oIdx)}</span>
          <span style="font-weight: 500;">${opt.text}</span>
        </div>
      `;
      
      button.addEventListener('click', () => {
        handleQuizAnswerSelection(oIdx);
      });
      
      quizOptionsContainer.appendChild(button);
    });
  }

  function handleQuizAnswerSelection(selectedIdx) {
    const buttons = quizOptionsContainer.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
    
    const qData = quizQuestions[currentQuizIdx];
    const selectedOpt = qData.options[selectedIdx];
    const isCorrect = selectedOpt.correct;
    
    if (isCorrect) {
      quizScore++;
    }
    
    buttons.forEach((btn, idx) => {
      const opt = qData.options[idx];
      const marker = btn.querySelector('.option-marker');
      if (opt.correct) {
        btn.style.borderColor = 'var(--color-success)';
        btn.style.backgroundColor = 'rgba(16, 185, 129, 0.08)';
        marker.style.backgroundColor = 'var(--color-success)';
        marker.style.borderColor = 'var(--color-success)';
        marker.style.color = '#fff';
        marker.innerHTML = '<i data-lucide="check" class="w-3 h-3"></i>';
      } else if (idx === selectedIdx && !isCorrect) {
        btn.style.borderColor = 'var(--color-danger)';
        btn.style.backgroundColor = 'rgba(239, 68, 68, 0.08)';
        marker.style.backgroundColor = 'var(--color-danger)';
        marker.style.borderColor = 'var(--color-danger)';
        marker.style.color = '#fff';
        marker.innerHTML = '<i data-lucide="x" class="w-3 h-3"></i>';
      }
      
      // Inject safety explanation reason
      if (idx === selectedIdx || (opt.correct && !isCorrect)) {
        const feedbackDiv = document.createElement('div');
        feedbackDiv.style.fontSize = '0.75rem';
        feedbackDiv.style.marginTop = '0.5rem';
        feedbackDiv.style.paddingLeft = '1.75rem';
        feedbackDiv.style.color = opt.correct ? 'var(--color-success)' : 'var(--color-danger)';
        feedbackDiv.style.lineHeight = '1.4';
        feedbackDiv.textContent = opt.reason;
        btn.appendChild(feedbackDiv);
      }
    });
    
    if (window.lucide) {
      window.lucide.createIcons();
    }
    
    quizNextBtn.classList.remove('hidden');
  }

  if (quizNextBtn) {
    quizNextBtn.addEventListener('click', () => {
      currentQuizIdx++;
      if (currentQuizIdx < quizQuestions.length) {
        loadQuizQuestion();
      } else {
        showQuizResults();
      }
    });
  }

  function showQuizResults() {
    quizPlayContainer.classList.add('hidden');
    quizResultContainer.classList.remove('hidden');
    
    let rating = 'Bronze Safety Guard';
    let desc = 'You need to be more careful online! Cybercriminals are highly active, but with proper awareness, you can shield yourself and your family.';
    let ratingColor = 'var(--color-danger)';
    
    if (quizScore === 5) {
      rating = 'Cyber Security Expert (Platinum Shield)';
      desc = 'Perfect Score! You have supreme cybersecurity awareness and recognize exactly how to avoid modern scams in Pakistan.';
      ratingColor = 'var(--color-success)';
    } else if (quizScore >= 3) {
      rating = 'Secure Citizen (Gold Shield)';
      desc = 'Excellent work! You recognize most common threats, but keep studying to safeguard against the most clever traps.';
      ratingColor = 'var(--color-primary)';
    }
    
    quizResultContainer.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem;">
        <div style="width: 4rem; height: 4rem; border-radius: 50%; background-color: rgba(99, 102, 241, 0.1); color: var(--color-indigo); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto;">
          <i data-lucide="award" class="w-8 h-8"></i>
        </div>
        <h3 style="font-family: var(--font-display); font-size: 1.4rem; font-weight: 850; margin-bottom: 0.25rem;">QUIZ COMPLETED!</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.5rem;">Interactive knowledge check card summary.</p>
        
        <div style="background-color: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 1rem; padding: 1.5rem; margin-bottom: 1.5rem; text-align: left;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-muted); padding-bottom: 0.75rem; margin-bottom: 0.75rem;">
            <span style="font-weight: 700; font-size: 0.9rem;">Final Score:</span>
            <span style="font-family: var(--font-mono); font-weight: 800; font-size: 1.15rem; color: ${ratingColor}">${quizScore} / 5</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-muted); padding-bottom: 0.75rem; margin-bottom: 0.75rem;">
            <span style="font-weight: 700; font-size: 0.9rem;">Security Rating:</span>
            <span style="font-family: var(--font-sans); font-weight: 800; font-size: 0.85rem; color: ${ratingColor}">${rating}</span>
          </div>
          <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">${desc}</p>
        </div>
        
        <div style="display: flex; gap: 1rem;">
          <button class="btn btn-secondary" id="btn-restart-quiz" style="flex: 1;"><i data-lucide="rotate-ccw" class="w-4 h-4"></i> Try Again</button>
          <a href="learn.html" class="btn btn-primary" style="flex: 1;"><i data-lucide="book-open" class="w-4 h-4"></i> Learn More Scams</a>
        </div>
      </div>
    `;
    
    if (window.lucide) {
      window.lucide.createIcons();
    }
    
    const restartQuizBtn = document.getElementById('btn-restart-quiz');
    if (restartQuizBtn) {
      restartQuizBtn.addEventListener('click', () => {
        quizResultContainer.classList.add('hidden');
        quizPlayContainer.classList.remove('hidden');
        currentQuizIdx = 0;
        quizScore = 0;
        loadQuizQuestion();
      });
    }
  }

  /* --- D. CYBER HYGIENE DIAGNOSTICS CHECKLIST --- */
  const diagQuestions = [
    { q: "Do you reuse the same password across multiple online accounts or mobile wallet apps?" },
    { q: "Have you enabled Two-Step Verification (2FA PIN) in WhatsApp settings?" },
    { q: "Have you ever set a lock code (SIM PIN) on your SIM card to block physical swap duplication?" },
    { q: "Do you log in to bank accounts or wallets while active-connected to public, unsecure Wi-Fi networks?" },
    { q: "Do you inspect browser URLs for correct domains (like .com vs weird spellings) before typing keys?" },
    { q: "Have you shared a verification token, SMS OTP, or wallet PIN code over an unexpected phone call?" },
    { q: "Do you keep your social media posts (Facebook/Instagram) publicly visible to unknown users?" },
    { q: "Do you download Android applications (.apk) from external chat groups instead of official play store?" },
    { q: "Do you verify urgent loan requests from family/friends with a voice call before making digital transfers?" },
    { q: "Do you keep password records securely written offline or stored in locked manager databases?" }
  ];

  let currentDiagIdx = 0;
  let diagAnswers = [];

  const diagPercent = document.getElementById('diag-percent');
  const diagIdxDisplay = document.getElementById('diag-idx');
  const diagProgressFill = document.getElementById('diag-progress-fill');
  const diagQuestionText = document.getElementById('diag-question-text');
  const diagChoicesContainer = document.querySelector('.diagnostic-choices');
  const checklistResultContainer = document.getElementById('checklist-result-container');
  const checklistSetupContainer = document.getElementById('checklist-setup-container');

  if (diagChoicesContainer) {
    diagChoicesContainer.querySelectorAll('.diag-choice-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const choice = btn.getAttribute('data-val') === 'yes';
        diagAnswers.push(choice);
        
        currentDiagIdx++;
        if (currentDiagIdx < diagQuestions.length) {
          loadDiagQuestion();
        } else {
          calculateDiagResult();
        }
      });
    });
  }

  function loadDiagQuestion() {
    if (!diagQuestionText) return;
    
    diagIdxDisplay.textContent = currentDiagIdx + 1;
    const progressPercent = Math.round(((currentDiagIdx + 1) / diagQuestions.length) * 100);
    diagPercent.textContent = `${progressPercent}%`;
    diagProgressFill.style.width = `${progressPercent}%`;
    
    diagQuestionText.textContent = diagQuestions[currentDiagIdx].q;
  }

  if (diagQuestionText) {
    loadDiagQuestion();
  }

  // Interactive audit scorecard results calculation.
  function calculateDiagResult() {
    checklistSetupContainer.classList.add('hidden');
    checklistResultContainer.classList.remove('hidden');
    
    let riskScore = 0;
    
    // User habits aur feedback points ke mutabiq vulnerability checking.
    if (diagAnswers[0] === true) riskScore++;  // password reuse
    if (diagAnswers[1] === false) riskScore++; // no WhatsApp 2FA
    if (diagAnswers[2] === false) riskScore++; // no SIM PIN
    if (diagAnswers[3] === true) riskScore++;  // public Wi-Fi logins
    if (diagAnswers[4] === false) riskScore++; // does not inspect URLs
    if (diagAnswers[5] === true) riskScore++;  // shared OTP
    if (diagAnswers[6] === true) riskScore++;  // public social media profile
    if (diagAnswers[7] === true) riskScore++;  // APK files downloads
    if (diagAnswers[8] === false) riskScore++; // does not verify loans
    if (diagAnswers[9] === false) riskScore++; // no secure password records
    
    let riskRating = 'Low Risk';
    let riskColor = 'var(--color-success)';
    let riskBg = 'rgba(16, 185, 129, 0.08)';
    let riskBorder = 'rgba(16, 185, 129, 0.2)';
    let riskAdvice = 'Fantastic digital practices! Your cyber security habits protect you from the vast majority of scams.';
    
    if (riskScore >= 7) {
      riskRating = 'CRITICAL RISK';
      riskColor = 'var(--color-danger)';
      riskBg = 'rgba(239, 68, 68, 0.08)';
      riskBorder = 'rgba(239, 68, 68, 0.2)';
      riskAdvice = 'Caution! Your habits make you highly vulnerable to digital theft, WhatsApp hijacks, and online scams. Please implement the safety recommendations immediately.';
    } else if (riskScore >= 4) {
      riskRating = 'Moderate Risk';
      riskColor = 'var(--color-warning)';
      riskBg = 'rgba(245, 158, 11, 0.08)';
      riskBorder = 'rgba(245, 158, 11, 0.2)';
      riskAdvice = 'Warning! You have some vulnerable habits. Making small adjustments will heavily boost your protection.';
    }
    
    checklistResultContainer.innerHTML = `
      <div style="text-align: center; padding: 1.5rem 0;">
        <div style="width: 4rem; height: 4rem; border-radius: 50%; background-color: ${riskBg}; color: ${riskColor}; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; border: 1px solid ${riskBorder};">
          <i data-lucide="shield-alert" class="w-8 h-8"></i>
        </div>
        <h3 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 850; margin-bottom: 0.25rem;">DIAGNOSTICS COMPLETE</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.5rem;">Custom Cybersecurity Habits Assessment Card</p>
        
        <div style="background-color: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 1rem; padding: 1.5rem; margin-bottom: 1.5rem; text-align: left;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-muted); padding-bottom: 0.75rem; margin-bottom: 0.75rem;">
            <span style="font-weight: 700; font-size: 0.9rem;">Security Health Rating:</span>
            <span style="font-family: var(--font-sans); font-weight: 800; font-size: 0.9rem; color: ${riskColor}">${riskRating}</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-muted); padding-bottom: 0.75rem; margin-bottom: 0.75rem;">
            <span style="font-weight: 700; font-size: 0.9rem;">Vulnerabilities Detected:</span>
            <span style="font-family: var(--font-mono); font-weight: 800; font-size: 1.1rem; color: ${riskColor}">${riskScore} / 10 risk actions</span>
          </div>
          <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">${riskAdvice}</p>
        </div>

        <div style="text-align: left; margin-bottom: 1.5rem;">
          <h4 style="font-weight: 700; font-size: 0.9rem; margin-bottom: 0.75rem;"><i data-lucide="shield-check" class="text-success inline-block w-4.5 h-4.5" style="vertical-align: -2px;"></i> Security Optimization Steps:</h4>
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            ${diagAnswers[1] === false ? `
              <div style="background-color: rgba(248, 113, 113, 0.05); padding: 0.6rem; border-radius: 8px; border-left: 3px solid var(--color-danger); font-size: 0.75rem;">
                <strong>Activate WhatsApp 2FA PIN:</strong> Navigate to Settings > Account > Two-Step Verification > Enable.
              </div>
            ` : ''}
            ${diagAnswers[0] === true ? `
              <div style="background-color: rgba(248, 113, 113, 0.05); padding: 0.6rem; border-radius: 8px; border-left: 3px solid var(--color-danger); font-size: 0.75rem;">
                <strong>Prevent password reuse:</strong> Establish a completely unique, randomized password for each digital banking/wallet account.
              </div>
            ` : ''}
            ${diagAnswers[2] === false ? `
              <div style="background-color: rgba(245, 158, 11, 0.05); padding: 0.6rem; border-radius: 8px; border-left: 3px solid var(--color-warning); font-size: 0.75rem;">
                <strong>Set a SIM Lock PIN:</strong> Go to Phone Settings > Security > SIM Lock and define a custom 4-digit PIN code.
              </div>
            ` : ''}
            ${diagAnswers[5] === true ? `
              <div style="background-color: rgba(248, 113, 113, 0.05); padding: 0.6rem; border-radius: 8px; border-left: 3px solid var(--color-danger); font-size: 0.75rem;">
                <strong>Never share phone OTPs:</strong> Acknowledge that real organizations never request transactional PIN codes over phone calls.
              </div>
            ` : ''}
            <div style="background-color: rgba(16, 185, 129, 0.05); padding: 0.6rem; border-radius: 8px; border-left: 3px solid var(--color-success); font-size: 0.75rem;">
              <strong>Protect your family:</strong> Teach digital safety to family elders, who are heavily targeted by digital scammers.
            </div>
          </div>
        </div>
        
        <div style="display: flex; gap: 1rem;">
          <button class="btn btn-secondary" id="btn-restart-diag" style="flex: 1;"><i data-lucide="rotate-ccw" class="w-4 h-4"></i> Restart Audit</button>
          <a href="learn.html" class="btn btn-primary" style="flex: 1;"><i data-lucide="book-open" class="w-4 h-4"></i> Read Scam Guides</a>
        </div>
      </div>
    `;
    
    if (window.lucide) {
      window.lucide.createIcons();
    }
    
    const restartDiagBtn = document.getElementById('btn-restart-diag');
    if (restartDiagBtn) {
      restartDiagBtn.addEventListener('click', () => {
        checklistResultContainer.classList.add('hidden');
        checklistSetupContainer.classList.remove('hidden');
        currentDiagIdx = 0;
        diagAnswers = [];
        loadDiagQuestion();
      });
    }
  }

  /* --- E. ARZI STATEMENT DRAFT BUILDER FORM --- */
  const fiaBuilderForm = document.getElementById('fia-builder-form');
  const fiaDraftPre = document.getElementById('fia-draft-pre');

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
    });
  }

  // Complainant ke input data se official structured layout generator jo copy-paste ke liye ready ho.
  function compileArziStatement(name, phone, scamName, offender, timeline, narrative) {
    const currentDateStr = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    
    return `INCIDENT DETAILS AND COMPLAINANT STATEMENT (USER PROVIDED RECORDS)
----------------------------------------------------------------------
Date Generated: ${currentDateStr}

1. COMPLAINANT INFORMATION:
   - Full Name: ${name}
   - Contact Number: ${phone}

2. INCIDENT DETAILS:
   - Nature of Incident: ${scamName}
   - Accused Offender (Phone / Link / Profile ID): ${offender}
   - Occurrence Date & Timeline: ${timeline}

3. INCIDENT STATEMENT NARRATIVE:
   "${narrative}"
`;
  }
}

// Bind functions to global window scope
window.openScamModal = openScamModal;
window.openArticleModal = openArticleModal;
window.closeUnivModal = closeUnivModal;
window.initPanicButton = initPanicButton;
window.initSecurityTools = initSecurityTools;

