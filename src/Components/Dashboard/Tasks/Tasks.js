import appconfig from "../../../Config/appConfig";
import useFetch from "../../../Services/useFetch";
import Task from "../Task/Task";

import "./Tasks.css";

function Tasks() {
  const [tasks, error, loading] = useFetch(appconfig.todos);

  // let [tasks, setTasks] = useState([]);
  // let [error, setError] = useState(false);
  // let [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((resp) => {
  //       if (resp.ok) {
  //         return resp.json();
  //       }
  //       setError(resp.status);
  //       throw resp.status;
  //     })
  //     .then((data) => {
  //       setTasks(data);
  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 1000);
  //     });
  // }, []);

  if (error) {
    return (
      <>
        <h1>Error!</h1>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <h3>Loading...</h3>
      </>
    );
  }

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
