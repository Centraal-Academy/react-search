import React from 'react'

class LoginAsync extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Component: null
    }
  }

  componentWillMount() {
    import('./Login')
      .then(({ default : Component}) => {
        this.setState({ Component })
      })
  }

  render() {
    const { Component } = this.state
    return Component ? <Component {...this.props} /> : <p>Loading</p>
  }
}

export default LoginAsync
