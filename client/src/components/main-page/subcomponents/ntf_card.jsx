import React from "react";
import { Link } from "react-router-dom";
import "../subcomponents/nft_card.css";

const NftCard = ({ title, description, img, _id }) => {
  return (
    <div className="4u" _id={_id}>
      <section className="box">
        <a href="#" className="image">
          <img src={img} alt="" />
        </a>
        <header>
          <h3>{title}</h3>
        </header>
        <p className="description">{description}</p>
        <footer>
          <Link to={`/post/${_id}`} className="button">
            More details
          </Link>
        </footer>
      </section>
    </div>
  );
};

export default NftCard;
