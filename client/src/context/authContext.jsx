import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService.js";
import usePersistedState from "../hooks/usePersistedState.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState("auth", {});
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const loginSubmitHandler = async (values) => {
    try {
      if (!values.email || !values.password) {
        alert("Email and password are required.");
        return;
      }
      if (!regex.test(values.email)) {
        alert("This is not a valid email format!");
        return;
      }
      const result = await authService.login(values.email, values.password);

      setAuth(result);

      localStorage.setItem("accessToken", result.accessToken);

      navigate("/");
    } catch (err) {
      console.log("loginSubmitHandler error:", err);
      alert(err.message);
    }
  };

  const registerSubmitHandler = async (values) => {
    try {
      console.log(values);
      if (!values.email || !values.password || !values["confirm-password"]) {
        alert("Email and password are required.");
        return;
      }
      if (!regex.test(values.email)) {
        alert("This is not a valid email format!");
        return;
      }
      if (values.password.length < 3 && values["confirm-password"].length < 3) {
        alert("Password must be more than 3 characters");
        return;
      }
      if (values.password !== values["confirm-password"]) {
        alert("The passwords should be the same!");
        return;
      }

      const result = await authService.register(values.email, values.password);

      setAuth(result);

      localStorage.setItem("accessToken", result.accessToken);

      navigate("/");
    } catch (err) {
      console.error("registerSubmitHandler error:", err);
      alert(err.message);
    }
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
