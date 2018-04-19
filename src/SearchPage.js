import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SearchPage extends Component {

  render() {

    const onSearch = this.props.onSearch
    const results = this.props.results
    console.log("RESULTS", results)

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e => onSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

          {results.map((result) =>

            <li key={result.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${ result.imageLinks.thumbnail }")` }}></div>
                  <div className="book-shelf-changer">
                    <select name={result.id}>
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

/*
  NOTES: The search from BooksAPI is limited to a particular set of search terms.
  You can find these search terms here:
  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
  you don't find a specific author or title. Every search is limited by search terms.
*/
