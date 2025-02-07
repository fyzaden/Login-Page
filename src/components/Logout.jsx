import React from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };
  return (
    <div>
      <h1>
        Welcome <span>{user}</span>
        <Button
          variant="contained"
          color="secondary"
          onClick={(e) => handleLogout(e)}
        >
          Logout
        </Button>
      </h1>
    </div>
  );
};

export default Logout;
