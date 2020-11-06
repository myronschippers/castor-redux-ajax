import React from 'react';
import { connect } from 'react-redux';

// CUSTOM COMPONENTS
import BookListItem from '../BookListItem/BookListItem';

//This is a function component. It cant have local state, nor methods!
//You do have access to props sent in, though.
//the return is the same as render in a class component
//no `this`
function BookList(props) {
  return (
    <section>
      <h2>All Books</h2>
      <ul>
        {props.store.bookList.map((book, index) => (
          <BookListItem />
        ))}
      </ul>
    </section>
  );
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(BookList);
