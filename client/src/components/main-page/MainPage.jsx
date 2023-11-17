import DescriptionCard from "./subcomponents/description_card.jsx";
import NftCard from "./subcomponents/ntf_card.jsx";

const MainPage = () => {
  return (
    <div className="row">
      <div className="12u">
        <section id="banner">
          <a href="#">
            <span className="image image-full">
              <img src="images/pic01.jpg" alt="" />
            </span>
            <header>
              <h2>Howdy. This is Dopetrope.</h2>
              <span className="byline">
                Welcome to the Dopetrope NFT world!
              </span>
            </header>
          </a>
        </section>
        <section id="intro">
          <div className="5grid">
            <div className="row">
              {[
                {
                  title: "Purpose",
                  description:
                    "The aim of the DopeTrope NTF world is to share the newest NFT pieces. You can find the information about the price and the release date so you can prepare to deep-dive into this NTF world and invest in unique art pieces.",
                  iconClass: "icon64 icon64-1",
                  badgeClass: "pennant",
                },
                {
                  title: "Find your piece(s)",
                  description:
                    "We have a large collection of art NTF pieces from which you can choose the one that is most aligned to your personality.",
                  iconClass: "icon64 icon64-2",
                  badgeClass: "pennant pennant-alt",
                },
                {
                  title: "Share your art",
                  description:
                    "You have the opportunity to share your art - you need only to log into your account and create a new post which will be added to our catalog.",
                  iconClass: "icon64 icon64-3",
                  badgeClass: "pennant pennant-alt2",
                },
              ].map((item) => (
                <DescriptionCard
                  title={item.title}
                  badgeClass={item.badgeClass}
                  iconClass={item.iconClass}
                  description={item.description}
                />
              ))}
              {/* <DescriptionCard
                title="Purpose"
                badgeClass="pennant"
                iconClass="icon64 icon64-1"
                description="The aim of the DopeTrope NTF world is to share the newest NFT pieces. You can find the information about the price and the release date so you can prepare to deep-dive into this NTF world and invest in unique art pieces."
              />
              <DescriptionCard
                title="Find your piece(s)"
                badgeClass="pennant pennant-alt"
                iconClass="icon64 icon64-2"
                description=" We have a large collection of art NTF pieces from which you can choose the one that is most aligned to your personality."
              />
              <DescriptionCard
                title="Share your art"
                badgeClass="pennant pennant-alt2"
                iconClass="icon64 icon64-3"
                description="You have the opportunity to share your art - you need only to log into your account and create a new post which will be added to our catalog."
              /> */}
            </div>
          </div>
          <div className="actions">
            <a href="#" className="button button-big">
              Get Started
            </a>
          </div>
        </section>

        <section>
          <header className="major">
            <h2>Catalog</h2>
          </header>
          <div className="5grid">
            <div className="row">
              {[
                {
                  title: "Sed etiam lorem nulla",
                  description:
                    "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.",
                  image: "images/pic03.jpg",
                },
                {
                  title: "Consequat et tempus",
                  description:
                    "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.",
                  image: "images/pic04.jpg",
                },
                {
                  title: "Dolore nisl feugiat",
                  description:
                    "Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat veroeros lorem blandit adipiscing et feugiat phasellus tempus dolore ipsum lorem dolore.",
                  image: "images/pic07.jpg",
                },
              ].map((item) => (
                <NftCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              ))}
              {/* <div className="4u">
                <section className="box">
                  <a href="#" className="image image-full">
                    <img src="images/pic03.jpg" alt="" />
                  </a>
                  <header>
                    <h3>Sed etiam lorem nulla</h3>
                  </header>
                  <p>
                    Lorem ipsum dolor sit amet sit veroeros sed amet blandit
                    consequat veroeros lorem blandit adipiscing et feugiat
                    phasellus tempus dolore ipsum lorem dolore.
                  </p>
                  <footer>
                    <a href="/catalog" className="button button-alt">
                      Find out more
                    </a>
                  </footer>
                </section>
              </div>
              <div className="4u">
                <section className="box">
                  <a href="#" className="image image-full">
                    <img src="images/pic04.jpg" alt="" />
                  </a>
                  <header>
                    <h3>Consequat et tempus</h3>
                  </header>
                  <p>
                    Lorem ipsum dolor sit amet sit veroeros sed amet blandit
                    consequat veroeros lorem blandit adipiscing et feugiat
                    phasellus tempus dolore ipsum lorem dolore.
                  </p>
                  <footer>
                    <a href="/catalog" className="button button-alt">
                      Find out more
                    </a>
                  </footer>
                </section>
              </div>
              <div className="4u">
                <section className="box">
                  <a href="#" className="image image-full">
                    <img src="images/pic07.jpg" alt="" />
                  </a>
                  <header>
                    <h3>Dolore nisl feugiat</h3>
                  </header>
                  <p>
                    Lorem ipsum dolor sit amet sit veroeros sed amet blandit
                    consequat veroeros lorem blandit adipiscing et feugiat
                    phasellus tempus dolore ipsum lorem dolore.
                  </p>
                  <footer>
                    <a href="#" className="button button-alt">
                      Find out more
                    </a>
                  </footer>
                </section>
              </div> */}
            </div>
          </div>
        </section>
        <section>
          <header className="major">
            <h2>The Blog</h2>
          </header>
          <div className="5grid">
            <div className="row">
              <div className="6u">
                <section className="box">
                  <a href="#" className="image image-full">
                    <img src="images/pic08.jpg" alt="" />
                  </a>
                  <header>
                    <h3>Magna tempus consequat lorem</h3>
                    <span className="byline">Posted 45 minutes ago</span>
                  </header>
                  <p>
                    Lorem ipsum dolor sit amet sit veroeros sed et blandit
                    consequat sed veroeros lorem et blandit adipiscing feugiat
                    phasellus tempus hendrerit, tortor vitae mattis tempor,
                    sapien sem feugiat sapien, id suscipit magna felis nec elit.
                    className aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos lorem ipsum dolor sit amet.
                  </p>
                  <footer className="actions">
                    <a href="#" className="button button-icon button-icon-1">
                      Continue Reading
                    </a>
                    <a
                      href="#"
                      className="button button-alt button-icon button-icon-2"
                    >
                      comments
                    </a>
                  </footer>
                </section>
              </div>
              <div className="6u">
                <section className="box">
                  <a href="#" className="image image-full">
                    <img src="images/pic09.jpg" alt="" />
                  </a>
                  <header>
                    <h3>Aptent veroeros et aliquam</h3>
                    <span className="byline">Posted 45 minutes ago</span>
                  </header>
                  <p>
                    Lorem ipsum dolor sit amet sit veroeros sed et blandit
                    consequat sed veroeros lorem et blandit adipiscing feugiat
                    phasellus tempus hendrerit, tortor vitae mattis tempor,
                    sapien sem feugiat sapien, id suscipit magna felis nec elit.
                    className aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos lorem ipsum dolor sit amet.
                  </p>
                  <footer className="actions">
                    <a href="#" className="button button-icon button-icon-1">
                      Continue Reading
                    </a>
                    <a
                      href="#"
                      className="button button-alt button-icon button-icon-2"
                    >
                      comments
                    </a>
                  </footer>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
