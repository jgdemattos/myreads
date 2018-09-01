import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  button: {
    float: "right",
    marginTop: "100%"
  }
};

class BookCardMenu extends Component {
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
  handleShelfChange = (event, value) => {
    const newBook = this.props.book;
    newBook.shelf = value;
    if (this.props.onChangeShelf) this.props.onChangeShelf(newBook);

    //changeShelf(); onChangeShelf
    console.log(value);
    this.handleClose();
  };

  render() {
    const { classes, book } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className="cardMenu">
        <Button
          justify={"center"}
          variant="fab"
          color="primary"
          aria-label="Add"
          className={classes.button}
          aria-owns={anchorEl ? "simple-menu" : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <AddIcon />
        </Button>
        <Menu
          id="simple-menu"
          //onChange={this.handleShelfChange}
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
export default withStyles(styles)(BookCardMenu);
