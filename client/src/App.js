import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ApplicationView from "./components/ApplicationView";
import { PostProvider } from "./providers/PostProvider";
import { UserProvider } from "./providers/UserProvider";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        <Router>
            <PostProvider>
            <UserProvider>
                <Header />
                <ApplicationView />
            </UserProvider>
            </PostProvider>
        </Router>
    </div>
  );
}

export default App;