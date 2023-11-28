const BlogPost = ({ img, title, text }) => {
  return (
    <div className="6u">
      <section className="box">
        <a href="#" className="image image-full">
          <img src={img} alt="" />
        </a>
        <header>
          <h3>{title}</h3>
          {/* <span className="byline">Posted 45 minutes ago</span> */}
        </header>
        <p>{text.slice(50)}</p>
        <footer className="actions">
          <a href="/blog" className="button button-icon button-icon-1">
            Continue Reading
          </a>
        </footer>
      </section>
    </div>
  );
};

export default BlogPost;
