import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const styles = {
  card: {
    width: 128
  },
  title: {
    marginBottom: 70,
    fontSize: 14
  },
  media: {
    height: 193,
    Width: 128
  },
  button: {
    float: "right"
  }
};

class BookCard extends Component {
  state = {
    anchorEl: null
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes, book, shelf } = this.props;
    const { anchorEl } = this.state;

    return (
      <Grid item>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={book.imageLinks.thumbnail}
            title={book.title}
          />
          <CardContent>
            <Typography className={classes.title} color="textSecondary">
              {book.title}
            </Typography>
          </CardContent>
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
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleClose}>My account</MenuItem>
            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
          </Menu>
        </Card>
      </Grid>
    );
  }
}
export default withStyles(styles)(BookCard);
