import PostCard from "../PostCard/PostCard";
import "./PosstList.css";

function PostsList({ posts }) {
  return (
    <div className="PostsList">
      {console.log(posts)}
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
fhgrth;

export default PostsList;
