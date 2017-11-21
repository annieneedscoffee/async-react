import React, { Component } from 'react';
import BookList from './BookList'
import BookInput from './BookInput'
import axios from 'axios'

class App extends Component {
  state = {
    books: []
  }

  async componentDidMount() {
    let booksPromise = await axios.get(`http://localhost:8000/books`)
    this.setState({ books: booksPromise.data })
  }

  addBook = async (newBook) => {
    // With Fetch
    let postResponse = await fetch('http://localhost:8000/books', {
      method: 'POST',
      body: JSON.stringify(newBook),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    let books = await postResponse.json();

    // Using Axios
    // let addBookPromise = await axios.post(`http://localhost:8000/books`, newBook)
    // console.log('addBookPromise', addBookPromise)
    // let books = addBookPromise.data



    this.setState({ books })
  }

  render() {
    return (
      <div className="App">
        <BookInput addBook={this.addBook}/>
        <BookList books={this.state.books}/>

      </div>
    );
  }
}

export default App;
