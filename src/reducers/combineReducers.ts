import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
// import todoReducer from "./todoReducer";
// import AppReducer from "./appReducer";
// import ShopReducer from "./shopReducer";

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    //   app: AppReducer,
    //   shop: ShopReducer,
  });

export type RootState = ReturnType<typeof createRootReducer>;
export default createRootReducer;
