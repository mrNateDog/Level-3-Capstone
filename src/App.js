import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import InputGroup from "react-bootstrap/InputGroup";
import "./components/login_style.scss";
import Todo from "./components/Todo";
import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
import Logo from "./img/logo.png";
import { useNavigate } from "react-router-dom";

//firebase functionality
function App({ user }) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [lastChange, setLastChange] = useState("");

  //executing the query
  useEffect(() => {
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
    if (input === "") {
      alert("Please enter a task Description in the text box.");
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

  //logout functionality
  const navigate = useNavigate();
  //navbar for logo/logout functionality
  class LogoutBar extends React.Component {
    render() {
      const removeToken = (isAuthenticated) => {
        localStorage.removeItem("access_token");
        console.log("signed out");
        console.log(navigate);
        navigate("/app", { replace: true });
      };
      return (
        <div>
          <Navbar.Brand>
            <img
              src={Logo}
              width="300"
              height="75"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className="title" onClick={removeToken}>
              Log Out
            </Nav.Link>
          </Nav>
        </div>
      );
    }
  }
  return (
    <CardGroup className="App">
      <Card.Body>
        <LogoutBar />
        <Form>
          <InputGroup>
            <Form.Control
              className="w-80"
              type="text"
              required
              size="lg"
              placeholder="Add a new task"
              maxLength={140}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a task.
            </Form.Control.Feedback>
            <Button className="taskButton" onClick={addTodo}>
              ADD
            </Button>
          </InputGroup>
        </Form>

        <br></br>
        {todos.map((item) => (
          <Todo key={item.id} arr={item} />
        ))}

        <h6 className="title">
          You have <a variant="alert-danger">{todos.length}</a> items left to
          complete.
        </h6>
      </Card.Body>
    </CardGroup>
  );
}
export default App;
