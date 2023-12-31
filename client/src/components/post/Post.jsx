import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import * as nftService from "../../services/nftService.js";
import * as likesService from "../../services/likesService.js";
import AuthContext from "../../context/authContext.jsx";
import "../post/post.css";
import { post } from "../../lib/requests.js";

const Post = () => {
  const { postId } = useParams();
  const [data, setData] = useState({});
  const { email, userId, isAuthenticated } = useContext(AuthContext);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [userLike, setUserLike] = useState(null);

  const getPost = async () => {
    const response = await nftService.getOne(postId);
    setData(response);
  };

  const getLikesList = async () => {
    const likesArray = await likesService.getAll(postId);
    const like = likesArray.findIndex((like) => like._ownerId === userId);
    setUserLike(likesArray[like] || null);
    setLikes(likesArray.length || 0);
    setHasLiked(like === -1 ? false : true);
  };

  useEffect(() => {
    getPost();
    getLikesList();
  }, []);

  const handleLike = async () => {
    if (!isAuthenticated) {
      return;
    }

    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);

      await likesService.removeLike(userLike._id);
      setUserLike(null);
    } else {
      await likesService.addLike(postId);
      await getLikesList();
    }
  };

  return (
    <div className="post">
      {/*     <img src={data.img} alt="Post Image" /> */}
      <a href="#" className="image image-full">
        {/*   */}
        <img src={data.imageUrl} alt="" />
      </a>
      <h1 className="title">{data.title}</h1>
      <p className="author">Author: {data["author_name"]}</p>
      <p className="description">{data.description}</p>
      <p className="floor-price">Floor Price: {data["floor_price"]} ETH </p>

      {userId ? (
        // <div className="buttons" >
        <button
          onClick={handleLike}
          className="button"
          style={{ gap: "0.4em" }}
        >
          Likes {likes}
        </button>
      ) : /* <button onClick={handleDislike} className="button">
            Dislikes {dislikes}
          </button> */
      // </div>
      null}
    </div>
  );
};

export default Post;
