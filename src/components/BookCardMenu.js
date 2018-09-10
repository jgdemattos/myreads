import React from "react";
import ChangeShelfMenu from "./ChangeShelfMenu";
import ShowDescButton from "./ShowDescButton";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

function BookCardMenu(props) {
  const { book } = props;

  return (
    <div className="cardMenu">
      <Grid container spacing={8} direction={"row"}>
        <Grid item>
          <ShowDescButton book={book} />
        </Grid>
        <Grid item>
          <ChangeShelfMenu onChangeShelf={props.onChangeShelf} book={book} />
        </Grid>
      </Grid>
    </div>
  );
}

BookCardMenu.propTypes = {
  onChangeShelf: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
};

export default BookCardMenu;
