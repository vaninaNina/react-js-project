const BlogPost = ({ img, title, text }) => {
  return (
    <div className="6u">
      <section className="box">
        <a href="#" className="image image-full">
          <img src="images/pic08.jpg" alt="" />
        </a>
        <header>
          <h3>
            Navigating the NFT Revolution: A Beginner's Guide to Non-Fungible
            Tokens
          </h3>
          {/* <span className="byline">Posted 45 minutes ago</span> */}
        </header>
        <p>
          In recent years, a technological wave has transformed the way we
          perceive and trade digital assets, and at the forefront of this
          revolution are Non-Fungible Tokens (NFTs). NFTs have gained
          unprecedented popularity, captivating the art, entertainment, and
          gaming industries. Let's delve into the world of NFTs, exploring what
          they are, how they work, and why they've become a game-changer in the
          digital landscape. Understanding NFTs: NFTs are unique digital assets
          that represent ownership or proof of authenticity of a specific item
          or piece of content, typically stored on a blockchain. Unlike
          cryptocurrencies such as Bitcoin or Ethereum, which are fungible and
          can be exchanged on a one-to-one basis, NFTs are indivisible and
          cannot be replicated.In conclusion, NFTs represent a paradigm shift in
          the digital economy, offering creators new ways to monetize their work
          and buyers unique opportunities to own and trade digital assets. As
          the technology continues to mature, the impact of NFTs on various
          industries is likely to deepen, making them a fascinating and
          transformative force in the world of digital ownership.
        </p>
        <footer className="actions">
          <a href="/blog" className="button button-icon button-icon-1">
            Continue Reading
          </a>
        </footer>
      </section>
    </div>
  );
};
