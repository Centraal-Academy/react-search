/* global  */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/App'
import RegisterWorker from './modules/RegisterWorker'
import firebase from 'firebase'

function initFirebase (firebase) {
  const config = {
    apiKey: 'AIzaSyCY0cf61AFfz0qq_jho-rEe42nlHKaZjFc',
    authDomain: 'searcher-academy.firebaseapp.com',
    databaseURL: 'https://searcher-academy.firebaseio.com',
    projectId: 'searcher-academy',
    storageBucket: 'searcher-academy.appspot.com',
    messagingSenderId: '703186646581'
  }

  firebase.initializeApp(config)
}

window.addEventListener('load', event => {
  RegisterWorker.register(navigator, './sw.js')
    .then((registration) => {
      console.log(registration)
    })
    .catch(console.error)

  initFirebase(firebase)

  const messaging = firebase.messaging()
  messaging.requestPermission()
    .then(permission => messaging.getToken())
    .then(console.log)
    .catch(console.error)
})

const appContainer = document.getElementById('app')

ReactDOM.render(<App />, appContainer)
