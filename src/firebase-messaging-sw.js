/* global self, Notification */
self.addEventListener('push', (event) => {
  if (Notification && Notification.permission === 'granted') {
    const data = (event.data && (event.data.json()).data) || {}
    let title = data.title || 'Notificacion'
    let options = {
      body: data.body || 'Tienes un mensaje nuevo'
    }
    event.waitUntil(self.registration.showNotification(title, options))
  } else {
    console.log(event)
  }
})
