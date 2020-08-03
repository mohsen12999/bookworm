import { IAppState } from "../types/appType";
import { AppAction, AppActionType } from "../constants/actionTypes";
import { appInitialState } from "../constants/appState";

const AppReducer = (state: IAppState = appInitialState, action: AppAction) => {
  switch (action.type) {
    case AppActionType.CLOSE_SNACKBAR:
      return { ...state, snackbar: { ...state.snackbar, open: false } };

    default:
      return state;
  }
};

export default AppReducer;
