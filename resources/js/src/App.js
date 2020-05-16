import React from "react";
import ContextProvider from "./contexts/Context";
import MainLayout from "./components/MainLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./pages/Index";
import BookList from "./pages/BookList";
import SingleBook from "./pages/SingleBook";
import BlogList from "./pages/BlogList";
import SingleBlog from "./pages/SingleBlog";
import ReadBook from "./pages/ReadBook";
import About from "./pages/About";

import Register from "./pages/admin/Register";
import Login from "./pages/admin/Login";
import Logout from "./pages/admin/Logout";

import Dashboard from "./pages/admin/Dashboard";
import Profile from "./pages/admin/Profile";
import MyBook from "./pages/admin/MyBook";
import MyNote from "./pages/admin/MyNote";
import MyBlog from "./pages/admin/MyBlog";
import Wallet from "./pages/admin/Wallet";

import EditNote from "./pages/admin/EditNote";
import EditBlog from "./pages/admin/EditBlog";
import EditChapter from "./pages/admin/EditChapter";

import PrivateRouteLayout from "./components/PrivateRouteLayout";

import "./app.css";

function App() {
    return (
        <React.Fragment>
            <Router>
                <ContextProvider>
                    <MainLayout>
                        <Switch>
                            <Route path="/blog/:blog_id?">
                                <PrivateRouteLayout>
                                    <EditBlog />
                                </PrivateRouteLayout>
                            </Route>
                            <Route path="/note/:note_id?">
                                <PrivateRouteLayout>
                                    <EditNote />
                                </PrivateRouteLayout>
                            </Route>
                            <Route path="/chapter/:note_id/:chapter_id?">
                                <PrivateRouteLayout>
                                    <EditChapter />
                                </PrivateRouteLayout>
                            </Route>

                            <Route path="/dashboard">
                                <PrivateRouteLayout>
                                    <Dashboard />
                                </PrivateRouteLayout>
                            </Route>
                            <Route path="/profile">
                                <PrivateRouteLayout>
                                    <Profile />
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

                            <Route path="/register">
                                <Register />
                            </Route>
                            <Route path="/login">
                                <Login />
                            </Route>
                            <Route path="/logout">
                                <Logout />
                            </Route>

                            <Route path="/blog/:blog_id">
                                <SingleBlog />
                            </Route>
                            <Route path="/read/:book_id/:chapter_id">
                                <ReadBook />
                            </Route>
                            <Route path="/book/:book_id">
                                <SingleBook />
                            </Route>

                            <Route path="/about">
                                <About />
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
                </ContextProvider>
            </Router>
        </React.Fragment>
    );
}

export default App;
