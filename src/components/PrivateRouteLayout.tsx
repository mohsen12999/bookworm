import React from "react";
import { Redirect } from "react-router-dom";

const PrivateRouteLayout = (props: { children: any }) => {
  const loggedIn = true;
  return loggedIn ? props.children : <Redirect to={"login"} />;
};

export default PrivateRouteLayout;
