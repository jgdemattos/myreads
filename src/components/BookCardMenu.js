import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import ChangeShelfMenu from "./ChangeShelfMenu";
import ShowDescButton from "./ShowDescButton";
import Grid from "@material-ui/core/Grid";
const styles = {};

class BookCardMenu extends Component {
  state = {};

  render() {
    const { book } = this.props;

    return (
      <div className="cardMenu">
        <Grid container spacing={8} direction={"row"}>
          <Grid item>
            <ShowDescButton book={book} />
          </Grid>
          <Grid item>
            <ChangeShelfMenu
              onChangeShelf={this.props.onChangeShelf}
              book={book}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(BookCardMenu);
