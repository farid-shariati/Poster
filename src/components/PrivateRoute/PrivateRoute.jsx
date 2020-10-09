import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  const isAuthenticated = !!localStorage.getItem("accessToken") || !!sessionStorage.getItem("accessToken")
  return (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};


export default PrivateRoute;