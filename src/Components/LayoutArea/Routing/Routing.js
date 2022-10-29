import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Todo from "../../Pages/Todo/Todo";
import Users from "../../Pages/Users/Users";

function Routing() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

export default Routing;
