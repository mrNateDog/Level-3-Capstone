import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import Register from "./components/Register";
import Login from "./components/Login";

//register and login
function User() {
  return (
    <div>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt="Nathan's ToDo List Logo"
              src="./src/img/todolist_logo.png"
              width="200"
              height="50"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Register</Nav.Link>
            <Nav.Link href="#">Log In</Nav.Link>
            <Nav.Link href="#">Log Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/register"
            component={Register}
            element={<Register />}
          ></Route>
          <Route
            exact
            path="/login"
            component={Login}
            element={<Login />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default User;
