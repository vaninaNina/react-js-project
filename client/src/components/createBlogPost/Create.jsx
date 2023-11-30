import "../createBlogPost/create.css";

import { useNavigate } from "react-router-dom";
import * as dataService from "../../services/dataService.js";

const CreateBlogPost = () => {
  const navigate = useNavigate();

  const createBlogPostSubmitHandler = async (e) => {
    e.preventDefault();

    // { title, description, price, releaseDate, author, imageUrl } - nftData
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await dataService.createBlogPost(data);
      navigate("/blogPost");
    } catch (err) {
      console.log(err);
      alert(err);
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
          placeholder="Place the URL image..."
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateBlogPost;
