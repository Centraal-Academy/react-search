import React from 'react'

class SearchInput extends React.Component {
  render () {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input onChange={this.props.onChange} />
      </form>
    )
  }
}

export default SearchInput
