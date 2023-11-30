import "../createBlogPost/create.css";

import { useNavigate, useParams } from "react-router-dom";
import * as dataService from "../../services/dataService.js";
import { useEffect, useState } from "react";

const EditBlogPost = () => {
  const navigate = useNavigate();
  const { blogPostId } = useParams();
  const [blogPost, setBlogPost] = useState({
    title: "",
    text: "",
    author: "",
    img: "",
  });

  useEffect(() => {
    dataService.getBlogPost(blogPostId).then(
      (result) => {
        setBlogPost(result);
      },
      [blogPostId],
    );
  });

  const editBlogPostSubmitHandler = async (e) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await dataService.editBlogPost(blogPostId, values);
      navigate("/blogPost");
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  const onChange = (e) => {
    setBlogPost((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="container">
      <h2>Edit Blog Post</h2>
      <form onSubmit={editBlogPostSubmitHandler}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={values.title}
          onChange={onChange}
          required
        />

        <label htmlFor="text">Text:</label>
        <input
          type="text"
          id="text"
          name="text"
          value={values.text}
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

export default EditBlogPost;
