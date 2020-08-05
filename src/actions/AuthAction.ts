import { Dispatch } from "redux";
import { AppActionType, AdminActionType } from "../constants/actionTypes";

export const tryToLogin = (email?: string, password?: string) => (
  dispatch: Dispatch
) => {
  // loading
  dispatch({
    type: AppActionType.START_LOADING,
  });

  //send

  // result
  const result = true;
  dispatch({
    type: AppActionType.STOP_LOADING,
    payload: { msg: result ? "خوش آمدید" : "اشکال در ورود" },
  });

  if (result) {
    dispatch({
      type: AdminActionType.SUCCESS_LOGIN,
      payload: { data: "" },
    });
  } else {
    dispatch({
      type: AdminActionType.FAILED_LOGIN,
      payload: { error: "" },
    });
  }
};
