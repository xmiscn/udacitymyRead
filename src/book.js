import React, {Component} from 'react';
import  './App.css';


class Book extends Component{

  

   render(){
      const {book, shelf} = this.props;
      console.log(shelf.key, book.shelf)
      console.log(book)

     

      return(
         <h3>Title: {book.title} - Shelf: {book.shelf} Book: {book.key}</h3>);
      }      
   }
export default Book;