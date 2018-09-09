import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import purple from "@material-ui/core/colors/purple";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  inputLabel: {
    color: "#f5f5f5",
    "&$cssFocused": {
      color: "#FFF"
    }
  },
  cssLabel: {
    "&$cssFocused": {
      color: "#FFF"
    }
  },
  cssFocused: {},
  cssUnderline: {
    color: "#FFF",
    "&:after": {
      borderBottomColor: purple
    }
  }
};

function TopBar(props) {
  const { classes, icon } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton className={classes.menuButton} aria-label="Menu">
              {icon}
            </IconButton>
          </Link>
          <Typography variant="title" color="inherit" className={classes.flex}>
            MyReads
          </Typography>

          {props.children}
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopBar);
