import React from 'react'
import { Router } from 'react-router-dom'
import { Link, Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import createHistory from 'history/createBrowserHistory'
import { getAll, search } from './BooksAPI'
import SearchPage from './SearchPage'
import './App.css'

export const history = createHistory();

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

  onResultSelect = (e) => {

    const id = e.target.name
    const newShelf = e.target.value
    const results = this.state.results
    let newBook

    results.forEach((result) => {
      if (result.id === id) {
        newBook = result
        newBook.shelf = newShelf
      }
    });

    this.setState({
      books: [...newBook]
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
      <Router history={history}>

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
                onSelect={this.onResultSelect}
              />
            )}/>

            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>

        </div>

      </Router>
    )
  }
}

export default BooksApp
