import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Auth";
import Login from "./components/Login";
import Register from "./components/Register";
import App from "./App";
import PrivateRoute from "./PrivateRoute";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
  return (
    <>
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
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default TopNavBar;
