import * as BooksAPI from './BooksAPI';
import Book from './Book';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';

class SearchBooks extends Component {
  state = {
    query: '',
    mySearchList: []
  };

  updateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }));
    this.searchBooks();
  };

  searchBooks() {
    BooksAPI.search(this.state.query).then(mySearchList => {
      this.setState(() => ({ mySearchList }));
    });
  }
  /* setDefaultShelves = (this.mySearchList, myBookList) => {
    return mySearchList.map(book => {
      book.shelf='none';
      myBookList.forEach(myBook => {      
        if (myBook.id === book.id)
        {
           book.shelf = myBook.shelf;
        }
      });
      return book;
    });
  };
 */
  setDefaultShelves = (mySearchList, myBookList) => {
    return (
      mySearchList &&
      mySearchList.map(book => {
        book.shelf = 'none';
        myBookList.forEach(myBook => {
          if (myBook.id === book.id) {
            book.shelf = myBook.shelf;
          }
        });
        return book;
      })
    );
  };
  static propTypes = {
    moveBook: PropTypes.func.isRequired
  };

  render() {
    const { mySearchList } = this.state;
    const { moveBook, myBookList } = this.props;

    this.setDefaultShelves(mySearchList, myBookList);

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/'>
            <button className='close-search'></button>
          </Link>

          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search for Books'
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className='search-book-results'>
          <ol className='books-grid'>
            {mySearchList &&
              mySearchList.length > 0 &&
              mySearchList.map(book => (
                <Book key={book.id} book={book} moveBook={moveBook} />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchBooks;
