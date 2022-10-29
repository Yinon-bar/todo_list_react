import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Todo from "../../Pages/Todo/Todo";
import Users from "../../Pages/Users/Users";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";

function Routing() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/users" element={<Users />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Routing;
