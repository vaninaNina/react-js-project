import "../../components/blog/blogstyle.css";
import { useEffect, useState } from "react";
import * as dataService from "../../services/dataService.js";
import BlogPostCard from "./subcomponents/blogPostCard.jsx";
import "../blog/blogstyle.css";
const Blog = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await dataService.getAllBlogPosts();
    setData(response);
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row">
      <div className="12u">
        <section>
          <div className="5grid">
            <header className="major">
              <h2>All Blog Posts</h2>
            </header>
            <div className="row">
              <div className="blogPost">
                {data.map((item) => (
                  <BlogPostCard
                    key={item._id}
                    _id={item._id}
                    title={item.title}
                    text={item.text}
                    img={item.imageUrl}
                    author={item.author}
                  />
                ))}
                {/* <span>
                    <a href="#" className="button button-like">
                      Like
                    </a>
                  </span> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
