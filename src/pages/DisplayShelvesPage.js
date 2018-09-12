import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import TopBar from "../components/TopBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListShelves from "../components/ListShelves";
import BookIcon from "@material-ui/icons/Book";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";

function DisplayShelvesPage(props) {
  const { books, theme, shelves } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar icon={<BookIcon color="secondary" />}>
        <Link to="/search">
          <IconButton aria-label="Menu">
            <SearchIcon color="secondary" />
          </IconButton>
        </Link>
      </TopBar>
      <ListShelves
        onChangeShelf={props.onChangeShelf}
        shelves={shelves}
        books={books}
      />
    </MuiThemeProvider>
  );
}

DisplayShelvesPage.propTypes = {
  onChangeShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired
};

export default DisplayShelvesPage;
