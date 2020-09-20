import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";

import Layout from "./components/Layout/Layout";

import classes from "./App.module.css";
import Home from "./containers/Home/Home";

const App = (props) => {
  return (
    <div className={classes.App}>
      <Layout>
        <Route
          render={({ location }) => {
            const { key } = location;

            const duration = 500;

            const defaultStyle = {
              transition: `opacity ${duration}ms ease-in-out`,
              opacity: 0,
            };

            const transitionStyles = {
              entering: { opacity: 0 },
              entered: { opacity: 1 },
              exiting: { opacity: 1 },
              exited: { opacity: 0 },
            };

            return (
              <TransitionGroup component={null} appear>
                <Transition key={key} timeout={duration}>
                  {(state) => (
                    <div
                      style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                      }}
                    >
                      <Switch location={location}>
                        <Route path="/" exact component={Home} />
                        <Redirect to="/" />
                      </Switch>
                    </div>
                  )}
                </Transition>
              </TransitionGroup>
            );
          }}
        />
      </Layout>
    </div>
  );
};

export default App;
