import React, { Component } from 'react';

class BookListItem extends Component {
  render() {
    return (
      <li key={index}>
        {book.title} by {book.author}
      </li>
    );
  }
}

export default BookListItem;
