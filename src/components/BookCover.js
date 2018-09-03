import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core/styles";
const width = 128;
const styles = {
  media: {
    height: 193,
    width: width
  },
  card: {
    width: width,
    maxHeight: 193
  }
};
function BookCover(props) {
  return (
    <Card className={props.classes.card}>
      <CardMedia
        className={props.classes.media}
        image={props.book.imageLinks.thumbnail}
        title={props.book.title}
      />
    </Card>
  );
}
export default withStyles(styles)(BookCover);
