import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import Input from "@material-ui/core/Input";

const styles = {
  card: {
    minWidth: 200,
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  formControl: {
    paddingLeft: 20
  }
};

function BulkChangeMenu(props) {
  let shelf = "none";
  const { classes } = props;
  let handleClick = () => {
    props.onBulkChange(shelf);
  };
  let changeShelf = event => {
    shelf = event.target.value;
  };
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          Select items to change. <br /> Chose an shelf. <br /> Click{" "}
          <b>CHANGE</b> .
        </Typography>
      </CardContent>
      <FormControl className={classes.formControl}>
        <NativeSelect
          onChange={event => changeShelf(event)}
          input={<Input name="shelf" id="age-native-helper" />}
        >
          <option value={"none"}>None</option>
          <option value={"currentlyReading"}>Currently Reading</option>
          <option value={"wantToRead"}>Want to read</option>
          <option value={"read"}>Read</option>
        </NativeSelect>
      </FormControl>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            handleClick();
          }}
        >
          Change
        </Button>
      </CardActions>
    </Card>
  );
}

BulkChangeMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  onBulkChange: PropTypes.func.isRequired
};

export default withStyles(styles)(BulkChangeMenu);
