import React from 'react'
import FirebaseAdapter from '../../modules/FirebaseAdapter'
const auth = FirebaseAdapter.getAuth()

class Login extends React.Component {
  constructor (props) {
    super(props)
    this._authenticate = this._authenticate.bind(this)
  }

  _authenticate () {
    const provider = new auth.FacebookAuthProvider()
    auth().signInWithPopup(provider)
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
