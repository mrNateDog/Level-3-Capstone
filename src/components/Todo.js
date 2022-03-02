import ListGroup from "react-bootstrap/ListGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import "./todo.css";
const Todo = ({ arr }) => {
  return (
    <div>
      <ListGroup className="todoList" variant="flush">
        <ListGroup.Item>
          {arr.item.todo}
          <DeleteIcon
            fontSize="large"
            style={{ opacity: 0.7 }}
            aria-label="delete task"
            onClick={() => {
              deleteDoc(doc(db, "todos", arr.id));
            }}
          />
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};
export default Todo;
