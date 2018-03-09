import React from 'react'
import SearchInput from '../SearchInput/SearchInput'
import CourseList from '../CourseList/CourseList'
import FirebaseAPI from '../../modules/FirebaseAPI'
import { debounce } from 'lodash'
import FirebaseAdapter from '../../modules/FirebaseAdapter'

const auth = FirebaseAdapter.getAuth()

const API_URL = 'https://searcher-academy.firebaseio.com/courses.json'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      courses: []
    }
    this.getCourses = debounce(this.getCourses, 500)
    this._handleChange = this._handleChange.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
    this._logout = this._logout.bind(this)
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

  _logout () {
    auth.signOut()
  }

  /* Handler when input in searchinput change */
  _handleChange (event) {
    this.getCourses(API_URL, event.target.value)
  }

  /* Avoid submit in form inside searchinput */
  _handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <section>
        <button onClick={this._logout}>Salir</button>
        <h1>Search Course</h1>
        <SearchInput onSubmit={this._handleSubmit} onChange={this._handleChange} />
        <CourseList courses={this.state.courses} />
      </section>
    )
  }
}

export default Search
