import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TopBar from "../components/TopBar";
import DisplayResults from "../components/DisplayResults";
import * as BooksAPI from "../utils/BooksAPI";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";
import { debounce } from "lodash";
import Grid from "@material-ui/core/Grid";
import ReactLoading from "react-loading";
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
  },
  loading: {
    height: 300
  }
};

class SearchPage extends Component {
  state = {
    query: "",
    searchedBooks: []
  };

  constructor(props) {
    super(props);
    //limit calls to api
    this.searchBooks = debounce(this.searchBooks, 600);
  }

  updateQuery = query => {
    this.setState({ query: query }, () => this.searchBooks());
  };

  //search all books(api and state) by query, results sorted by title
  searchBooks() {
    if (this.state.query !== "") {
      BooksAPI.search(this.state.query).then(searchedBooks => {
        if (searchedBooks.length > 0) {
          let shelfedBooks = this.getShelfedBooks(this.state.query);

          searchedBooks = this.getMergedResults(shelfedBooks, searchedBooks);

          this.setState({
            searchedBooks: searchedBooks
          });
        } else {
          this.setState({ searchedBooks: [] });
        }
      });
    } else {
      this.setState({ searchedBooks: [] });
    }
  }

  //merge results from books already shelfed with results from the search, removing those that are already shelfed and replacing by their respective instances
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

  //get books that already have an assigned shelf, and filter by the query
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
        ) : this.state.searchedBooks.length === 0 ? (
          <Grid
            container
            spacing={0}
            justify={"center"}
            alignItems={"center"}
            className={classes.loading}
          >
            <ReactLoading type={"bars"} color="#f4b042" />
          </Grid>
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
  onChangeShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};

export default withStyles(styles)(SearchPage);
