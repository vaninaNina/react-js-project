import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth-context.jsx";
import { Link } from "react-router-dom";
import "../login/login.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmationPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser, authenticateUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.length < 1) {
      setEmailError("Field cannot be empty");
    }

    if (confirmPassword !== password) {
      throw new Error("Passwords do not match");
    }

    setLoading(true);
    setTimeout(() => {
      authenticateUser();
      setLoading(false);
    }, 1000);
  };
  return (
    <div className="container">
      <h2>Register</h2>
      <form className="log-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          id="email"
          name="email"
        />

        <label htmlFor="password">Password:</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          id="password"
          name="password"
        />

        <label htmlFor="password">Confirm Password:</label>
        <input
          value={confirmPassword}
          onChange={(event) => setConfirmationPassword(event.target.value)}
          type="password"
          id="confirm-password"
          name="confirm-password"
        />

        <button type="submit">Register</button>
      </form>
      <Link to="/login">Already have an account? Login here</Link>
    </div>
  );
};

export default Register;
