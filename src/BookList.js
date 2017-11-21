import React from 'react'

const BookList = (props) => {
  let theBooks = props.books.map(book => <li key={book.id}>{book.title}</li>)
  return (
    <ul>{theBooks}</ul>
  )
}

export default BookList
