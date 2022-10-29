import { useState } from "react";
import { useEffect } from "react";
import Task from "../Task/Task";

import "./Tasks.css";

function Tasks() {
  let [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((resp) =>
      resp.json().then((data) => setTasks(data))
    );
  }, []);

  return (
    <div className="Tasks">
      {console.log(tasks)}
      {tasks.map((tObj) => (
        <Task key={tObj.id} data={tObj} />
      ))}
    </div>
  );
}

export default Tasks;
