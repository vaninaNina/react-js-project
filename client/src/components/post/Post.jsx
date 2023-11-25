import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as nftService from "../../services/nftService.js";
import "../post/post.css";

const Post = () => {
  const { postId } = useParams();
  const [data, setData] = useState({});
  const getPost = async () => {
    const response = await nftService.getOne(postId);
    setData(response);
  };
  useEffect(() => {
    getPost();
  }, []);

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
    </div>
  );
};

export default Post;
