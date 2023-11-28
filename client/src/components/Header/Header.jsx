import "../../components/header/header.css";

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/authContext.jsx";
import * as authService from "../../services/authService.js";

const Header = () => {
  const { isAuthenticated, username, logoutHandler } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await authService.logout();
      logoutHandler();
      navigate("/");
    } catch (error) {
      logoutHandler();
      navigate("/login");
    }
  };
  return (
    <div id="header-wrapper">
      <div className="5grid-layout">
        <div className="row">
          <div className="12u">
            <section id="header">
              <h1>
                <Link className="home" to="/">
                  Dopetrope
                </Link>
              </h1>
              <nav id="nav" className="mobileUI-site-nav">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/nfts">Catalog</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
                <ul>
                  {isAuthenticated ? (
                    <div id="user">
                      <li>
                        <Link to="/profile">My Profile</Link>
                      </li>
                      <li>
                        <Link to="/create">Create</Link>
                      </li>

                      <input
                        id="logout-button"
                        type="submit"
                        value="Log out"
                        onClick={() => handleLogout()}
                      />
                    </div>
                  ) : (
                    <div id="guest">
                      <li>
                        <Link to="/login">Account</Link>
                      </li>
                    </div>
                  )}
                </ul>
              </nav>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
