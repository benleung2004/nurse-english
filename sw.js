// 離線快取：網絡優先（有網就攞新版，冇網用快取）
const CACHE_VERSION = 'ne-v81';
const FILES = ['./', 'index.html', 'css/style.css', 'js/app.js', 'js/data/core.js', 'js/data/medical.js',
  'js/data/terms.js', 'js/data/phrases.js', 'js/data/ielts.js', 'js/data/practice.js', 'js/data/clinical.js', 'js/data/nurse-paed.js', 'js/data/nurse-ms1.js', 'js/data/nurse-deep1.js', 'js/data/nurse-ms2.js', 'js/data/nurse-ms3.js', 'js/data/nurse-deep2.js', 'js/data/nurse-deep3.js', 'js/data/nurse-new1.js', 'js/data/nurse-new2.js', 'js/data/nurse-daily.js', 'js/data/nurse-paed2.js', 'js/data/nurse-talk2.js', 'js/data/nurse-drugs.js', 'js/data/nurse-ap2.js', 'js/data/nurse-deep4.js', 'js/data/nurse-proc.js', 'js/data/nurse-degree.js', 'js/data/nurse-paed3.js', 'js/data/cases1.js', 'js/data/cases2.js', 'js/data/cases3.js', 'js/data/cases4.js', 'js/data/cases5.js', 'js/data/cases6.js', 'js/data/cases7.js', 'js/data/cases8.js', 'js/data/cases9.js', 'js/data/cases10.js', 'js/data/cases11.js', 'js/data/subj-map.js', 'js/data/ielts-adv.js', 'js/data/ielts-topics1.js', 'js/data/ielts-topics2.js', 'js/data/ielts-topics3.js', 'js/data/ielts-awl.js', 'js/data/ielts-awl2.js', 'js/data/ielts-awl3.js', 'js/data/ielts-toolkit.js', 'js/data/ielts-colloc.js', 'js/data/ielts-topics4.js', 'js/data/ielts-part1.js', 'js/data/ielts-topics5.js', 'js/data/ielts-bank.js', 'js/data/practice2.js', 'js/data/practice3.js', 'js/data/practice4.js', 'js/data/practice5.js', 'js/data/practice6.js', 'js/data/practice7.js', 'js/data/practice8.js', 'js/data/practice9.js', 'js/data/ielts-models.js', 'js/data/ielts-models2.js', 'js/data/ielts-models3.js', 'js/data/ielts-models4.js', 'js/data/ielts-models5.js', 'js/data/ielts-models6.js', 'js/data/ielts-models7.js', 'js/data/ielts-models8.js', 'js/data/ielts-models9.js', 'js/data/ielts-models10.js', 'js/data/ielts-models11.js', 'js/data/ielts-models12.js', 'js/data/ielts-models13.js', 'js/data/roadmap.js', 'js/data/rubric.js', 'js/data/updates.js', 'js/data/coach.js', 'manifest.webmanifest',
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
