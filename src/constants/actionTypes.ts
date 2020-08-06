export enum AppActionType {
  CLOSE_SNACKBAR = "closeSnackbar",
  START_LOADING = "startLoading",
  STOP_LOADING = "stopLoading",
  STOP_LOADING_AND_MESSAGE = "stopLoadingAndMessage",
}

export enum AdminActionType {
  SET_LAST_BOOK_READING = "setLastBookReading",
  SUCCESS_LOGIN = "successLogin",
  FAILED_LOGIN = "failedLogin",
  SUCCESS_REGISTER = "successRegister",
  FAILED_REGISTER = "failedRegister",
  LOGGING_OUT = "loggingOut",
}

export enum AuthActionType {
  LOGIN = "login",
  // SUCCESS_LOGIN = "successLogin",
  // FAILED_LOGIN = "failedLogin",
}

interface IAction {
  type: any;
  payload?: any;
}

export interface IAppAction extends IAction {
  type: AppActionType;
  payload?: undefined | { msg: string };
}

export interface IAdminAction extends IAction {
  type: AdminActionType;
  payload?: undefined | { book_id: number; chapter_id: number };
}
