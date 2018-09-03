import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Shelf from "./Shelf";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
const styles = {
  title: {
    marginTop: 20,
    marginBottom: 50,
    fontSize: 30
  },
  divider: {
    marginTop: "20px"
  }
};

class ListShelves extends Component {
  render() {
    const { classes, shelves, books } = this.props;

    return (
      <div className="listShelves">
        {shelves.map(shelf => {
          return (
            <div key={shelf.key}>
              <Grid key={shelf.key} container justify={"center"}>
                <Typography className={classes.title} color="textSecondary">
                  {shelf.name}
                </Typography>

                <Grid container justify={"center"}>
                  <Shelf
                    onChangeShelf={this.props.onChangeShelf}
                    key={shelf.key}
                    books={books.filter(book => book.shelf === shelf.key)}
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
}

export default withStyles(styles)(ListShelves);
