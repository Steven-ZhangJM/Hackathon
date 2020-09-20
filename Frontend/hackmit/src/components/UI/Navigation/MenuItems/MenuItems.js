import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import SchoolIcon from "@material-ui/icons/School";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const MenuItems = (props) => {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const list = (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText>Colleges</ListItemText>
          </ListItem>
        </Link>
        {props.isAuth && (
          <Link to="/myprofile">
            <ListItem button>
              <ListItemIcon>
                <ChildCareIcon />
              </ListItemIcon>
              <ListItemText primary={"MyProfile"} />
            </ListItem>
          </Link>
        )}
        {props.isAuth ? (
          <Link to="/logout">
            <ListItem button>
              <ListItemIcon>
                <AssignmentTurnedInIcon />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItem>
          </Link>
        ) : (
          <Link to="/auth">
            <ListItem button>
              <ListItemIcon>
                <AssignmentIndIcon />
              </ListItemIcon>
              <ListItemText primary={"Login/Signup"} />
            </ListItem>
          </Link>
        )}
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  );
};

export default MenuItems;
