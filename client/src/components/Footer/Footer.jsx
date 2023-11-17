const Footer = () => {
  return (
    <div id="footer-wrapper">
      <section id="footer" className="5grid-layout">
        <div className="row">
          <div className="8u">
            <section>
              <header>
                <h2>Next Release</h2>
              </header>
              <ul className="dates">
                <li>
                  <span className="date">
                    Dec <strong>22</strong>
                  </span>
                  <h3>
                    <a href="#">Lorem dolor sit amet veroeros</a>
                  </h3>
                  <p>
                    Ipsum dolor sit amet veroeros consequat blandit ipsum
                    phasellus lorem consequat etiam.
                  </p>
                </li>
              </ul>
            </section>
          </div>
          <div className="4u">
            <section>
              <header>
                <h2>What's this all about?</h2>
              </header>
              <p>
                On 22 of December, we will launch the newest NFT colletion in
                the OpenSea market. Here you have the opportunity to review the
                colletion and choose the NFT(s) in which you want to invest.
              </p>
              <footer>
                <p>Footer</p>
              </footer>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
