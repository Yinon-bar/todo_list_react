import "./PosstList.css";

function PostsList({ posts }) {
  return (
    <div className="PostsList">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <hr />
          <p>{post.body}</p>
        </div>
      ))}
      {console.log(posts)}
    </div>
  );
}

export default PostsList;
