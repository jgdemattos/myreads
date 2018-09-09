import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import BookCard from "./BookCard";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  containerItem: {
    margin: 0,
    width: "100%"
  }
};

class Shelf extends Component {
  render() {
    const { books } = this.props;

    return (
      <div className="containerItem">
        <Grid container item spacing={40} direction={"row"} justify={"center"}>
          {books.length > 0 &&
            books.map(book => {
              return (
                <BookCard
                  onChangeShelf={this.props.onChangeShelf}
                  key={book.id}
                  book={book}
                />
              );
            })}
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Shelf);
