
const CACHE_NAME = 'safepk-pwa-v23';

const ASSETS_TO_CACHE = [
  // Core structure and shell
  './',
  './index.html',
  './individual.html',
  './family.html',
  './organizations.html',
  './freelancers.html',
  './sponsor.html',
  './kamran-liaquat.html',
  './css/style.css',
  './js/script.js',
  './js/data.js',
  './js/theme.js',
  './js/reviews.js',
  './manifest.json',

  // HTML Pages (Taake agar user offline ho tab bhi ye load ho sakein)
  './pages/learn.html',
  './pages/tools.html',
  './pages/directory.html',
  './pages/help.html',
  './pages/reviews.html',
  './pages/about.html',
  './pages/contact.html',
  './pages/privacy-policy.html',
  './pages/terms-of-use.html',
  './pages/disclaimer.html',
  './pages/cookie-policy.html',
  './pages/external-links-policy.html',
  './pages/cyber-assistance-disclaimer.html',

  // Local images and logos (Brand asset)
  './assets/images/safepk-logo.png'
];

// Service Worker Install Event
self.addEventListener('install', (event) => {
  // Check kar rahe hain ke kya ye local ya development server hai.
  const isDev = self.location.hostname === 'localhost' ||
                self.location.hostname === '127.0.0.1' ||
                self.location.hostname.includes('.run.app');

  // Agar development mode hai to caching skip kardo taake changes instantly visible hon.
  if (isDev) {
    self.skipWaiting();
    return; /* Function ko yahin safely roka ja raha hai */
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

self.addEventListener('activate', (event) => {
  const isDev = self.location.hostname === 'localhost' ||
                self.location.hostname === '127.0.0.1' ||
                self.location.hostname.includes('.run.app');

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
    return; /* Function ko yahin safely roka ja raha hai */
  }

  // Clean up older version caches
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

self.addEventListener('fetch', (event) => {
  const isDev = self.location.hostname === 'localhost' ||
                self.location.hostname === '127.0.0.1' ||
                self.location.hostname.includes('.run.app');

  if (isDev) {
    return; /* Function ko yahin safely roka ja raha hai */
  }

  // Sirf GET requests par caching strategy lagani hai.
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Never cache Google Translate scripts/requests so language switch works strictly online
  if (
    url.hostname.includes('translate.google') ||
    url.hostname.includes('translate.googleapis.com') ||
    url.hostname.includes('translate-pa.googleapis.com')
  ) {
    return; /* Function ko yahin safely roka ja raha hai */
  }

  const isStaticAsset =
    url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|woff|woff2|json)$/) ||
    event.request.url.includes('unpkg.com/lucide');

  if (isStaticAsset) {
    // Cache-First Strategy: Pehle local cache me dhoondo, na mile to network par jao.
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }

          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        }).catch(() => {
          // Failure handling for network issues
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

            if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
              return caches.match('./index.html') || caches.match('/index.html');
            }
          });
        })
    );
  }
});
