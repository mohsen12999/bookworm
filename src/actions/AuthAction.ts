import { Dispatch } from "redux";
import { AppActionType, AdminActionType } from "../constants/actionTypes";
import { FetchRegister, FetchLogin } from "../services/AuthServices";

export const tryToLogin = (email?: string, password?: string) => async (
  dispatch: Dispatch
) => {
  // loading
  dispatch({
    type: AppActionType.START_LOADING,
  });

  // try to login
  const output = await FetchLogin(email, password);
  // result
  const result: boolean = output.success;
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

  return result;
};

export const tryToRegister = (
  name?: string,
  email?: string,
  password?: string,
  password_confirmation?: string
) => async (dispatch: Dispatch) => {
  // loading
  dispatch({
    type: AppActionType.START_LOADING,
  });

  // try to register
  var output = await FetchRegister(
    name,
    email,
    password,
    password_confirmation
  );

  // result
  const result: boolean = output.success;

  dispatch({
    type: AppActionType.STOP_LOADING_AND_MESSAGE,
    payload: {
      msg: result ? "ثبت نام موفق بود، لطفا وارد شوید" : "اشکال در ثبت نام",
    },
  });

  if (result) {
    dispatch({
      type: AdminActionType.SUCCESS_REGISTER,
      payload: { data: output.data },
    });
  } else {
    dispatch({
      type: AdminActionType.FAILED_REGISTER,
      payload: { error: output.error },
    });
  }

  return result;
};

export const loggingOut = () => (dispatch: Dispatch) => {
  dispatch({
    type: AdminActionType.LOGGING_OUT,
  });
};
