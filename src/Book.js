import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';
import './App.css';

const Book = ({ book, moveBook, shelf }) => {
  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks &&
              book.imageLinks.smallThumbnail})`
          }}
        ></div>
        <BookShelfChanger book={book} moveBook={moveBook} />
      </div>
      <div className='book-title'>{book.title}</div>
      <div className='book-authors'>
        {book.authors && book.authors.join(', ')}
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  moveBook: PropTypes.func.isRequired
};
export default Book;
