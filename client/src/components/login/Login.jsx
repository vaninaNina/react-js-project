import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth-context.jsx";
import "../login/login.css";
import useForm from "../../hooks/useForm.js";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: "",
    [LoginFormKeys.Password]: "",
  });

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={onSubmit} className="log-form">
        <label htmlFor="email">Email:</label>
        <input
          value={values[LoginFormKeys.Email]}
          onChange={onChange}
          type="text"
          id="email"
          name={LoginFormKeys.Email}
        />
        {/* {emailError ? <p>{emailError}</p> : null} */}
        <label htmlFor="password">Password:</label>
        <input
          onChange={onChange}
          value={values[LoginFormKeys.Password]}
          type="password"
          id="password"
          name={LoginFormKeys.Password}
        />
        {/*{loading ? "Loading..." : "Log In"}*/}
        <button type="submit">Log In</button>
      </form>
      <Link to="/register">Don't have an account? Register here</Link>
    </div>
  );
}
