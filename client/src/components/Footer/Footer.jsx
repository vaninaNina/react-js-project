const Footer = () => {
  return (
    <div id="footer-wrapper">
      <section id="footer" className="5grid-layout">
        <div className="row">
          <div className="8u">
            <section>
              <header>
                <h2>Blandit nisl adipiscing</h2>
              </header>
              <ul className="dates">
                <li>
                  <span className="date">
                    Jan <strong>27</strong>
                  </span>
                  <h3>
                    <a href="#">Lorem dolor sit amet veroeros</a>
                  </h3>
                  <p>
                    Ipsum dolor sit amet veroeros consequat blandit ipsum
                    phasellus lorem consequat etiam.
                  </p>
                </li>
                <li>
                  <span className="date">
                    Jan <strong>23</strong>
                  </span>
                  <h3>
                    <a href="#">Ipsum sed blandit nisl consequat</a>
                  </h3>
                  <p>
                    Blandit phasellus lorem ipsum dolor tempor sapien tortor
                    hendrerit adipiscing feugiat lorem.
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
              <a href="#" className="image image-full">
                <img src="images/pic10.jpg" alt="" />
              </a>
              <p>
                This is Dopetrope a free, fully responsive HTML5 site template
                by AJ for HTML5 Up! It's released for free under the CCA license
                so feel free to use it for any personal or commercial project
                &ndash; just don't forget to credit us! <strong>PS:</strong> The
                awesome placeholder artwork used in this design is courtesy of
                Dreametry Doodle.
              </p>
              <footer>
                <a href="#" className="button">
                  Find out more
                </a>
              </footer>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
