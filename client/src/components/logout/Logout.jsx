import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/authContext.jsx";
import * as authService from "../../services/authService.js";

export default function Logout() {
  const navigate = useNavigate();
  const { logoutHandler } = useContext(AuthContext);

  useEffect(() => {
    authService
      .logout()
      .then(() => {
        logoutHandler();
        navigate("/");
      })
      .catch(() => navigate("/"));
  }, []);

  return null;
}
