import React from "react";
import { Link } from "react-router-dom";

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
          <Link to={`/post/${_id}`} className="button button-alt">
            More details
          </Link>
        </footer>
      </section>
    </div>
  );
};

export default NftCard;
