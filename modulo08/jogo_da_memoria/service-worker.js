var CACHE_NAME = 'memoria-v1';
var urlsToCache = [
  '/',
  '/styles.css',
  '/scripts.js',
  '/img/angular.svg',
  '/img/aurelia.svg',
  '/img/backbone.svg',
  '/img/ember.svg',
  '/img/js-badge.svg',
  '/img/react.svg',
  '/img/vue.svg'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
})


self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });