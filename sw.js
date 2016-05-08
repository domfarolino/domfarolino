var staticCacheName = 'dom-static-v4';
self.addEventListener('install', function(event) {
  console.log("Installing service worker");
  // event.waitUntil(
  //   caches.open(staticCacheName).then(function(cache) {
  //     return cache.addAll([
  //       '/appshell'
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
          console.log("CACHE: " + response.url);
          return response;
        }
        
        return fetch(event.request).then(function(response) {
          console.log("SERVER: " + event.request.url);
          
          if (event.request.url.indexOf('node_modules/') > -1 || event.request.url.indexOf('client/assets/') > -1) {
            console.log("Caching: " + event.request.url);
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});