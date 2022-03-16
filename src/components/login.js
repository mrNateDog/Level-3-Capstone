import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../App.scss";
//import { Form, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // const [setUser] = useState({});

  const navigate = useNavigate();

  /* onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });*/
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      localStorage.setItem("access_token", user._tokenResponse.idToken);
      //FIX THIS
      navigate("/App", { replace: true });
      //console.log(user);
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
          <Button variant="outline-primary" type="submit" onClick={login}>
            {" "}
            Login
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Login;
