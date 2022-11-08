import { useParams } from "react-router-dom";
import appconfig from "../../../Config/appConfig";
import useFetch from "../../../Services/useFetch";
import "./PostSingle.css";

function PostSingle(props) {
  console.log(props.posts);
  const { id } = useParams();
  console.log(id);

  const [post, error, loading] = useFetch(appconfig.posts + id);

  return (
    <div className="PostSingle">
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
}

export default PostSingle;
