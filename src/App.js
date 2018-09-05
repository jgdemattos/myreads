import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import ListShelves from "./components/ListShelves";
import * as BooksAPI from "./utils/BooksAPI";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import purple from "@material-ui/core/colors/purple";
import TopBar from "./components/TopBar";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#f5f5f5"
    },
    secondary: purple
  }
});

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

  render() {
    return (
      <Route
        path="/"
        render={({ history }) => (
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <TopBar />
            <ListShelves
              onChangeShelf={(book, shelf) => {
                this.changeShelf(book, shelf);
                history.push("/");
              }}
              shelves={this.state.shelves}
              books={this.state.books}
            />
          </MuiThemeProvider>
        )}
      />
    );
  }
}
export default App;
