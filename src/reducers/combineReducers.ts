import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import todoReducer from "./todoReducer";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    todo: todoReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
