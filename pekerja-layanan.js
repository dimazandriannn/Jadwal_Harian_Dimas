const NAMA_MEMORI = 'memori-jadwal-v2';
const BERKAS_DI_MEMORI = [
  './',
  './index.html',
  './konfigurasi-aplikasi.json',
  './ikon1.png',
  './ikon2.png'
];

// Tahap Pemasangan Service Worker
self.addEventListener('install', acara => {
  acara.waitUntil(
    caches.open(NAMA_MEMORI).then(memori => {
      return memori.addAll(BERKAS_DI_MEMORI);
    })
  );
});

// Tahap Pengambilan Data / Fitur Offline
self.addEventListener('fetch', acara => {
  acara.respondWith(
    caches.match(acara.request).then(jawabanMemori => {
      return jawabanMemori || fetch(acara.request);
    })
  );
});