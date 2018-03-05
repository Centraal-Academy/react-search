import React from 'react'
import SearchInput from '../components/SearchInput/SearchInput'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this._handleChange = this._handleChange.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  /* Handler when input in searchinput change */
  _handleChange (event) {
    console.log(event.target.value)
  }

  /* Avoid submit in form inside searchinput */
  _handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <section>
        <h1>Search Course</h1>
        <SearchInput onSubmit={this._handleSubmit} onChange={this._handleChange} />
      </section>
    )
  }
}

export default App
