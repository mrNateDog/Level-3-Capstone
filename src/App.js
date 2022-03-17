import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./App.scss";
import Todo from "./components/Todo";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

//firebase functionality
function App({ user }) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [lastChange, setLastChange] = useState("");

  //executing the query
  useEffect(() => {
    //console.log(user);
    if (user == null) return;
    var q = query(
      collection(db, "todos"),
      orderBy("timestamp", "desc"),
      where("userId", "==", user.uid)
    );

    onSnapshot(q, (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, [lastChange, user]);

  //add a new task
  const addTodo = (e) => {
    e.preventDefault();
    //add to prevent empty entries
    //console.log(setInput);
    //console.log(lastChange);
    if (input === "") {
      alert("Please enter a task.");
    } else {
      addDoc(collection(db, "todos"), {
        todo: input,
        timestamp: serverTimestamp(),
        userId: user.uid,
      });
    }
    setInput("");
    setLastChange(serverTimestamp());
  };

  return (
    <div className="App">
      <h4>Add a Task</h4>
      <Form className="needs-validation">
        <InputGroup hasValidation className="mb-3">
          <Form.Control
            id="outlined-basic"
            type="text"
            required
            variant="outline-secondary"
            size="lg"
            placeholder="Task Description"
            maxLength={140}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a task.
          </Form.Control.Feedback>
          <Button variant="outline-primary" type="submit" onClick={addTodo}>
            Add Task
          </Button>
        </InputGroup>
      </Form>
      <ul>
        {todos.map((item) => (
          <Todo key={item.id} arr={item} />
        ))}
      </ul>
      <br></br>
      <h6>
        You have <a variant="alert-danger">{todos.length}</a> items left to
        complete.
      </h6>
    </div>
  );
}
export default App;
