import React from "react";
import AuthContextProvider from "./contexts/AuthContext";
import MainLayout from "./components/MainLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./pages/Index";
import BookList from "./pages/BookList";
import SingleBook from "./pages/SingleBook";
import BlogList from "./pages/BlogList";
import SingleBlog from "./pages/SingleBlog";

import Login from "./pages/admin/Login";
import Logout from "./pages/admin/Logout";

import Dashboard from "./pages/admin/Dashboard";
import MyBook from "./pages/admin/MyBook";
import MyNote from "./pages/admin/MyNote";
import MyBlog from "./pages/admin/MyBlog";
import Wallet from "./pages/admin/Wallet";

import PrivateRouteLayout from "./components/PrivateRouteLayout";

function App() {
  return (
    <React.Fragment>
      <Router>
        <AuthContextProvider>
          <MainLayout>
            <Switch>
              <Route path="/dashboard">
                <PrivateRouteLayout>
                  <Dashboard />
                </PrivateRouteLayout>
              </Route>
              <Route path="/mybook">
                <PrivateRouteLayout>
                  <MyBook />
                </PrivateRouteLayout>
              </Route>
              <Route path="/mynote">
                <PrivateRouteLayout>
                  <MyNote />
                </PrivateRouteLayout>
              </Route>
              <Route path="/myblog">
                <PrivateRouteLayout>
                  <MyBlog />
                </PrivateRouteLayout>
              </Route>
              <Route path="/wallet">
                <PrivateRouteLayout>
                  <Wallet />
                </PrivateRouteLayout>
              </Route>

              <Route path="/login">
                <Login />
              </Route>
              <Route path="/logout">
                <Logout />
              </Route>

              <Route path="/blog/:id">
                <SingleBlog />
              </Route>
              <Route path="/book/:id">
                <SingleBook />
              </Route>
              <Route path="/about">
                <Index />
              </Route>
              <Route path="/blogs">
                <BlogList />
              </Route>
              <Route path="/books">
                <BookList />
              </Route>
              <Route path="/">
                <Index />
              </Route>
            </Switch>
          </MainLayout>
        </AuthContextProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
