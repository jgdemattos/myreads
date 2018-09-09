import React from "react";
import Shelf from "./Shelf";
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
export default withStyles(styles)(DisplayResults);
