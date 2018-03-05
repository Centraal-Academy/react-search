import React from 'react'
import SearchInput from '../components/SearchInput/SearchInput'
import CourseList from '../components/CourseList/CourseList'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      courses: []
    }
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
        <CourseList courses={this.state.courses} />
      </section>
    )
  }
}

export default App
