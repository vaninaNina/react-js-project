import DescriptionCard from "./subcomponents/description_card.jsx";
import NftCard from "./subcomponents/ntf_card.jsx";

const MainPage = () => {
  let i = 0;
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
                  key={item.title}
                  title={item.title}
                  badgeClass={item.badgeClass}
                  iconClass={item.iconClass}
                  description={item.description}
                />
              ))}
            </div>
          </div>
          <div className="actions">
            <a href="/nfts" className="button button-big">
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
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              ))}
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
                    <h3>
                      Navigating the NFT Revolution: A Beginner's Guide to
                      Non-Fungible Tokens
                    </h3>
                    {/* <span className="byline">Posted 45 minutes ago</span> */}
                  </header>
                  <p>
                    In recent years, a technological wave has transformed the
                    way we perceive and trade digital assets, and at the
                    forefront of this revolution are Non-Fungible Tokens (NFTs).
                    NFTs have gained unprecedented popularity, captivating the
                    art, entertainment, and gaming industries. Let's delve into
                    the world of NFTs, exploring what they are, how they work,
                    and why they've become a game-changer in the digital
                    landscape. Understanding NFTs: NFTs are unique digital
                    assets that represent ownership or proof of authenticity of
                    a specific item or piece of content, typically stored on a
                    blockchain. Unlike cryptocurrencies such as Bitcoin or
                    Ethereum, which are fungible and can be exchanged on a
                    one-to-one basis, NFTs are indivisible and cannot be
                    replicated.In conclusion, NFTs represent a paradigm shift in
                    the digital economy, offering creators new ways to monetize
                    their work and buyers unique opportunities to own and trade
                    digital assets. As the technology continues to mature, the
                    impact of NFTs on various industries is likely to deepen,
                    making them a fascinating and transformative force in the
                    world of digital ownership.
                  </p>
                  <footer className="actions">
                    <a href="#" className="button button-icon button-icon-1">
                      Continue Reading
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
                    <h3>
                      The Rise of NFTs in the Art World: Revolutionizing
                      Ownership and Creativity
                    </h3>
                    {/* <span className="byline">Posted 45 minutes ago</span> */}
                  </header>
                  <p>
                    The art world is experiencing a revolution, and at the heart
                    of it is the rise of Non-Fungible Tokens (NFTs). These
                    digital tokens have disrupted traditional notions of art
                    ownership and proven to be a game-changer for both artists
                    and collectors. Let's explore how NFTs are reshaping the art
                    market, offering new possibilities and challenges.NFTs have
                    opened up unprecedented opportunities for digital artists
                    who, in the past, struggled to monetize their work. By
                    tokenizing digital art, creators can sell their pieces
                    directly to a global audience, breaking down geographical
                    barriers and reaching collectors who appreciate the unique
                    nature of digital creations.While the NFT art market has
                    seen tremendous success, it has not been without its share
                    of challenges and criticisms. Environmental concerns related
                    to the energy consumption of blockchain networks, issues of
                    copyright infringement, and the potential for market
                    manipulation are some of the hurdles that the NFT art space
                    is actively addressing. In conclusion, NFTs have ushered in
                    a new era for the art world, transforming the way we create,
                    buy, and sell digital art. As the technology continues to
                    evolve, the impact of NFTs on the art market is likely to
                    grow, offering exciting possibilities for artists,
                    collectors, and art enthusiasts alike.
                  </p>
                  <footer className="actions">
                    <a href="#" className="button button-icon button-icon-1">
                      Continue Reading
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
