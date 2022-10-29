import "./Task.css";

function Task(prop) {
  console.log(prop.data.id);
  return (
    <div className="Task">
      <h4>Task ID: {prop.data.id}</h4>
      <p>{prop.data.title}</p>
      <button>Completed</button>
    </div>
  );
}

export default Task;
