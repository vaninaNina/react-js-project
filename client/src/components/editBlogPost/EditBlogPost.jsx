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
    dataService.getBlogPost(blogPostId).then((result) => {
      setBlogPost(result);
    });
  }, [blogPostId]);

  const editBlogPostSubmitHandler = async (e) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await dataService.editBlogPost(blogPostId, blogPost);
      navigate(`/blogPost/${blogPostId}`);
    } catch (err) {
      console.log(err);
      // alert(err);
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
          value={blogPost.title}
          onChange={onChange}
          required
        />

        <label htmlFor="text">Text:</label>
        <input
          type="text"
          id="text"
          name="text"
          value={blogPost.text}
          onChange={onChange}
          required
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={blogPost.author}
          onChange={onChange}
          required
        />

        <label htmlFor="nft-img">Image:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={blogPost.imageUrl}
          onChange={onChange}
          placeholder="Place the URL image..."
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditBlogPost;
