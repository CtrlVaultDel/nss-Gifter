import React from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import SearchBar from "./SearchBar";

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

      <Route path="/posts/:id">{/* TODO: Post Details Component */}</Route>
    </Switch>
  );
};

export default ApplicationView;