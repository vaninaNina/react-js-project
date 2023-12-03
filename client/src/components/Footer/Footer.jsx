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
                  <p>
                    On 22 December, we will launch the newest NFT colletion in
                    the OpenSea market. Here you will have the opportunity to
                    review the collection and choose the NFT(s) in which you
                    want to invest.
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
                The Droptrope NFT World is your premier destination for
                discovering a diverse and exquisite collection of NFT art
                created by our talented artists around the world.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
