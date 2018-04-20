import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { search } from './BooksAPI'

class SearchPage extends Component {

  constructor(){
    super();
    this.results = ''
  }

  onSearch = (query) => {
    if (query.length > 3) {
      search(query).then((searchResults) => {
        this.results = searchResults
      })
    }
  };

  render() {

    const onSelect = this.props.onSelect

//    console.log("RESULTS", results)

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e => this.onSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

          {this.results.map((result) =>

            <li key={result.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${ result.imageLinks.thumbnail }")` }}></div>
                  <div className="book-shelf-changer">
                    <select name={result.id} onChange={onSelect}>
                      <option value="none">Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{result.title}</div>
                <div className="book-authors">{result.authors}</div>
              </div>
            </li>

          )}

          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
