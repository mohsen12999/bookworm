import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import HomeReducer from "./publicReducer";
import AdminReducer from "./adminReducer";

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    home: HomeReducer,
    admin: AdminReducer,
  });

export type RootState = ReturnType<typeof createRootReducer>;
export default createRootReducer;
