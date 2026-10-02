const CACHE_NAME = 'gym-v26';
const ASSETS = ['./','./index.html?v=26','./manifest.json?v=26','./icon-192.png?v=26','./icon-512.png?v=26'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))); self.clients.claim(); });
self.addEventListener('fetch', event => { if (event.request.method !== 'GET') return; event.respondWith(caches.match(event.request).then(response => response || fetch(event.request))); });
