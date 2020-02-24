import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';
import './App.css';

class Book extends Component {
  render() {
    const { book, moveBook } = this.props;
    return (
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`
            }}
          ></div>
          <BookShelfChanger
            shelf={book.shelf}
            book={book}
            moveBook={moveBook}
          />
        </div>
        <div className='book-title'>{book.title}</div>
        <div className='book-authors'>
          {book.authors && book.authors.join(', ')}
        </div>
      </div>
    );
  }
}
export default Book;
