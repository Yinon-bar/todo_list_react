import User from "../../Users/User";
import Timer from "../../Dashboard/Timer/Timer";
import "./Users.css";

function Users() {
  return (
    <div className="Users">
      <h1>Users</h1>
      {/* Users */}
      <User />
      {/* Timer */}
      <Timer />
    </div>
  );
}

export default Users;
