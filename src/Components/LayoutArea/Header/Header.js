import "./Header.css";
import img from "../../../Assets/img/react icon final.png";

function Header() {
  return (
    <div className="Header">
      <img src={img} alt="" />
      <h1>React Todo List</h1>
    </div>
  );
}

export default Header;
