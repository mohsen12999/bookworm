import React from "react";
import { Switch, Route } from "react-router";

import { PublicPages, AuthPages, AdminPages } from "../constants/pages";

import MainLayout from "../components/MainLayout";
import PrivateRouteLayout from "../components/PrivateRouteLayout";

import Index from "./public/Index";
import BookList from "./public/BookList";
import PostList from "./public/PostList";
import About from "./public/About";
import NotFound from "./public/NotFound";
import SingleBook from "./public/SingleBook";
import SinglePost from "./public/SinglePost";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import Search from "./public/Search";
import Dashboard from "./admin/Dashboard";
import Profile from "./admin/Profile";
import MyBooks from "./admin/MyBooks";
import MyChapters from "./admin/MyChapters";
import MyPosts from "./admin/MyPosts";
import MyLibrary from "./admin/MyLibrary";
import Wallet from "./admin/Wallet";
import EditPost from "./admin/EditPost";
import EditBook from "./admin/EditBook";
import EditChapter from "./admin/EditChapter";

function App() {
  React.useEffect(() => {
    // TODO: load info from server
    console.log("first start");
  }, []);
  return (
    <MainLayout>
      <Switch>
        <Route
          exact
          path={process.env.PUBLIC_URL + "/" + PublicPages.INDEX}
          component={Index}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/" + PublicPages.BOOKS + "/:search?"}
          component={BookList}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/" + PublicPages.POSTS}
          component={PostList}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/" + PublicPages.ABOUT}
          component={About}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/" + PublicPages.SEARCH + "/:search"}
          component={Search}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/" + PublicPages.BOOK + "/:id"}
          component={SingleBook}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/" + PublicPages.POST + "/:id"}
          component={SinglePost}
        />
        <Route
          exact
          path={
            process.env.PUBLIC_URL +
            "/" +
            PublicPages.READ +
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

        <Route
          exact
          path={process.env.PUBLIC_URL + "/" + AdminPages.DASHBOARD}
          component={Dashboard}
        />
        <Route exact path={process.env.PUBLIC_URL + "/" + AdminPages.PROFILE}>
          <PrivateRouteLayout>
            <Profile />
          </PrivateRouteLayout>
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/" + AdminPages.MY_BOOKS}>
          <PrivateRouteLayout>
            <MyBooks />
          </PrivateRouteLayout>
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/" + AdminPages.MY_POSTS}>
          <PrivateRouteLayout>
            <MyPosts />
          </PrivateRouteLayout>
        </Route>
        <Route
          exact
          path={process.env.PUBLIC_URL + "/" + AdminPages.MY_Library}
        >
          <PrivateRouteLayout>
            <MyLibrary />
          </PrivateRouteLayout>
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/" + AdminPages.WALLET}>
          <PrivateRouteLayout>
            <Wallet />
          </PrivateRouteLayout>
        </Route>

        <Route
          exact
          path={process.env.PUBLIC_URL + "/" + AdminPages.EDIT_POST + "/:id?"}
        >
          <PrivateRouteLayout>
            <EditPost />
          </PrivateRouteLayout>
        </Route>
        <Route
          exact
          path={process.env.PUBLIC_URL + "/" + AdminPages.EDIT_BOOK + "/:id?"}
        >
          <PrivateRouteLayout>
            <EditBook />
          </PrivateRouteLayout>
        </Route>
        <Route
          exact
          path={process.env.PUBLIC_URL + "/" + AdminPages.MY_CHAPTER + "/:id"}
        >
          <PrivateRouteLayout>
            <MyChapters />
          </PrivateRouteLayout>
        </Route>
        <Route
          exact
          path={
            process.env.PUBLIC_URL +
            "/" +
            AdminPages.EDIT_CHAPTER +
            "/:book_id/:chapter_id?"
          }
        >
          <PrivateRouteLayout>
            <EditChapter />
          </PrivateRouteLayout>
        </Route>

        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

export default App;
