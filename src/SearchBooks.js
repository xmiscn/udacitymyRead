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
    if (query.length > 0) {
      this.setState({ query });
      this.searchBooks(query);
    } else {
      this.setState(() => ({ mySearchList: [], query: '' }));
    }
  };

  // Reworked using await / async

  async searchBooks(query) {
    let mySearchList = await BooksAPI.search(query);
    if (!mySearchList || mySearchList.error) {
      this.setState({ mySearchList: [] });
      return mySearchList;
    } else {
      mySearchList = this.setDefaultShelves(
        mySearchList,
        this.props.myBookList
      );
      this.setState(() => ({ mySearchList }));
    }
  }

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
    const { moveBook } = this.props;

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
              autoFocus
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
