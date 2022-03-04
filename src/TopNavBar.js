import { React, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { Nav, Navbar, Container } from "react-bootstrap";
import Register from "./components/Register";
import Login from "./components/Login";

//register and login
function TopNavBar() {
  //setting user state here for logout-- not sure about this
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  //putting the sign-out functionality here-- not sure
  const logout = async () => {
    await signOut(auth);
    alert("signed out");
  };
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
              src="../img/logo.png"
              width="200"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="./login">Log In</Nav.Link>
            <Nav.Link> {user?.email}</Nav.Link>
            <Nav.Link onClick={logout}>Log Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNavBar;
