import "../createNft/create.css";

import { useNavigate } from "react-router-dom";
import * as nftService from "../../services/nftService.js";

const Create = () => {
  const navigate = useNavigate();

  const createNftSubmitHandler = async (e) => {
    e.preventDefault();

    // { title, description, price, releaseDate, author, imageUrl } - nftData
    const nftData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await nftService.create(nftData);
      navigate("/nfts");
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  return (
    <div className="container">
      <h2>Create Blog Post</h2>
      <form onSubmit={createNftSubmitHandler}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          required
        ></textarea>

        <label htmlFor="price">Price Floor:</label>
        <input type="number" id="price" name="priceFloor" step="0.1" required />

        {/* <label htmlFor="releaseDate">Release Date:</label>
        <input type="date" id="releaseDate" name="releaseDate" required /> */}

        <label htmlFor="author">Author:</label>
        <input type="text" id="author" name="author" required />

        <label htmlFor="nft-img">Image:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          placeholder="Place the URL image..."
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
