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
      const result = await authService.login(values.email, values.password);

      setAuth(result);

      localStorage.setItem("accessToken", result.accessToken);

      navigate("/");
    } catch (e) {
      console.log("loginSubmitHandler error:", e);
    }
  };

  const registerSubmitHandler = async (values) => {
    try {
      setAuth(result);

      localStorage.setItem("accessToken", result.accessToken);

      navigate("/");
    } catch (err) {
      console.error("registerSubmitHandler error:", err);
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
