import axios from "axios";
import appconfig from "../../../Config/appConfig";
import "./PostAdd.css";

function PostAdd() {
  const sendNewPost = (event) => {
    event.preventDefault();
    // const elements = event.target.elements;
    // const title = elements.title.value;
    // const body = elements.body.value;
    // console.log(title, body);

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
          <input type="text" name="title" defaultValue="The Title" />
        </label>
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
