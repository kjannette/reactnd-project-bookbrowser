import React from 'react'
import { Router } from 'react-router-dom'
import { Link, Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import createHistory from 'history/createBrowserHistory'
import { get, getAll, update } from './BooksAPI'
import SearchPage from './SearchPage'
import './App.css'

export const history = createHistory();

class BooksApp extends React.Component {

  constructor() {
    super();
    this.state = {
      books: [],
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
    let newBook

    get(id).then((result) => {
      newBook = result
      newBook.shelf = newShelf
    });
    this.setState({
      books: [...this.state.books, newBook]
    });
  }

  onSelectChange = (e) => {
    const id = e.target.name
    const newShelf = e.target.value
    const books = this.state.books

    books.forEach((book) => {
      if (book.id === id) {
        book.shelf = newShelf;
        update(book, newShelf)
      }
    });
    this.setState({ books });
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
