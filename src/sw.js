/* global self */
self.addEventListener('install', (event) => {
  console.log('Installed service worker')
})

self.addEventListener('activate', (event) => {
  console.log('Activated service worker')
})
