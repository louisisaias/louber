const CACHE = 'louber-v4';
const ASSETS = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png", "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css", "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"];

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
  const url = e.request.url;

  // Pedidos para o ntfy nunca passam pela cache
  if (url.includes('ntfy.sh')) return;

  // HTML (navegação): network-first — apanha sempre a versão nova,
  // cache só como fallback offline
  if (e.request.mode === 'navigate' || url.endsWith('.html')) {
    e.respondWith(
      fetch(e.request)
        .then(r => {
          const copy = r.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
          return r;
        })
        .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // Restantes assets (ícones, manifest, fontes): cache-first
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
