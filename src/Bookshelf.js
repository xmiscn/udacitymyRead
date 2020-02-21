import React, { Component } from "react";
import Book from './Book.js'
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
            
              {
                myBookList.map( book => (
                <Book key={book.key} book = {book} shelf = {shelf}/>
                ))
              }
            
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
