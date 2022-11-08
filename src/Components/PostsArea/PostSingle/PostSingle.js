import { Navigate, useNavigate, useParams } from "react-router-dom";
import appconfig from "../../../Config/appConfig";
import useFetch from "../../../Services/useFetch";
import "./PostSingle.css";

function PostSingle({ posts }) {
  console.log(posts);
  const { id } = useParams();

  const navigate = useNavigate();

  // const [post, error, loading] = useFetch(appconfig.posts + id);
  const selectedPost = posts.filter((evalPost) => evalPost.id === +id)[0];
  console.log(selectedPost);

  if (posts.length && !selectedPost) {
    navigate("/posts");
  }

  if (!posts) {
    return "Loading";
  }

  return (
    <div className="PostSingle">
      <h4>{selectedPost.title}</h4>
      <p>{selectedPost.body}</p>
    </div>
  );
}

export default PostSingle;
