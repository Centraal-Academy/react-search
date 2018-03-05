import React from 'react'

class CourseItem extends React.Component {
  render () {
    return (
      <article>
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default CourseItem
