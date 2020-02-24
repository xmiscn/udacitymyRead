import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book.js';
import './App.css';

const BookShelf = ({ shelf, myBookList, moveBook }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelf.name}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {myBookList.map(book => (
            <Book key={book.id} book={book} shelf={shelf} moveBook={moveBook} />
          ))}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  myBookList: PropTypes.array.isRequired,
  moveBook: PropTypes.func.isRequired
};

export default BookShelf;
