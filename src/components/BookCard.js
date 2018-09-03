import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BookCardMenu from "./BookCardMenu";
import BookCover from "./BookCover";
import { Paper } from "@material-ui/core";

const width = 128;
const styles = {
  bookCover: {
    marginTop: -50,
    marginLeft: 20
  },
  title: {
    fontSize: 14,
    width: width,
    textAlign: "center",

    marginLeft: 20
  },
  description: {
    fontSize: 12,
    padding: 30,
    maxWidth: 300
  },
  paper: {
    padding: 10,
    marginTop: 20
  },
  bookCardMenu: {
    marginLeft: 50,
    marginRight: 0,
    width: "100%"
  }
};

class BookCard extends Component {
  state = {
    visualizerOpen: false
  };
  handleChange = () => {
    this.setState(state => ({ visualizerOpen: !state.visualizerOpen }));
  };
  render() {
    const { classes, book } = this.props;

    return (
      <Grid item>
        <Paper square className={classes.paper}>
          <Grid xl={6} container item spacing={0} direction={"row"}>
            <Grid xl={3} item>
              <div className={classes.bookCover}>
                <BookCover book={book} />
              </div>

              <Typography className={classes.title} color="textSecondary">
                {book.title}
              </Typography>
            </Grid>
            <Grid xl={3} item>
              <Typography className={classes.description} color="textSecondary">
                {book.description.substring(0, 300) + "..."}
              </Typography>
            </Grid>
          </Grid>
          <Grid xl={6} container justify="flex-end" className="bookCardMenu">
            <BookCardMenu
              onChangeShelf={this.props.onChangeShelf}
              book={book}
            />
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(BookCard);
