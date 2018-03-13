import React from 'react'

class SearchAsync extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Component: null
    }
  }

  componentWillMount() {
    import('./Search')
      .then(({ default: Component}) => {
        this.setState({ Component })
      })
  }

  render() {
    const { Component } = this.state
    return Component ? <Component {...this.props} /> : null
  }
}

export default SearchAsync
