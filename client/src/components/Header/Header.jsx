import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div id="header-wrapper">
            <div className="5grid-layout">
                <div className="row">
                    <div className="12u">
                        <section id="header">
                            <h1><Link className="home" to="/">Dopetrope</Link></h1>
                            <nav id="nav" className="mobileUI-site-nav">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/catalog">Catalog</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><a href="#">Log in</a></li>
                                </ul>
                            </nav>
                        </section>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Header;