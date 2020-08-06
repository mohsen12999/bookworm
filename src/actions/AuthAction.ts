import { Dispatch } from "redux";
import { AppActionType, AdminActionType } from "../constants/actionTypes";

export const tryToLogin = (email?: string, password?: string) => (
  dispatch: Dispatch
) => {
  // loading
  dispatch({
    type: AppActionType.START_LOADING,
  });

  // TODO: try to login

  // result
  const result: boolean = Math.random() > 0.5;
  dispatch({
    type: AppActionType.STOP_LOADING_AND_MESSAGE,
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

export const tryToRegister = (
  name?: string,
  email?: string,
  password?: string,
  password_confirmation?: string
) => (dispatch: Dispatch) => {
  // loading
  dispatch({
    type: AppActionType.START_LOADING,
  });

  // TODO: try to register

  //
  const result: boolean = Math.random() > 0.5;
  dispatch({
    type: AppActionType.STOP_LOADING_AND_MESSAGE,
    payload: {
      msg: result ? "ثبت نام موفق بود، لطفا وارد شوید" : "اشکال در ثبت نام",
    },
  });

  if (result) {
    dispatch({
      type: AdminActionType.SUCCESS_REGISTER,
      payload: { data: "" },
    });
  } else {
    dispatch({
      type: AdminActionType.FAILED_REGISTER,
      payload: { error: "" },
    });
  }

  return result;
};

export const loggingOut = () => (dispatch: Dispatch) => {
  dispatch({
    type: AdminActionType.LOGGING_OUT,
  });
};
