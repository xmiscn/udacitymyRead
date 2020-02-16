import React, { Component } from "react";
import Book from './book.js'
import "./App.css";

//import {Route} from 'react-router-dom';

class BookShelf extends Component {
  render() {

    const { shelf, myBookList } = this.props;
    console.log(myBookList, shelf);

//    const filteredBooks = myBookList.filter(myBookList.shelf === shelf.key);
//   console.log(filteredBooks);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <Book />
            </li>
            <li>
               <Book />
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
