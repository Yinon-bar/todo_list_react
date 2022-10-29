import "./User.css";

function User(props) {
  console.log(props.data.id);
  return (
    <div className="User">
      <h3>User ID {props.data.id}</h3>
      <h3>Name: {props.name}</h3>
      <h3>Address: {props.data.address.city}</h3>
    </div>
  );
}

export default User;
