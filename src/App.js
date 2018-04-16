import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import SearchPage from './SearchPage'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <BrowserRouter>

        <div className="app">

            <Route exact path='/' render={() => (
              <Bookshelf />
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
