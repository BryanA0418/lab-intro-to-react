import React from "react";
import "./App.css";
import Contacts from "./Components/Contacts";
import Nav from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";

function App() {
  return (
    <div className = "app">
      <Nav />
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
  )
}

export default App;
