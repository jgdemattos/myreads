import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import BookCardMenu from "./BookCardMenu";
const width = 128;
const styles = {
  grid: {
    width: width
  },
  card: {
    width: width
  },
  title: {
    fontSize: 14,
    width: width
  },
  media: {
    height: 193,
    width: width
  }
};

class BookCard extends Component {
  state = { shelf: "" };

  render() {
    const { classes, book } = this.props;
    const { shelf } = this.state;

    return (
      <Grid item>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={book.imageLinks.thumbnail}
            title={book.title}
          >
            <BookCardMenu
              onChangeShelf={this.props.onChangeShelf}
              book={book}
            />
          </CardMedia>
        </Card>
        <Typography className={classes.title} color="textSecondary">
          {book.title}
        </Typography>
      </Grid>
    );
  }
}
export default withStyles(styles)(BookCard);
