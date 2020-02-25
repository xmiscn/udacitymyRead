import React, { Component } from 'react';
import './App.css';

class BookShelfChanger extends Component {
  state = {
    value: 'none'
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
    this.props.moveBook(this.props.book, e.target.value);
  };
  render() {
    const { shelf, book } = this.props;

    return (
      <div className='book-shelf-changer'>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value='move' disabled>
            Move to...
          </option>
          <option value='currentlyReading'>Currently Reading</option>
          <option value='wantToRead'>Want to Read</option>
          <option value='read'>Read</option>
          <option value='none'>None</option>
          <default value={{ value: this.state.value }}></default>
        </select>
      </div>
    );
  }
}
export default BookShelfChanger;
