import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { loggingOut } from "../../actions/AuthAction";

interface ILogoutProps {
  loggingOut(): void;
}
const Logout = (props: ILogoutProps) => {
  React.useEffect(() => {
    loggingOut();
  }, []);

  return <Redirect to={"/"} />;
};

const mapStateToProps = (State: any) => {};

const mapDispatchToProps = {
  loggingOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
