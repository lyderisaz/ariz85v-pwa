// Bump VERSION when you change any file so installed copies update.
const VERSION = 'ariz85v-v01.02';
const FILES = ['./', 'index.html', 'style.css', 'app.js', 'help.js', 'manifest.webmanifest', 'icon.svg',
  'examples/index.json', 'examples/pencil.ariz'];

self.addEventListener('install', e => e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())
));
// Cache-first: the app is fully static.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request)));
});
