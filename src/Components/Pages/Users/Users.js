import { useState, useEffect } from "react";

import User from "../../Users/User";
import Timer from "../../Dashboard/Timer/Timer";
import "./Users.css";

function Users() {
  let [users, setUsers] = useState([]);
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        setError(resp.status);
        throw resp.status;
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);

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
    <div className="Users">
      <h1>Users</h1>
      {users.map((tObj) => (
        <User name={tObj.name} key={tObj.id} data={tObj} />
      ))}
      {/* Timer */}
      <Timer />
    </div>
  );
}

export default Users;
