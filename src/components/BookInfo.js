import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import BookCover from "./BookCover";
import PropTypes from "prop-types";

const styles = {
  paper: {
    margin: 0,
    padding: 0
  },
  authors: {
    fontSize: 13,
    padding: 15
  }
};

function BookInfo(props) {
  const { classes, book, open, handleClose } = props;
  return (
    <div className={classes.root}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="scroll-dialog-title">{book.title}</DialogTitle>
        <DialogContent>
          <BookCover book={book} />
          <DialogContentText className={classes.authors}>
            {book.authors &&
              book.authors.map(author => {
                return author + "; ";
              })}
          </DialogContentText>
          <DialogContentText>{book.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

BookInfo.propTypes = {
  book: PropTypes.object.isRequired
};

export default withStyles(styles)(BookInfo);
