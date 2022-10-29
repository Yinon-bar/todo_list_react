import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Todo from "../../Pages/Todo/Todo";

function Routing() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
}

export default Routing;
