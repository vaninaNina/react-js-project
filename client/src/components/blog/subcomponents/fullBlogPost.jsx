import { useEffect, useState, useContext, useReducer } from "react";
import { useParams, Link } from "react-router-dom";
import * as dataService from "../../../services/dataService.js";
import AuthContext from "../../../context/authContext.jsx";
import * as commentService from "../../../services/commentService.js";
import useForm from "../../../hooks/useForm.js";
import reducer from "../commentReducer.js";
import "../subcomponents/styleBlogPost.css";

const FullBlogPost = () => {
  const { blogPostId } = useParams();
  const [data, setData] = useState({});
  const { email, userId, isAuthenticated } = useContext(AuthContext);
  const [comments, dispatch] = useReducer(reducer, []);

  const getData = async () => {
    const data = await dataService.getBlogPost(blogPostId);
    const existingComments = await commentService.getAll(blogPostId);
    dispatch({
      type: "GET_ALL_COMMENTS",
      payload: existingComments,
    });
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const addCommentHandler = async (values) => {
    const newComment = await commentService.create(blogPostId, values.comment);

    newComment.owner = { email };

    dispatch({
      type: "ADD_COMMENT",
      payload: newComment,
    });
  };

  const deleteHandler = async (values) => {
    await commentService.del(blogPostId, values.comment);
  };

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete ${data.title}`,
    );

    if (hasConfirmed) {
      try {
        await dataService.del(blogPostId);
        navigate("/blogPost");
      } catch (err) {
        console.log(err);
        alert(`Error: ${err}`);
      }
    }
  };

  const { values, onChange, onSubmit } = useForm(addCommentHandler, {
    comment: "",
  });

  return (
    <div className="container">
      <img src={`../${data.img}`} alt="Blog Post Image" />
      <h2>{data.title}</h2>
      <p>{data.text}</p>
      <p className="author">Author Name: {data.author}</p>

      {userId === data._ownerId ? (
        <div className="buttons" style={{ gap: "0.4em" }}>
          <Link to={`/blogPost/${data._id}/edit`} className="button">
            Edit
          </Link>

          <Link
            to={"/blogPost"}
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
              <button onSubmit={deleteHandler}>Delete comment</button>
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

export default FullBlogPost;
