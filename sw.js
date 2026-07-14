// SafePK PWA ke liye unique cache ka naam, cache update karne ke liye version v1 se v2 karein.
const CACHE_NAME = 'safepk-pwa-v1';

// Wo saare files aur pages jo offline access ke liye pre-cache karne hain.
const ASSETS_TO_CACHE = [
  // Core structure and shell
  './',
  './index.html',
  './css/style.css',
  './css/responsive.css',
  './js/script.js',
  './js/data.js',
  './js/learn.js',
  './js/directory.js',
  './js/theme.js',
  './manifest.json',

  // HTML Pages (Taake agar user offline ho tab bhi ye load ho sakein)
  './pages/learn.html',
  './pages/tools.html',
  './pages/directory.html',
  './pages/help.html',
  './pages/about.html',
  './pages/privacy-policy.html',
  './pages/terms-of-use.html',
  './pages/disclaimer.html',
  './pages/cookie-policy.html',
  './pages/external-links-policy.html',
  './pages/cyber-assistance-disclaimer.html',

  // Local images and logos (Brand asset)
  './assets/images/safepk_cyber_logo_1782237163960.jpg',
  './assets/icons/whatsapp.png',
  './assets/icons/facebook.png'
];

// Install Event - Jab Service Worker pehli baar activate/install ho raha ho.
self.addEventListener('install', (event) => {
  // Check kar rahe hain ke kya ye local ya development server hai.
  const isDev = self.location.hostname === 'localhost' || 
                self.location.hostname === '127.0.0.1';

  // Agar development mode hai to caching skip kardo taake changes instantly visible hon.
  if (isDev) {
    self.skipWaiting();
    return;
  }

  // Pure list ke assets ko cache storage me install kar rahe hain.
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SafePK Service Worker] Pre-caching static assets & shell');
      // Promise.allSettled use kiya hai taake agar koi ek resource na mile, to pura install block na ho.
      return Promise.allSettled(
        ASSETS_TO_CACHE.map(asset => {
          return cache.add(asset)
            .then(() => console.log(`[SafePK Service Worker] Cached asset: ${asset}`))
            .catch(err => console.warn(`[SafePK Service Worker] Failed to cache: ${asset}`, err));
        })
      );
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Jab naya service worker apply ho, purane cache ko clear karne ke liye.
self.addEventListener('activate', (event) => {
  const isDev = self.location.hostname === 'localhost' || 
                self.location.hostname === '127.0.0.1';

  if (isDev) {
    // Dev environment me saare purane cache clean kardo instantly.
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cache) => {
            console.log('[SafePK Service Worker] Deleting dev cache:', cache);
            return caches.delete(cache);
          })
        );
      }).then(() => self.clients.claim())
    );
    return;
  }

  // Production me purane version ke cache ko remove kar ke new space generate ki jati hai.
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[SafePK Service Worker] Removing outdated cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Jab page internet request bhejta hai asset retrieve karne ke liye.
self.addEventListener('fetch', (event) => {
  const isDev = self.location.hostname === 'localhost' || 
                self.location.hostname === '127.0.0.1';

  // Dev environment me hamesha real live server request allow karein (No caching latency)
  if (isDev) {
    return;
  }

  // Sirf GET requests par caching strategy lagani hai.
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Check karein agar resource static asset hai (CSS, JS, Web fonts, images wagera)
  const isStaticAsset = 
    url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|woff|woff2|json)$/) || 
    event.request.url.includes('unpkg.com/lucide');

  if (isStaticAsset) {
    // Stale-While-Revalidate Strategy: Return cached version immediately but fetch updated in background
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          const fetchPromise = fetch(event.request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => {
            // Silence network errors when offline
          });
          return cachedResponse || fetchPromise;
        });
      })
    );
  } else {
    // Network-First Strategy: Pehle live server se fresh html page lo, agar network fail ho to offline cache provide karo.
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Offline handling fallbacks
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // Agar internet bilkul band hai aur HTML page demand kiya gaya hai to home-page shell (index.html) show kardo.
            if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
              return caches.match('./index.html') || caches.match('/index.html');
            }
          });
        })
    );
  }
});
