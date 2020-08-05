import { Dispatch } from "redux";
import { AppActionType } from "../constants/actionTypes";

export const closeSnackbar = (
  event: React.SyntheticEvent | React.MouseEvent
) => (dispatch: Dispatch) => {
  event.stopPropagation();

  dispatch({
    type: AppActionType.CLOSE_SNACKBAR,
  });
};
