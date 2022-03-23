import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

class LogoutBar extends React.Component {
  render() {
    const removeToken = (isAuthenticated) => {
      localStorage.removeItem("access_token");
      console.log("signed out");
      console.log(navigate);
      navigate("/app", { replace: true });
    };
    return (
      <div className="toDoTitle">
        <h3 className="Title">ToDo List</h3>
        <Button className="taskButton" onClick={removeToken}>
          Log Out
        </Button>
      </div>
    );
  }
}
export default LogoutBar;
