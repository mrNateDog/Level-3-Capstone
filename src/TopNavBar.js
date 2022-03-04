import { React, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { AuthProvider } from "./Auth";
import { Nav, Navbar, Container } from "react-bootstrap";
import Register from "./components/Register";
import Login from "./components/Login";
import App from "./App";

//register and login
function TopNavBar() {
  //setting user state here for logout-- not sure about this
  const [currentUser, setCurrentUser] = useState(null);
  //putting the sign-out functionality here-- not sure
  const logout = async () => {
    await signOut(auth);
    alert("signed out");
  };
  return (
    <div>
      <Router>
        <AuthProvider value={{ currentUser }}>
          <Routes>
            <Route path="/app" element={<App />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </AuthProvider>
      </Router>
      <Navbar bg="secondary" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand>
            <img
              href="/app"
              alt="NM TODO Logo"
              src="../img/logo.png"
              width="200"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/app">ToDo</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="./login">Log In</Nav.Link>
            <Nav.Link onClick={logout}>Log Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNavBar;
