self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('main')
    .then(cache => cache.addAll([
      '/assets/css/base.css',
      '/assets/css/global.css',
      // '/assets/img/birds-flying.jpg',
    ]))
  )
})

self.addEventListener('fetch', event => {
  const request = event.request

  event.respondWith(
    caches.open('main').then((cache) => cache.match(event.request)
      .then((response) => response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      );
    )
  )
})