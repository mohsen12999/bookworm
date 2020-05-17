import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import { Context } from "../contexts/Context";

const MyBackdrop = () => (
    <Context.Consumer>
        {context =>
            context &&
            context.setting && (
                <Backdrop
                    style={{ zIndex: 1000, color: "#fff" }}
                    open={context.setting.loading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            )
        }
    </Context.Consumer>
);

export default MyBackdrop;
