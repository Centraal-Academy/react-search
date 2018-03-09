import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/App'
import RegisterWorker from './modules/RegisterWorker'
import FirebaseAdapter from './modules/FirebaseAdapter'
const messaging = FirebaseAdapter.getMessaging()

window.addEventListener('load', event => {
  RegisterWorker.register(navigator, './sw.js')
    .then((registration) => {
      console.log(registration)
    })
    .catch(console.error)

  messaging.requestPermission()
    .then(permission => messaging.getToken())
    .then(console.log)
    .catch(console.error)
})

const appContainer = document.getElementById('app')

ReactDOM.render(<App />, appContainer)
