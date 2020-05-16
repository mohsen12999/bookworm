import React from "react";

import { Redirect } from "react-router-dom";

import { Context } from "../contexts/Context";

const PrivateRouteLayout = (props) => (
  <Context.Consumer>
    {(context) =>
      context.admin.isAuthenticated ? props.children : <Redirect to={"login"} />
    }
  </Context.Consumer>
);

export default PrivateRouteLayout;
