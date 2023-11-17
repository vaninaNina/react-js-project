import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import "../login/login.css";
import { AuthContext } from "../../context/auth-context.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser, authenticateUser } = useContext(AuthContext);
  console.log(currentUser);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.length < 1) {
      setEmailError("Field cannot be empty");
    }
    setLoading(true);
    setTimeout(() => {
      authenticateUser();
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="log-form">
        <label htmlFor="username">Username or Email:</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          id="username"
          name="username"
        />
        {emailError ? <p>{emailError}</p> : null}
        <label htmlFor="password">Password:</label>
        <input
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          type="password"
          id="password"
          name="password"
        />

        <button type="submit">{loading ? "Loading..." : "Sign In"}</button>
      </form>
      <Link to="/register">Don't have an account? Register here</Link>
    </div>
  );
};

export default Login;
