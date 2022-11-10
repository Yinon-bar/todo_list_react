import useForm from "../../../Services/useForm";
import "./PostAdd.css";

function PostAdd() {
  useForm();

  return (
    <div className="PostAdd">
      <form>
        <label>
          Enter text
          <input type="text" />
        </label>
      </form>
    </div>
  );
}

export default PostAdd;
