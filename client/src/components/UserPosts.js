import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import { useParams } from "react-router-dom";
import Post from "./Post";

const UserPosts = () => {

  const [user, setUser] = useState();
  const { getUserWithPosts } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
        getUserWithPosts(id)
        .then(setUser);
    }, []
    );

  if (!user) {
    return null;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {user.posts.map((post) => {
            <Post key={post.id} post={post} />
        })}
        </div>
      </div>
    </div>
  );
};

export default UserPosts;