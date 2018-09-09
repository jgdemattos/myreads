import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import LaunchIcon from "@material-ui/icons/Launch";
import { withStyles } from "@material-ui/core/styles";
import BookInfo from "./BookInfo";

const styles = {
  cardMenu: {}
};

class ChangeShelfMenu extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, book } = this.props;
    const { open } = this.state;

    return (
      <div className="showDescButton">
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          className={classes.button}
          onClick={this.handleClickOpen}
          mini
        >
          <LaunchIcon />
        </Button>
        <BookInfo open={open} handleClose={this.handleClose} book={book} />
      </div>
    );
  }
}
export default withStyles(styles)(ChangeShelfMenu);
