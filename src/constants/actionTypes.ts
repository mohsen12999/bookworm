export enum AppActionType {
  CLOSE_SNACKBAR = "closeSnackbar",
}

export interface AppAction {
  type: AppActionType;
  payload: any;
}
