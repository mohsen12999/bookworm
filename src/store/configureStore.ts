import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import createRootReducer from "../reducers/combineReducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const history = createBrowserHistory();

export default function configureStore(preloadedState: any) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk
        // ... other middlewares ...
      )
    )
  );

  return store;
}

// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

// import { createBrowserHistory } from "history";
// import { routerMiddleware } from "connected-react-router";
// import thunk from "redux-thunk";
// import combineReducers from "../reducers/combineReducers";

// export const history = createBrowserHistory();

// const composeEnhancers = composeWithDevTools(
//   applyMiddleware(
//     routerMiddleware(history), // for dispatching history actions
//     thunk
//   )
//   // options like actionSanitizer, stateSanitizer
// );

// export const configureStore = (preloadedState: any) =>
//   createStore(combineReducers, preloadedState, composeEnhancers);

// export default configureStore;
