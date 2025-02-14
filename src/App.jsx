import { useState } from "react";
import React from "react";
import "./App.css";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Logout from "./components/Logout";

const App = () => {
  const user = useSelector(selectUser);

  return <div>{user ? <Logout /> : <Login />}</div>;
};

export default App;
