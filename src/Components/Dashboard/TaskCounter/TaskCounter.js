import "./TaskCounter.css";

function TaskCounter() {
  const taskCounter = 150;

  return (
    <div className="TaskCounter">
      {taskCounter > 0 ? (
        <h3>Task counter: {taskCounter}</h3>
      ) : (
        <h3>Good Job! You have no tasks waiting 😎</h3>
      )}

      {/* עוד תנאי מקוצר */}
      {taskCounter >= 150 && (
        <>
          <h4>You have a lot of tasks to complete! keep up... 🤔</h4>
        </>
      )}
    </div>
  );
}

export default TaskCounter;
