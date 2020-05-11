import React from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Logout = () => (
  <AuthContext.Consumer>
    {(context) => {
      context.Logout();
      return <Redirect to={"/"} />;
    }}
  </AuthContext.Consumer>
);

export default Logout;
