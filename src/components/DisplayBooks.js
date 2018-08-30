import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import BookCard from "./BookCard";

const styles = {};

class DisplayBooks extends Component {
  render() {
    const { classes, books } = this.props;
    console.log(books);
    return (
      <Grid container className={classes.root} spacing={40}>
        {
          <Grid container item xs={12} justify={"center"}>
            <Grid container spacing={40} direction={"row"} justify={"center"}>
              {books.map(book => {
                return <BookCard key={book.id} book={book} />;
              })}
            </Grid>
          </Grid>
        }
      </Grid>
    );
  }
}

//export default DisplayBooks;
export default withStyles(styles)(DisplayBooks);
