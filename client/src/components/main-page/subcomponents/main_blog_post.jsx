import { Link } from "react-router-dom";

const BlogPost = ({ img, title, text, _id }) => {
  return (
    <div className="6u">
      <section className="box">
        <a href="#" className="image image-full">
          <img src={img} alt="" />
        </a>
        <header>
          <h3>{title}</h3>
        </header>
        <p>{text}</p>
        <footer className="actions">
          <Link
            to={`/blogPost/${_id}`}
            className="button button-icon button-icon-1"
          >
            Continue Reading
          </Link>
        </footer>
      </section>
    </div>
  );
};

export default BlogPost;
