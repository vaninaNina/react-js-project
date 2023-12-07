import "../createBlogPost/create.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as dataService from "../../services/dataService.js";

const CreateBlogPost = () => {
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleImageUrlChange = (event) => {
    const url = event.target.value;
    setImageUrl(url);
    setPreviewUrl(url);
  };

  const createBlogPostSubmitHandler = async (e) => {
    e.preventDefault();

    // { title, description, price, releaseDate, author, imageUrl } - nftData
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await dataService.createBlogPost(data);
      navigate("/blogPost");
    } catch (err) {
      console.log(err);
      // alert(err);
    }
  };

  return (
    <div className="container">
      <h2>Create Blog Post</h2>
      <form onSubmit={createBlogPostSubmitHandler}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="description">Text:</label>
        <textarea id="text" name="text" required></textarea>

        <label htmlFor="author">Author:</label>
        <input type="text" id="author" name="author" required />

        <label htmlFor="nft-img">Image:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={imageUrl}
          onChange={handleImageUrlChange}
          placeholder="Place the URL image..."
        />
        {previewUrl && (
          <div>
            <p>Image Preview:</p>
            <img src={previewUrl} alt="Preview" style={{ maxWidth: "100%" }} />
          </div>
        )}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateBlogPost;
