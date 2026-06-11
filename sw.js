const CACHE = 'louber-v2';
const ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Pedidos para o ntfy vão sempre à rede; o resto é cache-first
  if (e.request.url.includes('ntfy.sh')) return;
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
