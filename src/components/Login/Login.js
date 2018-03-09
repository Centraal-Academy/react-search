import React from 'react'
import FirebaseAdapter from '../../modules/FirebaseAdapter'
const firebase = FirebaseAdapter.getInstance()

class Login extends React.Component {
  constructor (props) {
    super(props)
    this._authenticate = this._authenticate.bind(this)
  }

  _authenticate () {
    const provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(provider)
  }

  render () {
    return (
      <section>
        <button onClick={this._authenticate}>Login</button>
      </section>
    )
  }
}

export default Login
