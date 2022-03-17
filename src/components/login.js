import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../App.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      localStorage.setItem("access_token", user._tokenResponse.idToken);
      //REDIRECT ISNT' WORKING!
      navigate("/App", { replace: true });
      console.log(user, " logged in");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="App">
      <Form>
        <h3>Login</h3>
        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Control
            placeholder="Email..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="m-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password..."
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Button variant="outline-primary" onClick={login}>
            {" "}
            Login
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Login;
