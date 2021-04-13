import React, { useState } from "react";

export const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState([])

  const getUserWithPosts = (id) => {
    return fetch(`/api/UserProfile/GetWithPosts/${id}`)
      .then((res) => res.json())
  };

  return (
    <UserContext.Provider value={{ user, getUserWithPosts }}>
      {props.children}
    </UserContext.Provider>
  );
}