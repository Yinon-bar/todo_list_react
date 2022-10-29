import AddTask from "../../Dashboard/AddTask/AddTask";
import Tasks from "../../Dashboard/Task/Tasks";
import "./Todo.css";

function Todo() {
  return (
    <div className="Todo">
      <h1>Todo</h1>
      {/* Lists */}
      <Tasks />

      {/* Event */}
      <AddTask />
    </div>
  );
}

export default Todo;
