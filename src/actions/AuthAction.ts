import { Dispatch } from "redux";
import { AuthActionType, AppActionType } from "../constants/actionTypes";

export const closeSnackbar = (name: string, password: string) => (
  dispatch: Dispatch
) => {
  // loading
  dispatch({
    type: AppActionType.START_LOADING,
  });

  //send

  // result
  const result = true;
  if (result) {
    dispatch({
      type: AuthActionType.SUCCESS_LOGIN,
      payload: {},
    });
  } else {
    dispatch({
      type: AuthActionType.FAILED_LOGIN,
      payload: {},
    });
  }
};
