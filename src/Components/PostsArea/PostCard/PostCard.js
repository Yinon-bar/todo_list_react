import { Link } from "react-router-dom";
import "./PostCard.css";

function PostCard({ post }) {
  return (
    <div className="PostCard">
      <div key={post.id} className="post">
        <h3>{post.title}</h3>
        <hr />
        <p>{post.body}</p>
        <button>
          <Link to={`/posts/${post.id}`}> Read More... </Link>
        </button>
      </div>
    </div>
  );
}

export default PostCard;
