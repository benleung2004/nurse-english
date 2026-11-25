// 離線快取：網絡優先（有網就攞新版，冇網用快取）
const CACHE_VERSION = 'ne-v17';
const FILES = ['./', 'index.html', 'css/style.css', 'js/app.js', 'js/data/core.js', 'js/data/medical.js',
  'js/data/terms.js', 'js/data/phrases.js', 'js/data/ielts.js', 'js/data/practice.js', 'js/data/clinical.js', 'js/data/nurse-paed.js', 'js/data/nurse-ms1.js', 'js/data/nurse-deep1.js', 'js/data/subj-map.js', 'js/data/ielts-adv.js', 'js/data/roadmap.js', 'js/data/updates.js', 'js/data/coach.js', 'manifest.webmanifest',
  'icons/icon.svg', 'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_VERSION).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(r => {
    const copy = r.clone(); caches.open(CACHE_VERSION).then(c => c.put(e.request, copy)); return r;
  }).catch(() => caches.match(e.request, { ignoreSearch: true })));
});
