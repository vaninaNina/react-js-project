import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext.jsx";
import * as dataService from "../../services/dataService.js";
import BlogPost from "../main-page/subcomponents/main_blog_post.jsx";
import "./myProfileStyle.css";

const MyProfile = () => {
  const { userId } = useContext(AuthContext);
  const { email } = useContext(AuthContext);
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
    <div className="boxes">
      <div className="personalDetails">
        <h2>My Personal Information</h2>
        <section>
          <p>{`My email address: ${email}`}</p>
        </section>
      </div>
      <div className="myBlogPosts">
        <h2>My Blog Posts</h2>
        {myBlogPosts.length <= 0 ? (
          <p>Empty record</p>
        ) : (
          <section className="posts">
            <ul>
              {myBlogPosts.map((blogPost) => (
                <BlogPost
                  key={blogPost._id}
                  title={blogPost.title}
                  text={`${blogPost.text.slice(0, 80)}...`}
                  blogPostId={blogPost._id}
                  img={blogPost.imageUrl}
                />
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
