import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TopBar from "./TopBar";
import DisplayResults from "./DisplayResults";
import * as BooksAPI from "../utils/BooksAPI";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  inputLabel: {
    color: "#ccc",
    "&$cssFocused": {
      color: "#FFF"
    }
  },
  cssLabel: {
    "&$cssFocused": {
      color: "#FFF"
    }
  },
  cssFocused: {},
  cssUnderline: {
    color: "#FFF",
    "&:after": {
      borderBottomColor: "#FFF"
    }
  },
  input: {
    color: "#FFF",
    fontSize: 25
  },
  form: {},
  searchIcon: {
    marginTop: 10,
    marginLeft: 20
  },
  shelf: {
    marginTop: 50
  }
};

class SearchPage extends Component {
  state = {
    query: "",
    searchedBooks: []
  };

  updateQuery = query => {
    this.setState({ query: query }, () => this.searchBooks(query));
  };

  searchBooks(query) {
    if (this.state.query !== "") {
      BooksAPI.search(query).then(searchedBooks => {
        if (searchedBooks.length > 0) {
          let shelfedBooks = this.getShelfedBooks(query);
          searchedBooks = this.getMergedResults(shelfedBooks, searchedBooks);
          this.setState(state => ({
            searchedBooks: searchedBooks
          }));
        } else {
          this.setState({ searchedBooks: [] });
        }
      });
    } else {
      this.setState({ searchedBooks: [] });
    }
  }

  getMergedResults(shelfedBooks, searchedBooks) {
    let result = searchedBooks.filter(searchedBook => {
      let isDuplicate;
      shelfedBooks.map(shelfedBook => {
        if (searchedBook.id === shelfedBook.id) {
          isDuplicate = true;
        }
        return false;
      });

      return !isDuplicate;
    });

    return result.concat(shelfedBooks).sort(sortBy("title"));
  }

  getShelfedBooks(query) {
    let shelfedBooks;
    const match = new RegExp(escapeRegExp(query), "i");
    shelfedBooks = this.props.books.filter(book => {
      return (
        match.test(book.title) ||
        match.test(book.author) ||
        match.test(book.description)
      );
    });

    return shelfedBooks;
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TopBar icon={<ArrowBackIcon color="action" />}>
          <SearchIcon className={classes.searchIcon} />
          <FormControl
            className={classes.form}
            fullWidth
            label="Search field"
            type="search"
          >
            <InputLabel
              FormLabelClasses={{
                root: classes.inputLabel,
                focused: classes.cssFocused
              }}
              htmlFor="input-with-icon-adornment"
            >
              Search Books
            </InputLabel>

            <Input
              classes={{
                root: classes.input,
                underline: classes.cssUnderline
              }}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </FormControl>
        </TopBar>
        {this.state.query === "" ? (
          <div />
        ) : (
          <DisplayResults
            onChangeShelf={this.props.onChangeShelf}
            books={this.state.searchedBooks}
          />
        )}
      </div>
    );
  }
}

SearchPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchPage);
