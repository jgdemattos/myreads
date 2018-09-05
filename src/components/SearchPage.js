import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import purple from "@material-ui/core/colors/purple";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TopBar from "./TopBar";

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
    color: "#ccc",
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
      borderBottomColor: "#FFF"
    }
  },
  input: {
    color: "#FFF",
    fontSize: 25
  },
  form: {},
  searchIcon: {
    marginTop: 10,
    marginLeft: 20
  }
};

function SearchPage(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <TopBar>
        <SearchIcon className={classes.searchIcon} />
        <FormControl
          className={classes.form}
          fullWidth
          label="Search field"
          type="search"
        >
          <InputLabel
            FormLabelClasses={{
              root: classes.inputLabel,
              focused: classes.cssFocused
            }}
            htmlFor="input-with-icon-adornment"
          >
            Search Books
          </InputLabel>

          <Input
            classes={{
              root: classes.input,
              underline: classes.cssUnderline
            }}
          />
        </FormControl>
      </TopBar>
    </div>
  );
}

SearchPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchPage);
