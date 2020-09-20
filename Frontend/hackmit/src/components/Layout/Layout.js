import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout));
