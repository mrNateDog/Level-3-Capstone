import { React, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Auth";
import { Nav, Navbar, Container } from "react-bootstrap";
import Login from "./components/Login";
import Register from "./components/Register";
import App from "./App";
import PrivateRoute from "./PrivateRoute";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Logo from "./img/logo.png";

//register and login
function TopNavBar({ auth }) {
  //setting user state here for logout-- not sure about this
  const [currentUser, setUser] = useState(null);
  const isAuthenticated = localStorage.getItem("access_token");

  auth.onAuthStateChanged(function (user) {
    if (user) {
      setUser(user);
    } else {
    }
  });
  //Logout Function
  const removeToken = (isAuthenticated) => {
    localStorage.removeItem("access_token");
    console.log("signed out");
  };
  return (
    <div>
      <div>
        <Router>
          <AuthProvider value={{ currentUser }}>
            <Routes>
              <Route exact path="/" element={<Login />}></Route>
              <Route
                path="/app"
                element={
                  <PrivateRoute isAuthenticated={isAuthenticated}>
                    <App user={currentUser}></App>
                  </PrivateRoute>
                }
              />
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route
                path="*"
                element={
                  <main>
                    <p>Nothing here to see... move along.</p>
                  </main>
                }
              />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
      <Navbar fixed="top" bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="/app">
            <img
              src={Logo}
              width="200"
              height="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link onClick={removeToken}>Log Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNavBar;
