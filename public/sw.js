const CACHE_NAME = 'fenix-v1';
const RUNTIME_CACHE = 'fenix-runtime-v1';

// Критичні ресурси для кешування при встановленні
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
];

// Встановлення Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Активація Service Worker
self.addEventListener('activate', event => {
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// Обробка запитів
self.addEventListener('fetch', event => {
  // Пропускаємо не-GET запити
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Пропускаємо cross-origin запити
  if (url.origin !== location.origin) return;

  // Стратегія кешування
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Повертаємо з кешу, але оновлюємо в фоні
        event.waitUntil(
          fetch(event.request).then(response => {
            return caches.open(RUNTIME_CACHE).then(cache => {
              cache.put(event.request, response.clone());
              return response;
            });
          }).catch(() => {})
        );
        return cachedResponse;
      }

      // Завантажуємо з мережі та кешуємо
      return fetch(event.request).then(response => {
        // Перевіряємо валідність відповіді
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }

        // Кешуємо тільки успішні відповіді
        const responseToCache = response.clone();
        caches.open(RUNTIME_CACHE).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
