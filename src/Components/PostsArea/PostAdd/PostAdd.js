import axios from "axios";
import { useState } from "react";
import appconfig from "../../../Config/appConfig";
import "./PostAdd.css";

function PostAdd() {
  const [title, setTitle] = useState("");
  const sendNewPost = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("User id", 1);
    let data = Object.fromEntries(formData);
    console.log(data);

    // Post to the server
    axios
      .post(appconfig.posts, data)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="PostAdd">
      <form onSubmit={sendNewPost}>
        <label>
          Enter post title
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            name="title"
          />
        </label>
        <span>{title}</span>
        <br />
        <label>
          Enter post body
          <textarea
            name="body"
            defaultValue="This is the body of the post and it will show on the next post"
            rows="4"
          ></textarea>
        </label>
        <br />
        <button type="submit">Save post</button>
      </form>
    </div>
  );
}

export default PostAdd;
