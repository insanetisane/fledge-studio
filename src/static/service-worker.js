self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('main')  
    .then(cache => cache.addAll([
      '/assets/css/normalize.css',
      '/assets/css/fonts.css',
      '/assets/css/base.css',
      '/assets/css/global.css',
      '/assets/css/hero.css',
      '/assets/img/birds-sm.jpg'
      // '/assets/img/birds.jpg',
    ]))
  )
})

self.addEventListener('fetch', event => {
  const request = event.request

  event.respondWith(
    caches.match(request)
      .then(response => response || fetch(request))
  )
})