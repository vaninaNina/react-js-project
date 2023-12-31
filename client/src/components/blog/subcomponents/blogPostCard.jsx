import { Link } from "react-router-dom";

const BlogPostCard = ({ img, title, text, _id, author }) => {
  return (
    <article className="box is-post">
      <a href="#" className="image image-full">
        <img src={img} alt="" />
      </a>
      <header>
        <h2>{title}</h2>
        <p>Author: {author}</p>
      </header>
      <p>{text}</p>

      <span>
        <Link to={`/blogPost/${_id}`} className="button button-alt">
          Open Blog Post
        </Link>
      </span>
    </article>
  );
};

export default BlogPostCard;
