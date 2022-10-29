import Welcome from "../../Dashboard/Welcome/Welcome";
import TaskCounter from "../../Dashboard/TaskCounter/TaskCounter";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <h1>Home</h1>
      <Welcome name="Meir" />
      <TaskCounter />
    </div>
  );
}

export default Home;
