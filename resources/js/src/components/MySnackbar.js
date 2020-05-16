import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Context } from "../contexts/Context";

const MySnackbar = () => (
  <Context.Consumer>
    {(context) => {
      if (context && context.snackbar) {
        return (
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={context.snackbar.open}
            autoHideDuration={context.snackbar.time}
            onClose={context.CloseSnackbar}
            message={context.snackbar.message}
            action={
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={context.CloseSnackbar}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
        );
      }
    }}
  </Context.Consumer>
);

export default MySnackbar;

// https://material-ui.com/components/snackbars/
