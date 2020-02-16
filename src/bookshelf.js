import React, { Component } from "react";
import Book from './book.js'
import "./App.css";

//import {Route} from 'react-router-dom';

class BookShelf extends Component {

  state = {
    filteredBooks: [],
  }
  

  render() {

    const { shelf } = this.props;
    const {myBookList} = this.state;

    if(myBookList) {
      console.log("Inside the filter")
      this.setState((currentState) => ({
        filteredBooks: myBookList.filter((c) => 
        {
          return c.shelf === shelf.key
        })  
      })) 
      console.log("Filtered Books",this.state.filteredBooks);
    }
    
   

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
