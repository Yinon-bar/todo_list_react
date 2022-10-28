import AddTask from "../../Dashboard/AddTask/AddTask";
import Tasks from "../../Dashboard/Task/Tasks";
import TaskCounter from "../../Dashboard/TaskCounter/TaskCounter";
import Timer from "../../Dashboard/Timer/Timer";
import Welcome from "../../Dashboard/Welcome/Welcome";
import User from "../../Users/User";
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

      {/* Users */}
      <User />

      {/* Timer */}
      <Timer />
    </div>
  );
}

export default Main;
