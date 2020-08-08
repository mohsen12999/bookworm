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

    case AppActionType.STOP_LOADING_AND_MESSAGE:
      return {
        ...state,
        loading: false,
        snackbar: {
          ...state.snackbar,
          open: false,
          message: action.payload?.msg,
        },
      };
    default:
      return state;
  }
};

export default AppReducer;
