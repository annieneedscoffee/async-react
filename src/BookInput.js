import React, { Component } from 'react'

class BookInput extends Component {
  state = {
    title: '',
    author: '',
    pages: 0
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBook(this.state)
  }

  render () {
    console.log('bookinput component', this)
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Title:
          <input
            type="text"
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
        </p>
        <p>Author:
          <input
            type="text"
            value={this.state.author}
            onChange={(e) => this.setState({ author: e.target.value })}
          />
        </p>
        <p>Pages:
          <input
            type="number"
            value={this.state.pages}
            onChange={(e) => this.setState({ pages: e.target.value })}
          />
        </p>
        <button type="submit">Click Here</button>
      </form>
    )
  }
}

export default BookInput
