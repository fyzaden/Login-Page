import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

export const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      }),
    );
  };

  return (
    <div
      className="login"
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "cursive",
      }}
    >
      <form
        className="login__form"
        onSubmit={(e) => handleSubmit(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: "400px",
          height: "70vh",
          backgroundColor: "rgb(71 67 67 / 98%)",
          color: "#FFECB3",
          padding: "20px",
          borderRadius: "10px",
          gap: "5px",
        }}
      >
        <h1
          style={{
            margin: "20px",
            fontSize: "35px",
            marginBottom: "15px",
            paddingBottom: "10px",
            letterSpacing: "1px",
          }}
        >
          Login Here
        </h1>

        <TextField
          label="Name"
          type="text"
          autoComplete="name"
          required
          variant="outlined"
          color="warning"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          // helperText="Please enter your name"
        />

        <TextField
          label="Email"
          type="email"
          autoComplete="email"
          required
          variant="outlined"
          color="warning"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // helperText="Please enter your email"
        />

        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          required
          variant="outlined"
          color="warning"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // helperText="Please enter your password"
        />

        <Button
          type="submit"
          variant="contained"
          color="warning"
          size="large"
          sx={{
            width: "100%",
            marginTop: "30px",
            fontSize: "17px",
            fontFamily: "cursive",
          }}
        >
          Sumbit
        </Button>
      </form>
    </div>
  );
};

export default Login;
