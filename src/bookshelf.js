import React, { Component } from "react";
import Book from './book.js'
import "./App.css";

//import {Route} from 'react-router-dom';

class BookShelf extends Component {



  
  render() {

    const { shelf, myBookList } = this.props;
   
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              {
                myBookList.map( book => (
                <Book book = {book} shelf = {shelf}/>
                ))
              }
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
