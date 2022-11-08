import { useParams } from "react-router-dom";
import appconfig from "../../../Config/appConfig";
import useFetch from "../../../Services/useFetch";
import "./PostSingle.css";

function PostSingle({ posts }) {
  console.log(posts);
  const { postId } = useParams();
  console.log(postId);

  // const [post, error, loading] = useFetch(appconfig.posts + postId);

  return (
    <div className="PostSingle">
      {/* <h4>{post.title}</h4> */}
      {/* <p>{post.body}</p> */}
    </div>
  );
}

export default PostSingle;
