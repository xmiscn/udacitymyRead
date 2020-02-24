import React, { Component } from 'react';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  state = {
    myBookList: []
  };

  bookshelves = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Already Read' }
  ];

  componentDidMount() {
    BooksAPI.getAll().then(myBookList => {
      this.setState(() => ({ myBookList }));
    });
  }
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    let unchangedBooks = this.state.myBookList.filter(b => b.id !== book.id);
    book.shelf = shelf;

    this.setState({
      myBookList: unchangedBooks.concat(book)
    });
  };

  render() {
    const { myBookList } = this.state;

    return (
      <div className='app'>
        <Route
          exact
          path='/'
          render={() => (
            <ListBooks
              bookshelves={this.bookshelves}
              myBookList={myBookList}
              moveBook={this.moveBook}
            />
          )}
        />

        <Route path='/search' render={() => <SearchBooks />} />
      </div>
    );
  }
}

export default App;
