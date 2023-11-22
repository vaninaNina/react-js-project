import "../../components/header/header.css";

import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext.jsx";

const Header = () => {
  const { isAuthenticated, username } = useContext(AuthContext);
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
                    <Link to="/catalog">Catalog</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  {isAuthenticated && (
                    <div id="user">
                      <li>
                        <Link to="/create">Create</Link>
                      </li>
                      <li>
                        <Link to="/logout">Log Out</Link>
                      </li>
                    </div>
                  )}
                  {!isAuthenticated && (
                    <div id="guest">
                      <li>
                        <Link to="/login">Account</Link>
                      </li>
                    </div>
                  )}

                  {/* {user ? null : <li><Link to="/login">Log In</Link></li>} */}
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
