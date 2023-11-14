

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
                <div className="row">
                    <div className="12u">
                        <section id="banner"> <a href="#"> <span className="image image-full"><img src="images/pic01.jpg" alt="" /></span>
                            <header>
                                <h2>Howdy. This is Dopetrope.</h2>
                                <span className="byline">Welcome to the Dopetrope NFT world!</span> </header>
                        </a> </section>
                    </div>
                </div>
                <div className="row">
                    <div className="12u">
                        <section id="intro">
                            <div className="5grid">
                                <div className="row">
                                    <div className="4u">
                                        <section className="first"> <span className="pennant"><span className="icon64 icon64-1"></span></span>
                                            <header>
                                                <h2>Purpose</h2>
                                            </header>
                                            <p>The aim of the DopeTrope NTF world is to share the newest NFT pieces. You can find the information about the price and the release date so you can prepare to deep-dive into this NTF world and invest in unique art pieces.</p>
                                        </section>
                                    </div>
                                    <div className="4u">
                                        <section className="middle"> <span className="pennant pennant-alt"><span className="icon64 icon64-2"></span></span>
                                            <header>
                                                <h2>Find your piece(s)</h2>
                                            </header>
                                            <p>We have a large collection of art NTF pieces from which you can choose the one that is most aligned to your personality.</p>
                                        </section>
                                    </div>
                                    <div className="4u">
                                        <section className="last"> <span className="pennant pennant-alt2"><span className="icon64 icon64-3"></span></span>
                                            <header>
                                                <h2>Share your art</h2>
                                            </header>
                                            <p>You have the opportunity to share your art - you need only to log into your account and create a new post which will be added to our catalog. </p>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div className="actions"> <a href="#" className="button button-big">Get Started</a> </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;