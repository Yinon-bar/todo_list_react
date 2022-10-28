import { useState } from "react";
import "./Timer.css";

function Timer() {
  let [time, setTime] = useState("");

  let isWork = false;

  let inon = "inon";

  const startWork = () => {
    isWork = true;
    setTime(new Date().toLocaleTimeString());
    console.log("isWork: " + isWork, "Time: " + time);
  };

  return (
    <div className="Timer">
      {isWork && <h5>Working...</h5>}
      <h3>Time: {time}</h3>
      <button onClick={startWork} className="btn">
        Start
      </button>
    </div>
  );
}

export default Timer;
