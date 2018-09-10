import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BookCardMenu from "./BookCardMenu";
import BookCover from "./BookCover";
import { Paper } from "@material-ui/core";
import PropTypes from "prop-types";

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
  authors: {
    fontSize: 10,
    paddingLeft: 30
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

function BookCard(props) {
  const { classes, book } = props;

  return (
    <Grid item>
      <Paper square className={classes.paper} elevation={3}>
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
            <Typography className={classes.authors} color="textSecondary">
              {book.authors &&
                book.authors.map(author => {
                  return author + "; ";
                })}
            </Typography>
            <Typography className={classes.description} color="textSecondary">
              {book.description && book.description.substring(0, 300) + "..."}
            </Typography>
          </Grid>
        </Grid>
        <Grid xl={6} container justify="flex-end" className="bookCardMenu">
          <BookCardMenu onChangeShelf={props.onChangeShelf} book={book} />
        </Grid>
      </Paper>
    </Grid>
  );
}

BookCard.propTypes = {
  onChangeShelf: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
};

export default withStyles(styles)(BookCard);
