import "../createNft/create.css";

import { useNavigate, useParams } from "react-router-dom";
import * as nftService from "../../services/nftService.js";
import { useEffect, useState } from "react";

const EditPost = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [nft, setNft] = useState({
    title: "",
    description: "",
    ["floor_price"]: "",
    ["author_name"]: "",
    img: "",
  });

  useEffect(() => {
    nftService.getOne(postId).then(
      (result) => {
        setNft(result);
      },
      [postId],
    );
  });

  const editNftSubmitHandler = async (e) => {
    e.preventDefault();

    // { title, description, price, author, imageUrl } - nftData
    const values = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await nftService.edit(postId, values);
      navigate("/nfts");
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  const onChange = (e) => {
    setNft((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="container">
      <h2>Edit NFT post</h2>
      <form onSubmit={editNftSubmitHandler}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={nft.title}
          onChange={onChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={nft.description}
          onChange={onChange}
          required
        ></textarea>

        <label htmlFor="price">Price Floor:</label>
        <input
          type="number"
          id="price"
          name="priceFloor"
          step="0.1"
          value={nft["floor_price"]}
          onChange={onChange}
          required
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={nft["author_name"]}
          onChange={onChange}
          required
        />

        <label htmlFor="nft-img">Image:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={nft.img}
          onChange={onChange}
          placeholder="Place the URL image..."
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditPost;