import AddTask from "../../Dashboard/AddTask/AddTask";
import Tasks from "../../Dashboard/Task/Tasks";
import TaskCounter from "../../Dashboard/TaskCounter/TaskCounter";
import Welcome from "../../Dashboard/Welcome/Welcome";
import "./Main.css";

function Main() {
  return (
    <div className="Main">
      <Welcome name="Meir" />

      {/* conditional rendering */}

      <TaskCounter />

      {/* Lists */}
      <Tasks />

      {/* Event */}
      <AddTask />
    </div>
  );
}

export default Main;
