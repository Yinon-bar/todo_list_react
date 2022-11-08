import { useParams } from "react-router-dom";
import PostCard from "../PostCard/PostCard";
import "./PosstList.css";

function PostsList({ posts }) {
  const { params } = useParams();
  console.log(params);

  return (
    <div className="PostsList">
      {/* {console.log(posts)} */}
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostsList;
