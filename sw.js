/*
 * Metrónomo con Voz — service worker
 *
 * Objetivo: que la app instalada en Android funcione sin conexión.
 * Estrategia:
 *   - Navegación (el HTML): red primero, y si falla se sirve la copia guardada.
 *     Así una versión nueva se ve en cuanto hay red, sin quedarse congelada.
 *   - Resto de recursos (iconos, fuentes): caché primero, y se guardan la
 *     primera vez que se piden. Los iconos de 512 px no se precargan: solo
 *     los pide el sistema al instalar o al abrir la app, y pesan bastante.
 */

const VERSION = 'metronomo-v1';

const SHELL = [
  './',
  './index.html',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-maskable-192.png',
  './assets/apple-touch-icon.png',
  './assets/favicon-32.png',
  './assets/favicon-64.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION)
      .then((cache) => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== VERSION).map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  // El HTML: red primero para no servir una versión vieja para siempre.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(VERSION).then((cache) => cache.put('./index.html', copy));
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Todo lo demás: caché primero; si no está, se descarga y se guarda.
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        // Las fuentes de Google llegan como respuesta opaca (no-cors): también
        // se pueden guardar, y así la tipografía sigue disponible sin red.
        const copy = response.clone();
        caches.open(VERSION).then((cache) => cache.put(request, copy)).catch(() => {});
        return response;
      }).catch(() => cached);
    })
  );
});
