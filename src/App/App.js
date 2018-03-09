import React from 'react'
import FirebaseAdapter from '../modules/FirebaseAdapter'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Login from '../components/Login/Login'
import Search from '../components/Search/Search'
import './App.css'

const auth = FirebaseAdapter.getAuth()

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null
    }
  }

  componentDidMount () {
    this.unSuscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user: null })
      }
    })
  }

  componentWillUnmount () {
    this.unSuscribe()
  }

  render () {
    return (
      <Router>
        <div>
          <LoginRoute authed={this.state.user} path='/login' component={Login} />
          <PrivateRoute exact authed={this.state.user} path='/' component={Search} />
        </div>
      </Router>
    )
  }
}

function LoginRoute ({ component: Component, authed, ...rest }) {
  return (
    <Route {...rest}
      render={(props) => !authed
        ? <Component {...rest} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}

function PrivateRoute ({ component: Component, authed, ...rest }) {
  return (
    <Route {...rest}
      render={(props) => authed
        ? <Component {...rest} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

export default App
