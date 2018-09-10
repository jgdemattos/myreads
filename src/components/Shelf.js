import React from "react";
import Grid from "@material-ui/core/Grid";
import BookCard from "./BookCard";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = {
  containerItem: {
    margin: 0,
    width: "100%",
    overflowX: "hidden"
  }
};

function Shelf(props) {
  const { books } = props;

  return (
    <div className="containerItem" style={{ padding: 20 }}>
      <Grid container spacing={40} direction={"row"} justify={"center"}>
        {books.length > 0 &&
          books.map(book => {
            return (
              <BookCard
                onChangeShelf={props.onChangeShelf}
                key={book.id}
                book={book}
              />
            );
          })}
      </Grid>
    </div>
  );
}

Shelf.propTypes = {
  onChangeShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};

export default withStyles(styles)(Shelf);
