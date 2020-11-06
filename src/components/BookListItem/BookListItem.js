import React from 'react';

function BookListItem(props) {
  return (
    <li key={props.book.id}>
      {props.book.title} by {props.book.author}
    </li>
  );
}

export default BookListItem;
