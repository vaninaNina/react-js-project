import React from "react";

const NftCard = ({ title, description, img, _id }) => {
  return (
    <div className="4u" _id={_id}>
      <section className="box">
        <a href="#" className="image image-full">
          <img src={img} alt="" />
        </a>
        <header>
          <h3>{title}</h3>
        </header>
        <p>{description}</p>
        <footer>
          <a href="/catalog" className="button button-alt">
            More details
          </a>
        </footer>
      </section>
    </div>
  );
};

export default NftCard;
