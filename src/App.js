import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import ListShelves from "./components/ListShelves";
import * as BooksAPI from "./utils/BooksAPI";
class App extends Component {
  state = {
    books: [],
    shelves: [
      {
        key: "currentlyReading",
        name: "Currently Reading"
      },
      {
        key: "wantToRead",
        name: "Want to Read"
      },
      {
        key: "read",
        name: "Read"
      }
    ]
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }
  changeShelf(book) {
    this.setState(state => ({
      books: state.books.filter(c => c.id !== book.id)
    }));
    this.setState(state => ({
      books: state.books.concat([book])
    }));
  }
  render() {
    return (
      <div>
        <Route
          path="/"
          render={() => (
            <ListShelves
              onChangeShelf={book => {
                this.changeShelf(book);
                //history.push('/')
              }}
              shelves={this.state.shelves}
              books={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
