import * as BooksAPI from './BooksAPI';
import Book from './Book';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

  render() {
    const { mySearchList } = this.state;
    console.log(mySearchList);

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
              mySearchList.map(book => <Book key={book.key} book={book} />)}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
