import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import BookCard from "./BookCard";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import BulkChangeMenu from "./BulkChangeMenu";
const styles = {
  containerItem: {
    margin: 0,
    width: "100%",
    overflowX: "hidden"
  },
  title: {
    marginTop: 20,
    marginBottom: 50,
    fontSize: 30
  }
};

class Shelf extends Component {
  state = {
    selectionMode: false,
    booksToChange: []
  };

  activateSelectionMode = () => {
    this.setState(state => ({ selectionMode: !state.selectionMode }));
  };

  setBookToChange = book => {
    if (this.state.booksToChange.indexOf(book) > -1) {
      this.setState(state => ({
        booksToChange: state.booksToChange.filter(b => b.id !== book.id)
      }));
    } else {
      this.setState(state => ({
        booksToChange: state.booksToChange.concat([book])
      }));
    }
  };

  changeBulk = shelf => {
    this.state.booksToChange.forEach(book => {
      if (this.props.onChangeShelf) this.props.onChangeShelf(book, shelf);
    });
    console.log(shelf);
    this.activateSelectionMode();
  };

  render() {
    const { books, classes, shelf } = this.props;
    return (
      <div className="containerItem" style={{ padding: 20 }}>
        <Grid container spacing={0} justify={"center"}>
          {shelf && (
            <Typography className={classes.title} color="textSecondary">
              {shelf.name}
            </Typography>
          )}

          <IconButton
            className={classes.drawerButton}
            aria-label="Menu"
            color={"primary"}
            onClick={event => this.activateSelectionMode()}
          >
            <BookmarksIcon />
          </IconButton>
        </Grid>
        <Grid container spacing={40} direction={"row"} justify={"center"}>
          {books.length > 0 &&
            books.map(book => {
              return (
                <BookCard
                  selectionMode={this.state.selectionMode}
                  onChangeShelf={this.props.onChangeShelf}
                  key={book.id}
                  book={book}
                  onSelectForChange={book => {
                    this.setBookToChange(book);
                  }}
                />
              );
            })}
        </Grid>
        {this.state.selectionMode && (
          <BulkChangeMenu
            className={classes.cardBulkChange}
            onBulkChange={shelf => {
              this.changeBulk(shelf);
            }}
          />
        )}
      </div>
    );
  }
}

Shelf.propTypes = {
  onChangeShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};

export default withStyles(styles)(Shelf);
