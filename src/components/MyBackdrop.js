import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import { AuthContext } from "../contexts/AuthContext";

const MyBackdrop = () => (
  <AuthContext.Consumer>
    {(context) =>
      context && (
        <Backdrop
          style={{ zIndex: 1000, color: "#fff" }}
          open={context.loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )
    }
  </AuthContext.Consumer>
);

export default MyBackdrop;
