import React, { useContext } from "react";
import AuthContext from "../../context/authContext.jsx";
import { Link } from "react-router-dom";
import "../login/login.css";
import useForm from "../../hooks/useForm.js";

const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  // ConfirmPassword: "confirm-password",
};

const Register = () => {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    // [RegisterFormKeys.ConfirmPassword]: "",
  });

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={onSubmit} className="log-form">
        <label htmlFor="email">Email:</label>
        <input
          value={values[RegisterFormKeys.Email]}
          onChange={onChange}
          type="text"
          id="email"
          name="email"
        />

        <label htmlFor="password">Password:</label>
        <input
          value={values[RegisterFormKeys.Password]}
          onChange={onChange}
          type="password"
          id="password"
          name="password"
        />

        {/* <label htmlFor="con-password">Confirm Password:</label>
        <input
          value={values[RegisterFormKeys.ConfirmPassword]}
          onChange={onChange}
          type="password"
          id="confirm-password"
          name="confirm-password"
        /> */}

        <button type="submit">Register</button>
      </form>
      <Link to="/login">Already have an account? Login here</Link>
    </div>
  );
};

export default Register;
