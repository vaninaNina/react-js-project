

const Header = () => {
    return (
        <div id="header-wrapper">
            <div className="5grid-layout">
                <div className="row">
                    <div className="12u">
                        <section id="header">
                            <h1><a href="#">Dopetrope</a></h1>
                            <nav id="nav" className="mobileUI-site-nav">
                                <ul>
                                    <li className="current_page_item"><a href="index.html">Home</a></li>
                                    <li><a href="right-sidebar.html">Catalog</a></li>
                                    <li><a href="left-sidebar.html">Blog</a></li>
                                    <li><a href="no-sidebar.html">About</a></li>
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