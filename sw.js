var staticCacheName = 'dom-static-v1';
self.addEventListener('install', function(event) {
  console.log("Installing service worker");
  // event.waitUntil(
  //   caches.open(staticCacheName).then(function(cache) {
  //     return cache.addAll([
  //       '/'
  //     ]);
  //   })
  // );
});

self.addEventListener('activate', function(event) {
  console.log("Activated service worker");
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('dom-') &&
                 cacheName != staticCacheName;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  if (event.request.method != 'GET') {
     event.respondWith(fetch(event.request));
     return;
  }
  event.respondWith(
    caches.open(staticCacheName).then(function(cache) {
      return cache.match(event.request).then(function(response) {
        if (response) {
          console.log("Got " + response.url + "from cache");
          return response;
        }
        
        return fetch(event.request).then(function(response) {
          console.log("Got from server");
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});