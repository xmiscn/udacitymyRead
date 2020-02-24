import React, { Component } from 'react';
import './App.css';
import BookShelf from './Bookshelf';
import { Link } from 'react-router-dom';

//import {Route} from 'react-router-dom';

class ListBooks extends Component {
  render() {
    const { bookshelves, myBookList, moveBook } = this.props;

    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          {bookshelves.map(shelf => {
            let filteredBooksByShelf = myBookList.filter(
              book => book.shelf === shelf.key
            );
            return (
              <BookShelf
                key={shelf.key}
                shelf={shelf}
                myBookList={filteredBooksByShelf}
                moveBook={moveBook}
              />
            );
          })}

          <div className='open-search'>
            <Link to='/search'>
              <button>Add a book</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ListBooks;
