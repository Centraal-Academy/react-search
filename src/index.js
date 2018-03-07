/* global Notification */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/App'
import RegisterWorker from './modules/RegisterWorker'

window.addEventListener('load', event => {
  RegisterWorker.register(navigator, './sw.js')
    .then((registration) => {
      if (Notification.permission === 'default') {
        return Notification.requestPermission()
      }
      return true
    })
    .catch(console.error)
    .then(console.log)
    .catch(console.error)
})

const appContainer = document.getElementById('app')

ReactDOM.render(<App />, appContainer)
