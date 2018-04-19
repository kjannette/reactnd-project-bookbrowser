import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import { getAll, search } from './BooksAPI'
import SearchPage from './SearchPage'
import './App.css'

class BooksApp extends React.Component {

  constructor() {
    super();
    this.state = {
      books: [],
      results: []
    }
  };

  componentDidMount() {
    getAll().then((books) => {
      this.setState({ books })
    })
  }

  onSelectChange = (e) => {
    const id = e.target.name
    const newShelf = e.target.value
    const books = this.state.books
    books.forEach((book) => {
      if (book.id === id) {
        book.shelf = newShelf;
      }
    });
    this.setState({ books });
  }

  onSearch = (query) => {
    if (query.length > 3) {
      search(query).then((results) => {
        this.setState({ results })
    })
  }
}

  render() {
    return (
      <BrowserRouter>

        <div className="app">

            <Route exact path='/' render={() => (
              <Bookshelf
                books={this.state.books}
                onSelect={this.onSelectChange}
              />
            )}/>

            <Route path='/search' render={() => (
              <SearchPage
                results={this.state.results}
                onSearch={this.onSearch}
              />
            )}/>

            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>

        </div>

      </BrowserRouter>
    )
  }
}

export default BooksApp
