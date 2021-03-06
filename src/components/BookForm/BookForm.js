import Axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookForm extends Component {
  state = {
    newBook: {
      title: '',
      author: '',
    },
  };

  handleChangeFor = (propertyName, event) => {
    this.setState({
      newBook: {
        ...this.state.newBook,
        [propertyName]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Adding book`, this.state.newBook);
    // TODO - axios request to server to add book
    this.saveNewBook(this.state.newBook);
  };

  saveNewBook(newBook) {
    Axios.post('/books', newBook)
      .then((response) => {
        this.props.getCallback();
      })
      .catch((err) => {
        console.log(err);
        alert('Your book did not get saved, please try again.');
      });
  }

  render() {
    return (
      <section>
        <h2>Add Book</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            placeholder="Title"
            value={this.state.newBook.title}
            onChange={(event) => this.handleChangeFor('title', event)}
          />

          <input
            required
            placeholder="Author"
            value={this.state.newBook.author}
            onChange={(event) => this.handleChangeFor('author', event)}
          />
          <br />
          <button type="submit">Add Book</button>
        </form>
      </section>
    );
  }
}

export default connect()(BookForm);
