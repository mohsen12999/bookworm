import { IAppState } from "../types/appType";
import { IAppAction, AppActionType } from "../constants/actionTypes";
import { appInitialState } from "../constants/appState";

const AppReducer = (state: IAppState = appInitialState, action: IAppAction) => {
  switch (action.type) {
    case AppActionType.CLOSE_SNACKBAR:
      return { ...state, snackbar: { ...state.snackbar, open: false } };
    case AppActionType.START_LOADING:
      return { ...state, loading: true };

    case AppActionType.STOP_LOADING:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default AppReducer;
