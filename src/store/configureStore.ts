import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import combineReducers from "../reducers/combineReducers";

export const history = createBrowserHistory();

const composeEnhancers = composeWithDevTools(
  applyMiddleware(
    routerMiddleware(history), // for dispatching history actions
    thunk
  )
  // options like actionSanitizer, stateSanitizer
);

export const configureStore = (preloadedState: any) =>
  createStore(combineReducers, preloadedState, composeEnhancers);

export default configureStore;
