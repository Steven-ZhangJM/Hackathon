import React from "react";

import Toolbar from "../UI/Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <nav>
        <Toolbar />
      </nav>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
