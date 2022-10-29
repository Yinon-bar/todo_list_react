import { NavLink } from "react-router-dom";
import "./Aside.css";

function Aside() {
  return (
    <div className="Aside">
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
    </div>
  );
}

export default Aside;
