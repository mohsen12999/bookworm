import { Reducer } from "redux";
import { IAppState } from "../types/appType";
import { appInitialState } from "../constants/appState";

const AppReducer: any = (
  state: IAppState = appInitialState,
  action: any
) => {
  return state;
};

export default AppReducer;
