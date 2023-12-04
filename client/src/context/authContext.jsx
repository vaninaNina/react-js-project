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
      if (
        !values.email ||
        !values.password ||
        (!values.email && !values.password)
      ) {
        console.error("Both email and password are required.");
        return;
      }
      if (!regex.test(values.email)) {
        console.error("This is not a valid email format!");
        return;
      }
      if (values.password.length < 3) {
        console.error("Password must be more than 3 characters");
        return;
      }
      const result = await authService.login(values.email, values.password);

      setAuth(result);

      localStorage.setItem("accessToken", result.accessToken);

      navigate("/");
    } catch (e) {
      console.log("loginSubmitHandler error:", e);
    }
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password);

    setAuth(result);

    localStorage.setItem("accessToken", result.accessToken);

    navigate("/");
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
