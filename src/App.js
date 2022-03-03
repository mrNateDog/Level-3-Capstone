import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./App.css";
import Todo from "./components/Todo";
import { db } from "./firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

//collection ref, order by functionality
const q = query(collection(db, "todos"), orderBy("timestamp", "desc"));

//firebase functionality
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, [input]);
  const addTodo = (e) => {
    e.preventDefault();
    addDoc(collection(db, "todos"), {
      todo: input,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="App">
      <h4>Add a Task</h4>
      <Form>
        <InputGroup className="mb-3">
          <Form.Control
            id="outlined-basic"
            type="text"
            variant="outline-secondary"
            size="lg"
            placeholder="Task Description"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="outline-secondary" type="submit" onClick={addTodo}>
            Add Task
          </Button>
        </InputGroup>
      </Form>
      <ul>
        {todos.map((item) => (
          <Todo key={item} arr={item} />
        ))}
      </ul>
      <br></br>
      <h6>
        you have <a variant="alert-danger">{todos.length}</a> items left to
        complete.
      </h6>
    </div>
  );
}
export default App;
