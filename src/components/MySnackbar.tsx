import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import {closeSnackbar} from "../actions/appActions.ts"

interface IMySnackbarProps{
	open: boolean;
	message: string;
	time:number;

	closeSnackbar: Function;
}

const MySnackbar = ({open,message,time,closeSnackbar}:IMySnackbarProps) => (
                    <Snackbar
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left"
                        }}
                        open={open}
                        autoHideDuration={time}
                        onClose={closeSnackbar}
                        message={message}
                        action={
                            <IconButton
                                size="small"
                                aria-label="close"
                                color="inherit"
                                onClick={closeSnackbar}
                            >
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        }
                    />
);

const mapStateToProps = (State: { app: IAppState }) => ({
  open: State.app.snackbar.open,
  message: State.app.snackbar.message,
  time: State.app.snackbar.time,
});

const mapDispatchToProps = {
	closeSnackbar,
};

export default connect(mapStateToProps, mapDispatchToProps)(MySnackbar);

// https://material-ui.com/components/snackbars/
