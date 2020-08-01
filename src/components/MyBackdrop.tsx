import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { IAppState } from "../types/appType";

interface IMyBackdropProps{
	loading:boolean;
}

const MyBackdrop = (props:IMyBackdropProps) => (
                <Backdrop
                    style={{ zIndex: 1000, color: "#fff" }}
                    open={props.loading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
);

const mapStateToProps = (State: { app: IAppState }) => ({
  loading: State.app.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyBackdrop);
