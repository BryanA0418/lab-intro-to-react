import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts";
import Nav from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";

function App() {
  return (
    <div>
      <Nav />
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
  )
}

export default App;
