import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import * as nftService from "../../services/nftService.js";
import AuthContext from "../../context/authContext.jsx";
import "../post/post.css";

const Post = () => {
  const { postId } = useParams();
  const [data, setData] = useState({});
  const { email, userId } = useContext(AuthContext);
  const getPost = async () => {
    const response = await nftService.getOne(postId);
    setData(response);
  };
  useEffect(() => {
    getPost();
  }, []);
  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete ${postId.title}`,
    );

    if (hasConfirmed) {
      await nftService.remove(nftId);

      navigate("/nfts");
    }
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

      {/* {userId === postId._ownerId ? ( */}
      <div>
        <button className="button">
          <Link to={`/post/:postId/edit`} className="button">
            Edit
          </Link>
        </button>

        <button className="button" onClick={deleteButtonClickHandler}>
          Delete
        </button>
      </div>
      {/* ) : null} */}
    </div>
  );
};

export default Post;
