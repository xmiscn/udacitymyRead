import React, { Component } from "react";
import "./App.css";
import BookShelf from "./bookshelf";

//import {Route} from 'react-router-dom';

class ListBooks extends Component {

   
  render() {
   
   const {bookshelves, myBookList} = this.props; 
      
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
             {
                bookshelves.map( shelf => (
                   
                  <BookShelf 
                     key = {shelf.key}
                     shelf = {shelf}
                     myBookList = {myBookList}/>
                ))
             }
            
            <div className="open-search">
              <button>Add a book</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListBooks;
