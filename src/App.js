import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import PageNotFound from './PageNotFound';
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

  async componentDidMount() {
    await BooksAPI.getAll().then(myBookList => {
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
        <Switch>
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
          <Route
            path='/search'
            render={() => (
              <SearchBooks moveBook={this.moveBook} myBookList={myBookList} />
            )}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
