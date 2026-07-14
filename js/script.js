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
  
  // Save visited article to localStorage for offline visual feedback
  try {
    let visited = [];
    try {
      visited = JSON.parse(localStorage.getItem('visited_scams') || '[]');
    } catch (e) {
      visited = [];
    }
    if (!Array.isArray(visited)) {
      visited = [];
    }
    if (!visited.includes(id)) {
      visited.push(id);
      localStorage.setItem('visited_scams', JSON.stringify(visited));
      // Dispatch custom event to notify current page elements to refresh
      window.dispatchEvent(new CustomEvent('scamVisited', { detail: { id } }));
    }
  } catch (err) {
    console.warn('[SafePK] Error tracking visited article:', err);
  }
  
  const modal = document.getElementById('univ-modal');
  const modalIcon = document.getElementById('univ-modal-icon');
  const modalTitle = document.getElementById('univ-modal-title');
  const modalBody = document.getElementById('univ-modal-body');
  const modalFooter = document.getElementById('univ-modal-footer');
  
  if (!modal || !modalBody) return;

  // Make modal wider for rich, high-readability article layout
  const modalWindow = modal.querySelector('.modal-window');
  if (modalWindow) {
    modalWindow.style.maxWidth = '740px';
  }

  // Get distinct category styling
  const catStyleMap = {
    'account': { text: '#ef4444', bg: 'rgba(239, 68, 68, 0.08)', border: 'rgba(239, 68, 68, 0.25)' },
    'identity': { text: '#ef4444', bg: 'rgba(239, 68, 68, 0.08)', border: 'rgba(239, 68, 68, 0.25)' },
    'social': { text: '#ef4444', bg: 'rgba(239, 68, 68, 0.08)', border: 'rgba(239, 68, 68, 0.25)' },
    'finance': { text: '#10b981', bg: 'rgba(16, 185, 129, 0.08)', border: 'rgba(16, 185, 129, 0.25)' },
    'bank': { text: '#10b981', bg: 'rgba(16, 185, 129, 0.08)', border: 'rgba(16, 185, 129, 0.25)' },
    'money': { text: '#10b981', bg: 'rgba(16, 185, 129, 0.08)', border: 'rgba(16, 185, 129, 0.25)' },
    'tax': { text: '#10b981', bg: 'rgba(16, 185, 129, 0.08)', border: 'rgba(16, 185, 129, 0.25)' },
    'bill': { text: '#10b981', bg: 'rgba(16, 185, 129, 0.08)', border: 'rgba(16, 185, 129, 0.25)' },
    'earning': { text: '#f59e0b', bg: 'rgba(245, 158, 11, 0.08)', border: 'rgba(245, 158, 11, 0.25)' },
    'job': { text: '#f59e0b', bg: 'rgba(245, 158, 11, 0.08)', border: 'rgba(245, 158, 11, 0.25)' }
  };

  const getCatTheme = (category) => {
    const cat = (category || '').toLowerCase();
    for (const key in catStyleMap) {
      if (cat.includes(key)) return catStyleMap[key];
    }
    return { text: '#3b82f6', bg: 'rgba(59, 130, 246, 0.08)', border: 'rgba(59, 130, 246, 0.25)' };
  };

  const currentTheme = getCatTheme(scam.category);
  
  // Custom styled icon container in modal header
  modalIcon.style.display = 'flex';
  modalIcon.style.alignItems = 'center';
  modalIcon.style.justifyContent = 'center';
  modalIcon.style.width = '2.75rem';
  modalIcon.style.height = '2.75rem';
  modalIcon.style.borderRadius = '10px';
  modalIcon.style.backgroundColor = currentTheme.bg;
  modalIcon.style.color = currentTheme.text;
  modalIcon.style.border = `1px solid ${currentTheme.border}`;
  modalIcon.style.flexShrink = '0';
  modalIcon.innerHTML = `<i data-lucide="${scam.iconName || 'shield-alert'}" class="w-6 h-6"></i>`;
  
  // Custom header hierarchy
  modalTitle.style.display = 'block';
  modalTitle.style.flex = '1';
  modalTitle.innerHTML = `
    <span style="font-size: 0.65rem; font-family: var(--font-mono); font-weight: 700; text-transform: uppercase; color: ${currentTheme.text}; background-color: ${currentTheme.bg}; border: 1px solid ${currentTheme.border}; padding: 0.15rem 0.65rem; border-radius: 20px; display: inline-block; width: fit-content; letter-spacing: 0.05em; margin-bottom: 0.25rem;">
      ${scam.category}
    </span>
    <span style="display: block; font-size: 1.3rem; font-weight: 800; color: var(--text-primary); margin: 0; line-height: 1.25;">
      ${scam.title}
    </span>
  `;
  
  let bodyHtml = `
    <div class="modal-body-section" style="border-bottom: 1px solid var(--border-color); padding-bottom: 1.5rem; margin-bottom: 1.5rem;">
      <div class="modal-section-title text-primary" style="font-size: 1rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; color: #3b82f6;">
        <i data-lucide="info" class="w-5 h-5"></i> Threat Overview
      </div>
      <div class="modal-overview" style="font-size: 0.9rem; line-height: 1.6; color: var(--text-primary); background-color: rgba(59, 130, 246, 0.05); border: 1px dashed rgba(59, 130, 246, 0.2); padding: 1rem 1.25rem; border-radius: 8px; margin: 0;">
        ${scam.overview}
      </div>
    </div>
    
    <div class="modal-body-section" style="border-bottom: 1px solid var(--border-color); padding-bottom: 1.5rem; margin-bottom: 1.5rem;">
      <div class="modal-section-title text-danger" style="font-size: 1rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; color: #ef4444;">
        <i data-lucide="alert-triangle" class="w-5 h-5"></i> Warning Signs
      </div>
      <div class="modal-list-group" style="display: flex; flex-direction: column; gap: 0.75rem;">
        ${scam.warningSigns.map(sign => `
          <div class="modal-list-item modal-list-danger" style="display: flex; align-items: start; gap: 0.75rem; padding: 0.85rem 1.15rem; border-radius: 8px; font-size: 0.875rem; line-height: 1.5; border: 1px solid var(--border-color); border-left: 4px solid #ef4444; background-color: rgba(239, 68, 68, 0.02); color: var(--text-primary); transition: all 0.2s ease;">
            <i data-lucide="x-circle" class="modal-list-icon text-danger" style="flex-shrink: 0; width: 1.1rem; height: 1.1rem; margin-top: 0.1rem; color: #ef4444;"></i>
            <span class="modal-list-text" style="flex: 1;">${sign}</span>
          </div>
        `).join('')}
      </div>
    </div>
    
    <div class="modal-body-section" style="border-bottom: 1px solid var(--border-color); padding-bottom: 1.5rem; margin-bottom: 1.5rem;">
      <div class="modal-section-title text-warning" style="font-size: 1rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; color: #f59e0b;">
        <i data-lucide="alert-circle" class="w-5 h-5"></i> Pakistan Local Context & Examples
      </div>
      <div class="modal-list-group" style="display: flex; flex-direction: column; gap: 0.75rem;">
        ${scam.examples.map(ex => `
          <div class="modal-list-item modal-list-warning" style="display: flex; align-items: start; gap: 0.75rem; padding: 0.85rem 1.15rem; border-radius: 8px; font-size: 0.875rem; line-height: 1.5; border: 1px solid var(--border-color); border-left: 4px solid #f59e0b; background-color: rgba(245, 158, 11, 0.02); color: var(--text-primary); transition: all 0.2s ease;">
            <i data-lucide="help-circle" class="modal-list-icon text-warning" style="flex-shrink: 0; width: 1.1rem; height: 1.1rem; margin-top: 0.1rem; color: #f59e0b;"></i>
            <span class="modal-list-text" style="flex: 1; font-weight: 500; font-style: italic;">${ex}</span>
          </div>
        `).join('')}
      </div>
    </div>
    
    <div class="modal-body-section" style="border-bottom: 1px solid var(--border-color); padding-bottom: 1.5rem; margin-bottom: 1.5rem;">
      <div class="modal-section-title text-success" style="font-size: 1rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; color: #10b981;">
        <i data-lucide="check-circle" class="w-5 h-5"></i> Prevention & Safety Checklist
      </div>
      <div class="modal-list-group" style="display: flex; flex-direction: column; gap: 0.75rem;">
        ${scam.preventionTips.map(tip => `
          <div class="modal-list-item modal-list-success" style="display: flex; align-items: start; gap: 0.75rem; padding: 0.85rem 1.15rem; border-radius: 8px; font-size: 0.875rem; line-height: 1.5; border: 1px solid var(--border-color); border-left: 4px solid #10b981; background-color: rgba(16, 185, 129, 0.02); color: var(--text-primary); transition: all 0.2s ease;">
            <i data-lucide="shield" class="modal-list-icon text-success" style="flex-shrink: 0; width: 1.1rem; height: 1.1rem; margin-top: 0.1rem; color: #10b981;"></i>
            <span class="modal-list-text" style="flex: 1; font-weight: 500;">${tip}</span>
          </div>
        `).join('')}
      </div>
    </div>
    
    <div class="modal-body-section" style="margin-bottom: 0; border-bottom: none; padding-bottom: 0;">
      <div class="modal-section-title text-indigo" style="font-size: 1rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; color: #818cf8;">
        <i data-lucide="file-text" class="w-5 h-5"></i> Legal Action & FIA Reporting Guidance
      </div>
      <div class="modal-list-item modal-list-primary" style="display: flex; align-items: start; gap: 0.75rem; padding: 1rem 1.25rem; border-radius: 8px; font-size: 0.875rem; line-height: 1.6; border: 1px solid var(--border-color); border-left: 4px solid #818cf8; background-color: rgba(129, 140, 248, 0.02); color: var(--text-primary); transition: all 0.2s ease;">
        <i data-lucide="landmark" class="modal-list-icon text-indigo" style="flex-shrink: 0; width: 1.2rem; height: 1.2rem; margin-top: 0.1rem; color: #818cf8;"></i>
        <span class="modal-list-text" style="flex: 1;">${scam.reportingGuidance}</span>
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
/* EMERGENCY PANIC BUTTON SYSTEM FOR CITIZENS (DIRECT) */
/* ---------------------------------------------------- */
// Is function se direct emergency dialer button initialize hota hai.
function initPanicButton() {
  // Only show on the homepage (index.html or root page) and not on subpages under /pages/
  const path = window.location.pathname;
  if (path.includes('/pages/') || path.includes('pages/')) {
    return;
  }

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
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: auto;
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .panic-btn-container.hidden-panic {
      opacity: 0;
      transform: translateY(30px) scale(0.85);
      pointer-events: none;
    }
    .panic-floating-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.65rem;
      background: linear-gradient(135deg, #ef4444, #be123c);
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 9999px;
      padding: 0.85rem 1.5rem;
      font-weight: 800;
      font-size: 0.88rem;
      letter-spacing: 0.04em;
      cursor: pointer;
      box-shadow: 0 8px 32px rgba(239, 68, 68, 0.4);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      animation: pulse-red-rings 2.2s infinite;
      text-decoration: none;
      font-family: var(--font-display), var(--font-sans);
    }
    .panic-floating-btn:hover {
      background: linear-gradient(135deg, #f43f5e, #be123c);
      transform: scale(1.05);
      box-shadow: 0 12px 40px rgba(239, 68, 68, 0.55);
      border-color: rgba(255, 255, 255, 0.3);
    }
    .panic-floating-btn:active {
      transform: scale(0.97);
    }
    .panic-icon-pulse {
      animation: icon-wiggle 1.2s ease-in-out infinite;
    }
    @keyframes icon-wiggle {
      0%, 100% { transform: rotate(0deg) scale(1); }
      25% { transform: rotate(-12deg) scale(1.1); }
      75% { transform: rotate(12deg) scale(1.1); }
    }
    @keyframes pulse-red-rings {
      0% {
        box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.65), 0 8px 32px rgba(239, 68, 68, 0.4);
      }
      70% {
        box-shadow: 0 0 0 15px rgba(239, 68, 68, 0), 0 8px 32px rgba(239, 68, 68, 0.4);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(239, 68, 68, 0), 0 8px 32px rgba(239, 68, 68, 0.4);
      }
    }
    @media (max-width: 640px) {
      .panic-btn-container {
        bottom: 16px;
        right: 16px;
        transform: none;
      }
      .panic-btn-container.hidden-panic {
        transform: translateY(20px) scale(0.8);
      }
      .panic-floating-btn {
        padding: 0.75rem 1.25rem;
        font-size: 0.8rem;
        gap: 0.5rem;
      }
    }
  `;
  document.head.appendChild(styleEl);

  const container = document.createElement('div');
  container.id = 'panic-floating-btn';
  container.className = 'panic-btn-container';
  container.innerHTML = `
    <a href="tel:1799" class="panic-floating-btn" title="Call NCCIA National Cyber Crime Helpline 1799 Directly">
      <i data-lucide="phone-call" class="w-4 h-4 panic-icon-pulse"></i>
      <span>1799 HELPLINE</span>
    </a>
  `;
  document.body.appendChild(container);

  // Monitor scroll for hiding the panic button after 10% scroll
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (scrollPercent > 10) {
      container.classList.add('hidden-panic');
    } else {
      container.classList.remove('hidden-panic');
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
      if (window.lucide) {
        window.lucide.createIcons();
      }
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
    
    // Crack time estimation based on standard offline brute force metrics
    let crackTime = "Instant (under 1 second)";
    if (entropy >= 80) {
      crackTime = "Centuries (billions of years)";
    } else if (entropy >= 65) {
      crackTime = "Approx. 500 years";
    } else if (entropy >= 50) {
      crackTime = "A few months to years";
    } else if (entropy >= 40) {
      crackTime = "A few days to weeks";
    } else if (entropy >= 28) {
      crackTime = "A few minutes to hours";
    } else if (pwd.length > 0) {
      crackTime = "Instant (seconds)";
    }
    
    pwdStatusTxt.textContent = status;
    pwdStatusTxt.style.color = color;
    pwdEntropyTxt.textContent = `${entropy} bits entropy`;
    
    const crackTimeEl = document.getElementById('pwd-crack-time');
    if (crackTimeEl) {
      crackTimeEl.textContent = crackTime;
      crackTimeEl.style.color = score >= 5 ? 'var(--color-success)' : score >= 3 ? 'var(--color-warning)' : 'var(--color-danger)';
    }
    
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
    if (!diagQuestionText || !diagIdxDisplay || !diagPercent || !diagProgressFill) return;
    
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
    if (!checklistSetupContainer || !checklistResultContainer) return;
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


  /* --- C. SOCIAL PRIVACY AUDITOR DATA & MECHANICS --- */
  const AUDIT_PLATFORMS = {
    whatsapp: [
      { 
        id: 'wa-2fa', 
        text: 'Enable Two-Step Verification (Adds a mandatory 6-digit passcode to defend against profile takeover).', 
        weight: 30,
        instructions: 'Navigate to WhatsApp > Settings > Account > Two-Step Verification > Turn On. Choose a secure 6-digit PIN and add your email for recovery.'
      },
      { 
        id: 'wa-photo', 
        text: 'Limit Profile Photo Visibility to "My Contacts" Only (Stops identity cloning and impersonation of your name).', 
        weight: 25,
        instructions: 'Navigate to WhatsApp > Settings > Privacy > Profile Photo > Select "My Contacts".'
      },
      { 
        id: 'wa-callers', 
        text: 'Turn on "Silence Unknown Callers" (Intercepts direct overseas scam or automated hacking calls).', 
        weight: 20,
        instructions: 'Navigate to WhatsApp > Settings > Privacy > Calls > Enable "Silence Unknown Callers".'
      },
      { 
        id: 'wa-groups', 
        text: 'Restrict Group Invites to "My Contacts" Only (Stops random scammers adding you to fake investment channels).', 
        weight: 15,
        instructions: 'Navigate to WhatsApp > Settings > Privacy > Groups > Select "My Contacts".'
      },
      { 
        id: 'wa-logout', 
        text: 'Regularly audit Linked Devices inside WhatsApp settings and end any old or unfamiliar sessions.', 
        weight: 10,
        instructions: 'Tap the menu icon (Android) or Settings (iOS) > Linked Devices. Review the active devices list and tap any device you do not recognize to "Log Out".'
      }
    ],
    facebook: [
      { 
        id: 'fb-profile-lock', 
        text: 'Activate Profile Lock (Limits photo visibility strictly to friends; highly protective safety shield).', 
        weight: 30,
        instructions: 'Open your Profile in the Facebook App > Tap the three dots menu (...) next to Edit Profile > Select "Lock Profile" and tap "Lock Your Profile" to confirm.'
      },
      { 
        id: 'fb-2fa', 
        text: 'Setup Two-Factor Authentication via Authenticator App or SMS codes.', 
        weight: 25,
        instructions: 'Navigate to Facebook > Settings & Privacy > Settings > Accounts Center > Password and Security > Two-factor authentication.'
      },
      { 
        id: 'fb-request', 
        text: 'Limit Friend Request scope to "Friends of Friends" only (Stops random malicious profiles).', 
        weight: 20,
        instructions: 'Navigate to Facebook > Settings > How People Find and Contact You > "Who can send you friend requests?" > Select "Friends of friends".'
      },
      { 
        id: 'fb-search', 
        text: 'Prevent external search engines (like Google) from indexing and linking to your personal profile.', 
        weight: 15,
        instructions: 'Navigate to Facebook > Settings > How People Find and Contact You > Set "Do you want search engines outside of Facebook to link to your profile?" to "No" (Turn OFF).'
      },
      { 
        id: 'fb-posts', 
        text: 'Set default sharing audience for new posts to "Friends Only" instead of "Public".', 
        weight: 10,
        instructions: 'Navigate to Facebook > Settings > Audience and visibility > Posts > "Who can see your future posts?" > Set to "Friends".'
      }
    ],
    instagram: [
      { 
        id: 'ig-private', 
        text: 'Switch to a Private Account (Forces anyone to obtain explicit approval before reviewing your profile or stories).', 
        weight: 35,
        instructions: 'Navigate to Instagram > Profile > Settings & Privacy > Account Privacy > Toggle "Private Account" to ON.'
      },
      { 
        id: 'ig-2fa', 
        text: 'Turn on Two-Factor Authentication using secure authenticators.', 
        weight: 25,
        instructions: 'Navigate to Instagram > Profile > Settings & Privacy > Accounts Center > Password and Security > Two-Factor Authentication.'
      },
      { 
        id: 'ig-mentions', 
        text: 'Limit @Mentions and Tagging controls to "People You Follow" to avoid automated spam/phishing tags.', 
        weight: 20,
        instructions: 'Navigate to Instagram > Settings & Privacy > Tags and Mentions > Select "Allow tags from People you follow" and "Allow mentions from People you follow".'
      },
      { 
        id: 'ig-comments', 
        text: 'Setup hidden words filters to auto-hide comments containing standard local money-double scam spam.', 
        weight: 10,
        instructions: 'Navigate to Instagram > Settings & Privacy > Hidden Words > Manage custom words and phrases. Add custom keywords like BISP, JazzCash reward, Easypaisa cash prize.'
      },
      { 
        id: 'ig-activity', 
        text: 'Disable "Show Activity Status" to prevent stalkers monitoring your active hours.', 
        weight: 10,
        instructions: 'Navigate to Instagram > Settings & Privacy > Messages and story replies > Show Activity Status > Turn OFF.'
      }
    ]
  };

  let currentPlatform = 'whatsapp';
  let selectedAuditStates = {};

  window.switchAuditPlatform = function(platform) {
    currentPlatform = platform;
    
    document.querySelectorAll('.platform-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-audit-${platform}`);
    if (activeBtn) activeBtn.classList.add('active');

    // Return to the setup state if they click/switch platforms
    const activeContainer = document.getElementById('social-auditor-active-container');
    const resultContainer = document.getElementById('social-auditor-result-container');
    if (activeContainer) activeContainer.classList.remove('hidden');
    if (resultContainer) resultContainer.classList.add('hidden');

    const container = document.getElementById('audit-items-container');
    if (!container) return;

    const items = AUDIT_PLATFORMS[platform] || [];
    container.innerHTML = items.map(item => {
      const isChecked = selectedAuditStates[item.id] ? 'checked' : '';
      return `
        <label class="checkbox-label" style="display: flex; gap: 0.75rem; align-items: flex-start; padding: 0.6rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.03); cursor: pointer; color: var(--text-primary); margin: 0;">
          <input type="checkbox" id="${item.id}" ${isChecked} onchange="window.toggleAuditItem('${item.id}', ${item.weight})" style="accent-color: var(--color-primary); margin-top: 3px; cursor: pointer; width: 1.15rem; height: 1.15rem;" />
          <span style="font-size: 0.85rem; line-height: 1.5; font-weight: 500;">${item.text}</span>
        </label>
      `;
    }).join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }
  };

  window.toggleAuditItem = function(itemId, weight) {
    const checkbox = document.getElementById(itemId);
    if (checkbox) {
      selectedAuditStates[itemId] = checkbox.checked;
    }
  };

  window.calculateSocialAuditResult = function() {
    const activeContainer = document.getElementById('social-auditor-active-container');
    const resultContainer = document.getElementById('social-auditor-result-container');
    if (!activeContainer || !resultContainer) return;

    const items = AUDIT_PLATFORMS[currentPlatform] || [];
    let score = 0;
    const pendingItems = [];
    const activeItems = [];

    items.forEach(item => {
      if (selectedAuditStates[item.id]) {
        score += item.weight;
        activeItems.push(item);
      } else {
        pendingItems.push(item);
      }
    });

    if (score > 100) score = 100;

    let rating = 'CRITICAL RISK';
    let color = 'var(--color-danger)';
    let riskBg = 'rgba(239, 68, 68, 0.08)';
    let riskBorder = 'rgba(239, 68, 68, 0.2)';
    let riskAdvice = 'Caution! Your account security settings are highly exposed to identity cloning, profiling, or profile takeover vectors.';

    if (score >= 90) {
      rating = 'EXCELLENT SHIELD';
      color = 'var(--color-success)';
      riskBg = 'rgba(16, 185, 129, 0.08)';
      riskBorder = 'rgba(16, 185, 129, 0.2)';
      riskAdvice = 'Brilliant! Your social account is heavily guarded. Almost all critical settings are active, protecting your profile against cloning and hijacking.';
    } else if (score >= 60) {
      rating = 'MODERATE SECURE';
      color = 'var(--color-warning)';
      riskBg = 'rgba(245, 158, 11, 0.08)';
      riskBorder = 'rgba(245, 158, 11, 0.2)';
      riskAdvice = 'Moderate protection active. However, several critical avenues are left open. Activating them will heavily solidify your profile defenses.';
    } else if (score > 0) {
      rating = 'VULNERABLE STATE';
      color = '#f97316';
      riskBg = 'rgba(249, 115, 22, 0.08)';
      riskBorder = 'rgba(249, 115, 22, 0.2)';
      riskAdvice = 'Your profile is highly vulnerable. Standard cloning and impersonation campaigns can target your contact networks easily.';
    }

    const platformNames = {
      whatsapp: 'WhatsApp Security',
      facebook: 'Facebook Privacy',
      instagram: 'Instagram Safeguards'
    };

    const platformName = platformNames[currentPlatform] || currentPlatform.toUpperCase();

    activeContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    resultContainer.innerHTML = `
      <div style="text-align: center; padding: 1.5rem 0;">
        <div style="width: 4rem; height: 4rem; border-radius: 50%; background-color: ${riskBg}; color: ${color}; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; border: 1px solid ${riskBorder};">
          <i data-lucide="shield-check" class="w-8 h-8"></i>
        </div>
        <h3 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 850; margin-bottom: 0.25rem; text-transform: uppercase;">AUDIT COMPLETE</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.5rem;">${platformName} Security Report</p>
        
        <div style="background-color: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 1rem; padding: 1.5rem; margin-bottom: 1.5rem; text-align: left;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-muted); padding-bottom: 0.75rem; margin-bottom: 0.75rem;">
            <span style="font-weight: 700; font-size: 0.9rem;">Hardening Rating:</span>
            <span style="font-family: var(--font-sans); font-weight: 800; font-size: 0.9rem; color: ${color}">${rating}</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-muted); padding-bottom: 0.75rem; margin-bottom: 0.75rem;">
            <span style="font-weight: 700; font-size: 0.9rem;">Platform Safety Score:</span>
            <span style="font-family: var(--font-mono); font-weight: 800; font-size: 1.3rem; color: ${color}">${score}%</span>
          </div>
          <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">${riskAdvice}</p>
        </div>

        ${pendingItems.length > 0 ? `
        <div style="text-align: left; margin-bottom: 1.5rem;">
          <h4 style="font-weight: 700; font-size: 0.9rem; margin-bottom: 0.75rem; color: var(--color-danger); display: flex; align-items: center; gap: 0.35rem;">
            <i data-lucide="alert-triangle" class="w-4.5 h-4.5"></i> Pending Security Optimizations (Recommended):
          </h4>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            ${pendingItems.map(item => `
              <div style="background-color: rgba(239, 68, 68, 0.03); padding: 0.85rem; border-radius: 8px; border-left: 3px solid var(--color-danger); border: 1px solid var(--border-color); border-left-width: 3px; border-left-color: var(--color-danger);">
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;">${item.text}</div>
                <div style="font-size: 0.75rem; color: var(--text-secondary); line-height: 1.4;"><strong>How to enable:</strong> ${item.instructions}</div>
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}

        ${activeItems.length > 0 ? `
        <div style="text-align: left; margin-bottom: 1.5rem;">
          <h4 style="font-weight: 700; font-size: 0.9rem; margin-bottom: 0.75rem; color: var(--color-success); display: flex; align-items: center; gap: 0.35rem;">
            <i data-lucide="check-circle" class="w-4.5 h-4.5"></i> Already Active Safeguards:
          </h4>
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            ${activeItems.map(item => `
              <div style="background-color: rgba(16, 185, 129, 0.03); padding: 0.6rem 0.8rem; border-radius: 8px; border: 1px solid var(--border-color); font-size: 0.75rem; color: var(--text-secondary); display: flex; align-items: center; gap: 0.5rem;">
                <i data-lucide="check" class="text-success w-4 h-4 flex-shrink-0"></i> <span>${item.text}</span>
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}
        
        <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
          <button class="btn btn-secondary" onclick="window.backToAuditChecklist()" style="flex: 1;">
            <i data-lucide="edit-3" class="w-4 h-4"></i> Adjust Checklist
          </button>
          <a href="learn.html" class="btn btn-primary" style="flex: 1;">
            <i data-lucide="book-open" class="w-4 h-4"></i> Study Scam Guides
          </a>
        </div>
      </div>
    `;

    if (window.lucide) {
      window.lucide.createIcons();
    }
  };

  window.backToAuditChecklist = function() {
    const activeContainer = document.getElementById('social-auditor-active-container');
    const resultContainer = document.getElementById('social-auditor-result-container');
    if (activeContainer) activeContainer.classList.remove('hidden');
    if (resultContainer) resultContainer.classList.add('hidden');
  };

  // Auto-bootstrap auditor tab on startup
  setTimeout(() => {
    window.switchAuditPlatform('whatsapp');
  }, 100);
}

/* --- SECURE TEXT ENCRYPTOR / DECRYPTOR ENGINE (AES-256-GCM) --- */

// Helper to convert buffer to Base64 safely
function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

// Helper to convert Base64 to Uint8Array safely
function base64ToArrayBuffer(base64) {
  const binary_string = window.atob(base64);
  const len = binary_string.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes;
}

// Derives a cryptographic key from a master key string (password) and a salt using PBKDF2
async function deriveCryptKey(password, salt) {
  const enc = new TextEncoder();
  const keyMaterial = await window.crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    'PBKDF2',
    false,
    ['deriveBits', 'deriveKey']
  );
  return window.crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt,
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

// AES-GCM Encryption
async function encryptText(plainText, password) {
  const enc = new TextEncoder();
  const salt = window.crypto.getRandomValues(new Uint8Array(16));
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveCryptKey(password, salt);
  const encrypted = await window.crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: iv },
    key,
    enc.encode(plainText)
  );
  
  // Combine Salt + IV + Encrypted Data
  const resultBuffer = new Uint8Array(salt.byteLength + iv.byteLength + encrypted.byteLength);
  resultBuffer.set(salt, 0);
  resultBuffer.set(iv, salt.byteLength);
  resultBuffer.set(new Uint8Array(encrypted), salt.byteLength + iv.byteLength);
  
  return arrayBufferToBase64(resultBuffer);
}

// AES-GCM Decryption
async function decryptText(cipherTextBase64, password) {
  const combined = base64ToArrayBuffer(cipherTextBase64);
  if (combined.length < 28) {
    throw new Error('Invalid encrypted input format');
  }
  const salt = combined.slice(0, 16);
  const iv = combined.slice(16, 28);
  const encrypted = combined.slice(28);
  const key = await deriveCryptKey(password, salt);
  const decrypted = await window.crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: iv },
    key,
    encrypted
  );
  const dec = new TextDecoder();
  return dec.decode(decrypted);
}

// Window actions for text cipher
window.generateRandomKey = function() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
  let result = '';
  const randomValues = new Uint32Array(16);
  window.crypto.getRandomValues(randomValues);
  for (let i = 0; i < 16; i++) {
    result += chars[randomValues[i] % chars.length];
  }
  const keyInput = document.getElementById('cipher-key');
  if (keyInput) {
    keyInput.value = result;
    keyInput.type = 'text'; // Show the generated key so user can copy it
    if (window.showToast) {
      window.showToast('Secure random key generated and revealed!', 'success');
    }
  }
};

window.clearCipherForm = function() {
  const textInput = document.getElementById('cipher-text-input');
  const keyInput = document.getElementById('cipher-key');
  const output = document.getElementById('cipher-output');
  if (textInput) textInput.value = '';
  if (keyInput) keyInput.value = '';
  if (output) output.value = '';
  if (window.showToast) {
    window.showToast('Cipher form cleared successfully.', 'info');
  }
};

window.processEncryption = async function() {
  const textInput = document.getElementById('cipher-text-input');
  const keyInput = document.getElementById('cipher-key');
  const output = document.getElementById('cipher-output');
  if (!textInput || !keyInput || !output) return;

  const plainText = textInput.value.trim();
  const password = keyInput.value;

  if (!plainText) {
    if (window.showToast) window.showToast('Please enter text to encrypt!', 'warning');
    return;
  }
  if (!password || password.length < 6) {
    if (window.showToast) window.showToast('Please enter a secure password key (min 6 characters)!', 'warning');
    return;
  }

  try {
    output.value = 'Encrypting client-side... Please wait...';
    const encrypted = await encryptText(plainText, password);
    output.value = encrypted;
    if (window.showToast) {
      window.showToast('Text encrypted successfully using secure AES-256-GCM!', 'success');
    }
  } catch (err) {
    console.error('[SafePK] Encryption error:', err);
    output.value = 'Encryption failed: ' + err.message;
    if (window.showToast) window.showToast('Encryption failed. Check inputs.', 'danger');
  }
};

window.processDecryption = async function() {
  const textInput = document.getElementById('cipher-text-input');
  const keyInput = document.getElementById('cipher-key');
  const output = document.getElementById('cipher-output');
  if (!textInput || !keyInput || !output) return;

  const cipherText = textInput.value.trim();
  const password = keyInput.value;

  if (!cipherText) {
    if (window.showToast) window.showToast('Please enter encrypted text to decrypt!', 'warning');
    return;
  }
  if (!password) {
    if (window.showToast) window.showToast('Please enter the secret key/passphrase!', 'warning');
    return;
  }

  try {
    output.value = 'Decrypting client-side... Please wait...';
    const decrypted = await decryptText(cipherText, password);
    output.value = decrypted;
    if (window.showToast) {
      window.showToast('Text decrypted successfully!', 'success');
    }
  } catch (err) {
    console.error('[SafePK] Decryption error:', err);
    output.value = 'Decryption failed! Please ensure the secret key/passphrase is correct and that the encrypted message has not been tampered with or truncated.';
    if (window.showToast) window.showToast('Decryption failed! Check key or input text.', 'danger');
  }
};

window.copyCipherOutput = function() {
  const output = document.getElementById('cipher-output');
  if (!output || !output.value) {
    if (window.showToast) window.showToast('No output text available to copy!', 'warning');
    return;
  }
  navigator.clipboard.writeText(output.value).then(() => {
    if (window.showToast) {
      window.showToast('Cryptographic output copied to clipboard!', 'success');
    }
  }).catch(err => {
    console.error('Failed to copy output:', err);
    if (window.showToast) window.showToast('Failed to copy. Please select and copy manually.', 'danger');
  });
};

// Bind functions to global window scope
window.openScamModal = openScamModal;
window.openArticleModal = openArticleModal;
window.closeUnivModal = closeUnivModal;
window.initPanicButton = initPanicButton;
window.initSecurityTools = initSecurityTools;

