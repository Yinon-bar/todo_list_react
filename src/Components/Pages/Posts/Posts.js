import appconfig from "../../../Config/appConfig";
import useFetch from "../../../Services/useFetch";
import PostsList from "../../PostsArea/PostsList/PostsList";
import "./Posts.css";

function Posts() {
  const [posts, error, loading] = useFetch(appconfig.posts);

  console.log(posts);

  return (
    <div className="Posts">
      <h1>Posts</h1>
      <hr />
      <PostsList posts={posts} />
    </div>
  );
}

export default Posts;
