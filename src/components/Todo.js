import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";
//import "../App.scss";
//import "./login_style.scss";
const Todo = ({ arr }) => {
  return (
    <div className="todoList">
      <div>{arr.item.todo}</div>
      <DeleteIcon
        id="delete-icon"
        fontSize="large"
        style={{ opacity: 0.7 }}
        aria-label="delete task"
        onClick={() => {
          deleteDoc(doc(db, "todos", arr.id));
        }}
      />
    </div>
  );
};
export default Todo;
