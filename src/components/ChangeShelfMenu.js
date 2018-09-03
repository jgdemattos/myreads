import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ReorderIcon from "@material-ui/icons/Reorder";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  cardMenu: {}
};

class ChangeShelfMenu extends Component {
  state = {
    anchorEl: null,
    selectedItem: ""
  };
  componentDidMount() {
    this.setState({ selectedItem: this.props.book.shelf });
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleShelfChange = (event, shelf) => {
    const newBook = this.props.book;
    newBook.shelf = shelf;
    if (this.props.onChangeShelf) this.props.onChangeShelf(newBook);
    this.handleClose();
  };

  render() {
    const { classes, book } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className="changeShelfMenu">
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          className={classes.button}
          aria-owns={anchorEl ? "simple-menu" : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          mini
        >
          <ReorderIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          value={this.state.selectedItem}
        >
          <MenuItem
            onClick={event => this.handleShelfChange(event, "currentlyReading")}
            selected={book.shelf === "currentlyReading"}
          >
            Currently Reading
          </MenuItem>
          <MenuItem
            onClick={event => this.handleShelfChange(event, "wantToRead")}
            selected={book.shelf === "wantToRead"}
          >
            Want to read
          </MenuItem>
          <MenuItem
            onClick={event => this.handleShelfChange(event, "read")}
            selected={book.shelf === "read"}
          >
            Read
          </MenuItem>
        </Menu>
      </div>
    );
  }
}
export default withStyles(styles)(ChangeShelfMenu);
