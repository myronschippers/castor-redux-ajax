import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

// CUSTOM COMPONENTS
import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="container">
          <BookForm />
          <BookList />
        </main>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(App);
