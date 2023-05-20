import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import "./search.css";

class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
  }

  onSearch = (query) => {
    const books = this.props.books;
    if (query.length > 3) {
      search(query).then((results) => {
        if (results.error === undefined) {
          for (var result of results) {
            for (var book of books) {
              if (result.title === book.title) {
                result.shelf = book.shelf;
              }
            }
          }
          this.setState({ results });
        } else {
          this.setState({ results: [] });
        }
      });
    }
  };

  render() {
    const onSelect = this.props.onSelect;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/bb">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(e) => this.onSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.length > 0 &&
              this.state.results.map((result) => {
                return (
                  <li key={result.id}>
                    <div className="book">
                      <div className="book-top">
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url("${
                              result.imageLinks
                                ? result.imageLinks.thumbnail
                                : "No Image"
                            }")`,
                          }}
                        ></div>
                        <div className="book-shelf-changer">
                          <select
                            name={result.id}
                            onChange={onSelect}
                            defaultValue={result.shelf}
                          >
                            <option value="none">Move to...</option>
                            <option value="currentlyReading">
                              Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{result.title}</div>
                      <div className="book-authors">
                        {result.authors ? result.authors : "Author Unknown"}
                      </div>
                    </div>
                  </li>
                );
              })}
          </ol>
        </div>
        <div className="tags">
          <p className="title-tag">Suggested search terms:</p>
          <ul>
            <li>
              <span class="badge">Android</span>
            </li>
            <li>
              <span class="badge">Art</span>
            </li>
            <li>
              <span class="badge">Artificial Intelligence</span>
            </li>
            <li>
              <span class="badge">Astronomy</span>
            </li>
            <li>
              <span class="badge">Austen</span>
            </li>
            <li>
              <span class="badge">Baseball</span>
            </li>
            <li>
              <span class="badge">Basketball</span>
            </li>
            <li>
              <span class="badge">Basketball</span>
            </li>
            <li>
              <span class="badge">Bhagat</span>
            </li>
            <li>
              <span class="badge">Basketball</span>
            </li>
            <li>
              <span class="badge">Biography</span>
            </li>
            <li>
              <span class="badge">Brief</span>
            </li>
            <li>
              <span class="badge">Business</span>
            </li>
            <li>
              <span class="badge">Camus</span>
            </li>
            <li>
              <span class="badge">Cervantes</span>
            </li>
            <li>
              <span class="badge">Christie</span>
            </li>
            <li>
              <span class="badge">Classics</span>
            </li>
            <li>
              <span class="badge">Comics</span>
            </li>
            <li>
              <span class="badge">Cook</span>
            </li>
            <li>
              <span class="badge">Cricket</span>
            </li>
            <li>
              <span class="badge">Cycling</span>
            </li>
            <li>
              <span class="badge">Desai</span>
            </li>
            <li>
              <span class="badge">Design</span>
            </li>
            <li>
              <span class="badge">Development</span>
            </li>
            <li>
              <span class="badge">Digital Marketing</span>
            </li>
            <li>
              <span class="badge">Drama</span>
            </li>
            <li>
              <span class="badge">Drawing</span>
            </li>
            <li>
              <span class="badge">Dumas</span>
            </li>
            <li>
              <span class="badge">Education</span>
            </li>
            <li>
              <span class="badge">Everything</span>
            </li>
            <li>
              <span class="badge">Fantasy</span>
            </li>
            <li>
              <span class="badge">Film</span>
            </li>
            <li>
              <span class="badge">Finance</span>
            </li>
            <li>
              <span class="badge">First</span>
            </li>
            <li>
              <span class="badge">Fitness</span>
            </li>
            <li>
              <span class="badge">Football</span>
            </li>
            <li>
              <span class="badge">Future</span>
            </li>
            <li>
              <span class="badge">Games</span>
            </li>
            <li>
              <span class="badge">Gandhi</span>
            </li>
            <li>
              <span class="badge">Homer</span>
            </li>
            <li>
              <span class="badge">Horror</span>
            </li>
            <li>
              <span class="badge">Hugo</span>
            </li>
            <li>
              <span class="badge">Ibsen</span>
            </li>
            <li>
              <span class="badge">Journey</span>
            </li>
            <li>
              <span class="badge">Kafka</span>
            </li>
            <li>
              <span class="badge">King</span>
            </li>
            <li>
              <span class="badge">Lahiri</span>
            </li>
            <li>
              <span class="badge">Larsson</span>
            </li>
            <li>
              <span class="badge">Learn</span>
            </li>
            <li>
              <span class="badge">Football</span>
            </li>
            <li>
              <span class="badge">Literary Fiction</span>
            </li>
            <li>
              <span class="badge">Make</span>
            </li>
            <li>
              <span class="badge">Manage</span>
            </li>
            <li>
              <span class="badge">Marquez</span>
            </li>
            <li>
              <span class="badge">Money</span>
            </li>
            <li>
              <span class="badge">Mystery</span>
            </li>
            <li>
              <span class="badge">Negotiate</span>
            </li>
            <li>
              <span class="badge">Painting</span>
            </li>
            <li>
              <span class="badge">Philosophy</span>
            </li>
            <li>
              <span class="badge">Photography</span>
            </li>
            <li>
              <span class="badge">Poetry</span>
            </li>
            <li>
              <span class="badge">Production</span>
            </li>
            <li>
              <span class="badge">Programming</span>
            </li>
            <li>
              <span class="badge">React</span>
            </li>
            <li>
              <span class="badge">Redux</span>
            </li>
            <li>
              <span class="badge">River</span>
            </li>
            <li>
              <span class="badge">Robotics</span>
            </li>
            <li>
              <span class="badge">Rowling</span>
            </li>
            <li>
              <span class="badge">Satire</span>
            </li>
            <li>
              <span class="badge">Science Fiction</span>
            </li>
            <li>
              <span class="badge">Shakespeare</span>
            </li>
            <li>
              <span class="badge">Singh</span>
            </li>
            <li>
              <span class="badge">Swimming</span>
            </li>
            <li>
              <span class="badge">Tale</span>
            </li>
            <li>
              <span class="badge">Thrun</span>
            </li>
            <li>
              <span class="badge">Time</span>
            </li>
            <li>
              <span class="badge">Tolstoy</span>
            </li>
            <li>
              <span class="badge">Travel</span>
            </li>
            <li>
              <span class="badge">Ultimate</span>
            </li>
            <li>
              <span class="badge">Virtual Reality</span>
            </li>
            <li>
              <span class="badge">Web Development</span>
            </li>
            <li>
              <span class="badge">Tolstoy</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchPage;
