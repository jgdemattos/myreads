import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import TopBar from "./TopBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListShelves from "./ListShelves";
import BookIcon from "@material-ui/icons/Book";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

class DisplayShelvesPage extends Component {
  render() {
    const { books, theme, shelves } = this.props;
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
          onChangeShelf={this.props.onChangeShelf}
          shelves={shelves}
          books={books}
        />
      </MuiThemeProvider>
    );
  }
}
export default DisplayShelvesPage;
