import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store/configureStore";
import { Switch, Route } from "react-router";

import "./index.css";

import { HomePages, AuthPages, AdminPages } from "./constants/pages";

import Index from "./pages/public/Index";
import BookList from "./pages/public/BookList";
import PostList from "./pages/public/PostList";
import About from "./pages/public/About";
import NotFound from "./pages/public/NotFound";
import SingleBook from "./pages/public/SingleBook";
import SinglePost from "./pages/public/SinglePost";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Logout from "./pages/auth/Logout";

const store = configureStore({} /* provide initial state if any */);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/" + HomePages.INDEX}
            component={Index}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/" + HomePages.BOOKS}
            component={BookList}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/" + HomePages.POSTS}
            component={PostList}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/" + HomePages.ABOUT}
            component={About}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/" + HomePages.BOOK + "/:id"}
            component={SingleBook}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/" + HomePages.POST + "/:id"}
            component={SinglePost}
          />
          <Route
            exact
            path={
              process.env.PUBLIC_URL +
              "/" +
              HomePages.READ +
              "/:book_id/:chapter_id"
            }
            component={PostList}
          />

          <Route
            exact
            path={process.env.PUBLIC_URL + "/" + AuthPages.REGISTER}
            component={Register}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/" + AuthPages.LOGIN}
            component={Login}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/" + AuthPages.LOGOUT}
            component={Logout}
          />

          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
