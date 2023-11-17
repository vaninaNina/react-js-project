import React from "react";

const NftCard = ({ title, description, image }) => {
  return (
    <div className="4u">
      <section className="box">
        <a href="#" className="image image-full">
          <img src={image} alt="" />
        </a>
        <header>
          <h3>{title}</h3>
        </header>
        <p>{description}</p>
        <footer>
          <a href="/catalog" className="button button-alt">
            Find out more
          </a>
        </footer>
      </section>
    </div>
  );
};

export default NftCard;
