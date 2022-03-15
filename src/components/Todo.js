import DeleteIcon from "@mui/icons-material/Delete";
import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import "../App.scss";
const Todo = ({ arr }) => {
  return (
    <div>
      <div className="todoList">
        <div>{arr.item.todo}</div>
        <DeleteIcon
          fontSize="large"
          style={{ opacity: 0.7 }}
          aria-label="delete task"
          onClick={() => {
            deleteDoc(doc(db, "todos", arr.id));
          }}
        />
      </div>
    </div>
  );
};
export default Todo;
