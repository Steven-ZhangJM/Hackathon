/* eslint-disable indent */
import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import MenuItems from "../MenuItems/MenuItems";

import "./Toolbar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const titles = [
  "Public Review",
  "MyProfile",
  "Login/Signup",
  "Logout",
  "Details",
  "Page Not Found",
];

const ToolBar = (props) => {
  const classes = useStyles();

  let title;

  switch (props.location.pathname) {
    case "/":
      title = titles[0];
      break;
    case "/myprofile":
      title = titles[1];
      break;
    case "/auth":
      title = titles[2];
      break;
    case "/logout":
      title = titles[3];
      break;
    case "/detail":
      title = titles[4];
      break;
    default:
      title = titles[5];
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MenuItems isAuth={props.isAuth} />
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(ToolBar);
