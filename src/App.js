import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import { getAll } from './BooksAPI'
import SearchPage from './SearchPage'
import './App.css'

class BooksApp extends React.Component {

  constructor() {
    super();
    this.state = {
      books: []
    }
  };

  componentDidMount() {
    getAll().then((books) => {
      this.setState({ books })
    })
  }

  onSelectChange = (e) => {
    const id = e.target.name
    const shelf = e.target.value
    console.log(id, shelf)

    this.setState((prevState) => {
      prevState.filter(name === book.id)
    })
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
              <SearchPage />
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
