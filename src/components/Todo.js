import ListGroup from "react-bootstrap/ListGroup";
import CloseButton from "react-bootstrap/CloseButton";
import { db } from "./firebase.js";
import { doc, deleteDoc } from "firebase/firestore";
import "./todo.css";
const Todo = ({ arr }) => {
  return (
    <ListGroup className="todo__list" variant="flush">
      <ListGroup.Item primary={arr.item.todo}></ListGroup.Item>
      <CloseButton
        aria-label="delete task"
        onClick={() => {
          deleteDoc(doc(db, "todos", arr.id));
        }}
      />
    </ListGroup>
  );
};
export default Todo;
