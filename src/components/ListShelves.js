import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Shelf from "./Shelf";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";

const styles = {
  divider: {
    marginTop: "20px"
  }
};

function ListShelves(props) {
  const { classes, shelves, books } = props;

  return (
    <div className="listShelves">
      {shelves.map(shelf => {
        return (
          <div key={shelf.key}>
            <Grid key={shelf.key} container justify={"center"}>
              <Grid container justify={"center"}>
                <Shelf
                  onChangeShelf={props.onChangeShelf}
                  key={shelf.key}
                  books={books.filter(book => book.shelf === shelf.key)}
                  shelf={shelf}
                />
              </Grid>
            </Grid>
            <Divider light className={classes.divider} />
          </div>
        );
      })}
    </div>
  );
}

ListShelves.propTypes = {
  onChangeShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired
};

export default withStyles(styles)(ListShelves);
