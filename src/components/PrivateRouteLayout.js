import React from "react";

import { Redirect } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

const PrivateRouteLayout = (props) => (
  <AuthContext.Consumer>
    {(context) =>
      context.isAuthenticated ? props.children : <Redirect to={"login"} />
    }
  </AuthContext.Consumer>
);

export default PrivateRouteLayout;
