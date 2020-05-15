import React from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../contexts/Context";

const Logout = () => (
  <Context.Consumer>
    {(context) => {
      context.Logout();
      return <Redirect to={"/"} />;
    }}
  </Context.Consumer>
);

export default Logout;
