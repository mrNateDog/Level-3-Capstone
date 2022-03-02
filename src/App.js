import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./App.css";
import Todo from "./Todo";
import Register from "./components/Register";
import Login from "./components/login";
import { db } from "./firebase.js";
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

//register and login
function User() {
  return (
    <Router>
      <div className="User">
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Login" component={Login} />
      </div>
    </Router>
  );
}
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
      <h2> Nathan's ToDo List</h2>
      <Form>
        <InputGroup className="mb-3">
          <Form.Control
            id="outlined-basic"
            type="text"
            variant="primary"
            size="lg"
            placeholder="Task Description"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="outline-primary" onClick={addTodo}>
            Add Task
          </Button>
        </InputGroup>
      </Form>
      <ul>
        {todos.map((item) => (
          <Todo key={item} arr={item} />
        ))}
      </ul>
    </div>
  );
}
export default { App, User };
