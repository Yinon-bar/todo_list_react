import { Navigate, useNavigate, useParams } from "react-router-dom";
import appconfig from "../../../Config/appConfig";
import useFetch from "../../../Services/useFetch";
import "./PostSingle.css";

function PostSingle({ posts }) {
  console.log(posts);
  const { id } = useParams();

  const navigate = useNavigate();

  const selectedPost = posts.filter((evalPost) => evalPost.id === +id)[0];
  // console.log(selectedPost);

  if (!posts) {
    navigate("/posts");
  }

  const [comments] = useFetch(appconfig.posts + id + "/comments");
  return (
    <div className="PostSingle">
      <h4>{selectedPost.title}</h4>
      <p>{selectedPost.body}</p>
      {comments.length && (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <b>{comment.name}</b> - {comment.body}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostSingle;
