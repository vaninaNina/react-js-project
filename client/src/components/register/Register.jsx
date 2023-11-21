import React from "react";
import "../login/login.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <h2>Register</h2>
      <form className="log-form">
        <label htmlFor="username">Username or Email:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Sign In</button>
      </form>
      <Link to="/login">Already have an account? Login here</Link>
    </div>
  );
};

export default Register;
