import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      exact
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default PrivateRoute;
