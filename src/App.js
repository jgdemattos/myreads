import React, { Component } from "react";
import "./App.css";
import * as BooksAPI from "./utils/BooksAPI";
import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import { Route } from "react-router-dom";
import DisplayShelvesPage from "./pages/DisplayShelvesPage";
import SearchPage from "./pages/SearchPage";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#f5f5f5"
    },
    secondary: {
      light: "#FFF",
      main: "#FFF",
      dark: purple
    }
  }
});

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  changeShelf(book, shelf) {
    book.shelf = shelf;
    BooksAPI.update(book, shelf)
      .then(
        this.setState(state => ({
          books: state.books.filter(c => c.id !== book.id)
        }))
      )
      .then(
        this.setState(state => ({
          books: state.books.concat([book])
        }))
      );
  }
  shelves = [
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
  ];
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <DisplayShelvesPage
              onChangeShelf={(book, shelf) => {
                this.changeShelf(book, shelf);
              }}
              books={this.state.books}
              shelves={this.shelves}
              theme={theme}
            />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <SearchPage
              books={this.state.books}
              onChangeShelf={(book, shelf) => {
                this.changeShelf(book, shelf);
              }}
            />
          )}
        />
      </div>
    );
  }
}
export default App;
