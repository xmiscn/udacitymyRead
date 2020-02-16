import React, {Component} from 'react';
import  './App.css';


class SearchBooks extends Component{

   state = {
      query:''
   }

   updateQuery = (query) => {
      this.setState(() =>({
         query: query.trim()
      }))
   } 

   render(){
      return(
         <div>
            <input 
            type ='text' 
            placeholder ='Search for Books' 
            value = {this.state.query} 
            onChange = {(event) => this.updateQuery(event.target.value)}/>
         </div>

         
      );
   }
}

export default SearchBooks;