import React, {Component} from 'react';
import ListBooks from './ListBooks';
import * as BooksAPI from './BooksAPI';
//import {Route} from 'react-router-dom';
import './App.css';



class App extends Component{

   state = {
      myBookList:[]
   }

   bookshelves = [
      {key: 'currentlyReading', name:'Currently Reading'},
      {key: 'wantToRead', name: 'Want to Read'},
      {key: 'read', name: 'Already Read'},
   ];

   componentDidMount(){
         BooksAPI.getAll().then(myBookList => {
         this.setState(() => ({myBookList})
         )
      })
    
   }

   render(){

      const {myBookList} = this.state;
      
      return(
         
         <div className="app">
            <ListBooks 
            bookshelves={this.bookshelves}
            myBookList={myBookList}/>
         </div>
      );
   }
}

export default App;