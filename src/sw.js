/* global self, caches, fetch */

const MY_CACHE_NAME = 'search-cache-v1'

var urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/sw.js',
  '/main.js'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(MY_CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache)
      })
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return cacheNames.filter(cacheName => cacheName !== MY_CACHE_NAME)
      })
      .then(cachesToDelete => {
        const deletionPromises = cachesToDelete.map(cacheName => caches.delete(cacheName))
        return Promise.all(deletionPromises)
      })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response
        }
        return fetch(event.request)
      })
  )
})
