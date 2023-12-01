import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import * as nftService from "../../services/nftService.js";
import AuthContext from "../../context/authContext.jsx";
import "../post/post.css";

const Post = () => {
  const { postId } = useParams();
  const [data, setData] = useState({});
  const { email, userId, isAuthenticated } = useContext(AuthContext);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  const getPost = async () => {
    const response = await nftService.getOne(postId);
    setData(response);
  };
  useEffect(() => {
    getPost();
  }, []);

  const handleLike = () => {
    if (!hasLiked && isAuthenticated) {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const handleDislike = () => {
    if (hasLiked && isAuthenticated) {
      setLikes(likes - 1);
      setHasLiked(false);
    }
    setDislikes(dislikes + 1);
  };

  return (
    <div className="post">
      {/*     <img src={data.img} alt="Post Image" /> */}
      <a href="#" className="image image-full">
        <img src={`../${data.img}`} alt="" />
      </a>
      <h1 className="title">{data.title}</h1>
      <p className="author">Author: {data["author_name"]}</p>
      <p className="description">{data.description}</p>
      <p className="floor-price">Floor Price: {data["floor_price"]} ETH </p>

      {userId ? (
        <div className="buttons" style={{ gap: "0.4em" }}>
          <button onClick={handleLike} disabled={hasLiked} className="button">
            Likes {likes}
          </button>
          <button onClick={handleDislike} className="button">
            Dislikes {dislikes}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Post;
