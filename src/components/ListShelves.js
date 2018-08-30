import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import DisplayBooks from "./DisplayBooks";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
const styles = {
  title: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 30
  }
};

class ListShelves extends Component {
  render() {
    const { classes, shelves, books } = this.props;

    return (
      <div className="listShelves">
        {shelves.map(shelf => {
          return (
            <Grid key={shelf.key} container justify={"center"}>
              <Typography className={classes.title} color="textSecondary">
                {shelf.name}
              </Typography>
              <DisplayBooks
                key={shelf.key}
                shelf={shelf}
                books={books.filter(book => book.shelf === shelf.key)}
              />
            </Grid>
          );
        })}
      </div>
    );
  }
}

//export default ListShelves;
export default withStyles(styles)(ListShelves);
