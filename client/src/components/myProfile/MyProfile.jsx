import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext.jsx";
import * as dataService from "../../services/dataService.js";

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
        <ul>
          {myBlogPosts.map((blogPost) => (
            <li key={blogPost._id}>{blogPost.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyProfile;
