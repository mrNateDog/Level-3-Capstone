import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
//import "../App.css";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const navigate = useNavigate();

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      localStorage.setItem("access_token", user._tokenResponse.idToken);
      navigate("/app", { replace: true });
      alert("Account created successfully!");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="App">
      <Form>
        <h3>Register</h3>
        <Form.Group className="m-3" controlId="formBasicEmail"></Form.Group>
        <Form.Control
          placeholder="Email..."
          value={registerEmail}
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <Form.Group className="m-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password..."
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
        </Form.Group>
        <Button variant="outline-secondary" type="submit" onClick={register}>
          {" "}
          Create User
        </Button>
      </Form>
    </div>
  );
}

export default Register;
