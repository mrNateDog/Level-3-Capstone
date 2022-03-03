import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";

//register and login
function TopNavBar() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt="NM TODO Logo"
              src="/logo.png"
              width="200"
              height="50"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="./login">Log In</Nav.Link>
            <Nav.Link href="#">Log Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNavBar;
