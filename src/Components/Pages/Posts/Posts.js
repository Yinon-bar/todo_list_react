import { Link, Route, Routes } from "react-router-dom";
import appconfig from "../../../Config/appConfig";
import useFetch from "../../../Services/useFetch";
import PostSingle from "../../PostsArea/PostSingle/PostSingle";
import PostsList from "../../PostsArea/PostsList/PostsList";
import Users from "../Users/Users";
import "./Posts.css";

function Posts() {
  const [posts, error, loading] = useFetch(appconfig.posts);

  // console.log(posts);

  return (
    <div className="Posts">
      <h1>Posts</h1>
      <Link to="/posts/new">Add new post</Link>

      <hr />
      <Routes>
        <Route path="" element={<PostsList posts={posts} />} />
        <Route path=":id" element={<PostSingle />} />
        <Route path="/new" element={<Users />} />
      </Routes>
    </div>
  );
}

export default Posts;
