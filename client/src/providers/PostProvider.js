import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const getAllPostsWithComments = () => {
    return fetch("/api/post/getwithcomments")
      .then((res) => res.json())
      .then(setPosts);
  };

  const getPostsBySearch = (q, sortDesc) => {
      return fetch (`api/post/search?q=${q}&sortDesc=${sortDesc}`)
      .then((res) => res.json())
      .then(setPosts);
  };

  const addPost = (post) => {
    return fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post)
    });
  };

  return (
    <PostContext.Provider value={{ posts, getAllPostsWithComments, getPostsBySearch, addPost }}>
      {props.children}
    </PostContext.Provider>
  );
};