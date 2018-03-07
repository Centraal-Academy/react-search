/* global self, caches, fetch, Notification */

const MY_CACHE_NAME = 'search-cache-v2'

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

self.addEventListener('push', (event) => {
  if (Notification && Notification.permission === 'granted') {
    const data = event.data || {}
    let title = data.title || 'Notificacion'
    let options = {
      body: data.body || 'Tienes un mensaje nuevo'
    }
    event.waitUntil(self.registration.showNotification(title, options))
  } else {
    console.log(event)
  }
})
