import React from 'react'
import CourseItem from '../CourseItem/CourseItem'

class CourseList extends React.Component {
  render () {
    const courses = this.props.courses.map(function (course) {
      return (
        <li key={course.id}>
          <CourseItem {...course} />
        </li>
      )
    })

    return (
      <ul>
        {courses}
      </ul>
    )
  }
}

export default CourseList
