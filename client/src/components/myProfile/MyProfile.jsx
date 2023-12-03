import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext.jsx";
import * as dataService from "../../services/dataService.js";
import BlogPost from "../main-page/subcomponents/main_blog_post.jsx";
import "./myProfileStyle.css";

const MyProfile = () => {
  const { userId } = useContext(AuthContext);
  const [myBlogPosts, setMyBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await dataService.getAllBlogPosts();

        const userPosts = response.filter(
          (blogPost) => blogPost._ownerId === userId,
        );

        setMyBlogPosts(userPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, [userId]);

  return (
    <div>
      <h1>My Blog Posts</h1>

      {myBlogPosts.length <= 0 ? (
        <p>Empty record</p>
      ) : (
        <section>
          <ul>
            {myBlogPosts.map((blogPost) => (
              <BlogPost
                key={blogPost._id}
                title={blogPost.title}
                text={blogPost.text}
                blogPostId={blogPost._id}
              />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default MyProfile;
