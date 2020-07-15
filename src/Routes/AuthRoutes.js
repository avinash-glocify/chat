import React from "react";
import { Route, Redirect } from "react-router-dom";

function AuthRoute({ component: Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        !isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/chat" />
        )
      }
    />
  );
}

export default AuthRoute;
