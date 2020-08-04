export enum AppActionType {
  CLOSE_SNACKBAR = "closeSnackbar",
}

export interface AppAction {
  type: AppActionType;
  payload: any;
}

export enum AdminActionType {
  SET_LAST_BOOK_READING = "setLastBookReading",
}
