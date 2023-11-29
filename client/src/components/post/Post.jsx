import { useEffect, useState, useContext, useReducer } from "react";
import { useParams, Link } from "react-router-dom";
import * as nftService from "../../services/nftService.js";
import AuthContext from "../../context/authContext.jsx";
import * as commentService from "../../services/commentService.js";
import useForm from "../../hooks/useForm";
import reducer from "./commentReducer.js";
import "../post/post.css";

const Post = () => {
  const { postId } = useParams();
  const [data, setData] = useState({});
  const { email, userId, isAuthenticated } = useContext(AuthContext);
  const [comments, dispatch] = useReducer(reducer, []);

  const getPost = async () => {
    const response = await nftService.getOne(postId);
    setData(response);
  };
  useEffect(() => {
    getPost();

    commentService.getAll(postId).then((result) => {
      dispatch({
        type: "GET_ALL_COMMENTS",
        payload: result,
      });
    });
  }, [postId]);

  const addCommentHandler = async (values) => {
    const newComment = await commentService.create(postId, values.comment);

    newComment.owner = { email };

    dispatch({
      type: "ADD_COMMENT",
      payload: newComment,
    });
  };

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete ${data.title}`,
    );

    if (hasConfirmed) {
      await nftService.del(postId);

      navigate("/nfts");
    }
  };

  const { values, onChange, onSubmit } = useForm(addCommentHandler, {
    comment: "",
  });

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

      {userId === data._ownerId ? (
        <div className="buttons" style={{ gap: "0.4em" }}>
          <Link to={`/post/${data._id}/edit`} className="button">
            Edit
          </Link>

          <Link
            to={"/nfts"}
            className="button"
            onClick={deleteButtonClickHandler}
          >
            Delete
          </Link>
        </div>
      ) : null}

      <div className="details-comments">
        <h2>Comments:</h2>
        <ul>
          {comments.map(({ _id, text, owner: { email } }) => (
            <li key={_id} className="comment">
              <p>
                {email}: {text}
              </p>
            </li>
          ))}
        </ul>
        {comments.length === 0 && <p className="no-comment">No comments.</p>}
      </div>
      {isAuthenticated ? (
        <article className="create-comment">
          <label>Add new comment:</label>
          <form className="form" onSubmit={onSubmit}>
            <textarea
              name="comment"
              value={values.comment}
              onChange={onChange}
              placeholder="Comment......"
            ></textarea>
            <input className="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>
      ) : null}
    </div>
  );
};

export default Post;
