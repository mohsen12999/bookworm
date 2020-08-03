import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import PublicReducer from "./publicReducer";
import AdminReducer from "./adminReducer";
import AppReducer from "./appReducer";

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    public: PublicReducer,
    admin: AdminReducer,
    app: AppReducer,
  });

//export type RootState = ReturnType<typeof createRootReducer>;
export default createRootReducer;
