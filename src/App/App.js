import React from 'react'
import SearchInput from '../components/SearchInput/SearchInput'
import CourseList from '../components/CourseList/CourseList'
import FirebaseAPI from '../modules/FirebaseAPI'
import './App.css'

const API_URL = 'https://searcher-academy.firebaseio.com/courses.json'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      courses: []
    }
    this._handleChange = this._handleChange.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  componentDidMount () {
    this.getCourses(API_URL)
  }

  getCourses (url, pattern) {
    let query = ''
    if (pattern) {
      query = `?orderBy="name"&startAt="${pattern}"&endAt="${pattern}\uf8ff"`
    }
    const ENDPOINT_URL = `${url}${query}`
    FirebaseAPI.get(ENDPOINT_URL)
      .then(courses => this.setState({ courses }))
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
