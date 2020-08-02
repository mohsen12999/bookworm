import { Dispatch } from "redux";
import { AppAction } from "../constants/actionTypes";

export const closeSnackbar = (
  event: React.SyntheticEvent | React.MouseEvent
) => (dispatch: Dispatch) => {
  event.stopPropagation();

  dispatch({
    type: AppAction.CLOSE_SNACKBAR,
    payload: {},
  });
};
