import React from "react";
import Shelf from "./Shelf";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  shelf: {
    marginTop: 50
  }
};
function DisplayResults(props) {
  const { classes, books } = props;
  return (
    <div className={classes.shelf}>
      {books && (
        <Shelf
          key={books.id}
          books={books}
          onChangeShelf={props.onChangeShelf}
        />
      )}
    </div>
  );
}

DisplayResults.propTypes = {
  onChangeShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};

export default withStyles(styles)(DisplayResults);
