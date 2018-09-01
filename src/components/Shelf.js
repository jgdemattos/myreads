import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import BookCard from "./BookCard";

class Shelf extends Component {
  render() {
    const { books } = this.props;

    return (
      <Grid container spacing={40}>
        {
          <Grid container item xs={12} justify={"center"}>
            <Grid container spacing={40} direction={"row"} justify={"center"}>
              {books.map(book => {
                return (
                  <BookCard
                    onChangeShelf={this.props.onChangeShelf}
                    key={book.id}
                    book={book}
                  />
                );
              })}
            </Grid>
          </Grid>
        }
      </Grid>
    );
  }
}

export default Shelf;
