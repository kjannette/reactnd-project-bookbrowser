import React, { Component } from "react";
import "./Bookshelf.css";

class Bookshelf extends Component {
  render() {
    const books = this.props.books;
    const onSelect = this.props.onSelect;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <span className="logo"></span>
          <h1>Book Nook Browser</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf current">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books
                    .filter(function (book) {
                      return book.shelf === "currentlyReading";
                    })
                    .map((book) => (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div
                              className="book-cover"
                              style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url("${book.imageLinks.thumbnail}")`,
                              }}
                            ></div>
                            <div className="book-shelf-changer">
                              <select
                                name={book.id}
                                onChange={onSelect}
                                defaultValue={book.shelf}
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
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf read">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books
                    .filter(function (book) {
                      return book.shelf === "wantToRead";
                    })
                    .map((book) => (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div
                              className="book-cover"
                              style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url("${book.imageLinks.thumbnail}")`,
                              }}
                            ></div>
                            <div className="book-shelf-changer">
                              <select
                                name={book.id}
                                onChange={onSelect}
                                defaultValue={book.shelf}
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
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf read">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books
                    .filter(function (book) {
                      return book.shelf === "read";
                    })
                    .map((book) => (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div
                              className="book-cover"
                              style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url("${book.imageLinks.thumbnail}")`,
                              }}
                            ></div>
                            <div className="book-shelf-changer">
                              <select
                                name={book.id}
                                onChange={onSelect}
                                defaultValue={book.shelf}
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
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
