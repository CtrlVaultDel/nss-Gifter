import React from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import SearchBar from "./SearchBar";
import PostDetails from "./PostDetails";
import UserPosts from "./UserPosts";

const ApplicationView = () => {
  return (
    <Switch>
        <Route path="/" exact>
            <SearchBar />
            <PostList />
        </Route>

        <Route path="/posts/add">
            <PostForm />
        </Route>

        <Route path="/posts/:id">
            <PostDetails />
        </Route>

        <Route path="/users/:id">
            <UserPosts />
        </Route>
    </Switch>
  );
};

export default ApplicationView;