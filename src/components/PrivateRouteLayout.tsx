import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { IAdminState } from "../types/adminType";

interface IPrivateRouteLayoutProps {
  loggedIn: boolean;
  children: any;
}

const PrivateRouteLayout = (
  props: IPrivateRouteLayoutProps
) => {
  console.log(props);
  return props.loggedIn ? props.children : <Redirect to={"login"} />;
};

const mapStateToProps = (State: { admin: IAdminState }) => ({
  loggedIn: State.admin.loggedIn,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRouteLayout);
