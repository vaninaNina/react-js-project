import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth-context.jsx";
import "../login/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser, authenticateUser } = useContext(AuthContext);

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
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="log-form">
        <label htmlFor="email">Email:</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          id="email"
          name="email"
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

        <button type="submit">{loading ? "Loading..." : "Log In"}</button>
      </form>
      <Link to="/register">Don't have an account? Register here</Link>
    </div>
  );
};

export default Login;
