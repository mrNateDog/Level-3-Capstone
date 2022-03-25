import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { db } from "../firebase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import "./todo.scss";
//import "./login_style.scss";

//Task
const Todo = ({ arr }) => {
  return (
    <div className="todoList">
      <CheckIcon
        className="checkMark"
        fontSize="large"
        style={{ opacity: 0.7 }}
        aria-label="Complete Task"
        onClick={() => {
          updateDoc(doc(db, "todos", arr.id), {
            completed: true,
          });
        }}
      />
      <div>{arr.item.todo}</div>
      <DeleteIcon
        id="delete-icon"
        fontSize="large"
        style={{ opacity: 0.7 }}
        aria-label="Delete Task"
        onClick={() => {
          deleteDoc(doc(db, "todos", arr.id));
        }}
      />
    </div>
  );
};
export default Todo;
