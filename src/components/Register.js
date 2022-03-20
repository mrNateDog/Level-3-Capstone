import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./login_style.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
      navigate("/App", { replace: true });
      console.log("Account created successfully!");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="login-container">
      <h3 className="title"> Register User </h3>
      <div className="input-container">
        <input
          className="fluid-input"
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
      </div>
      <br></br>
      <div className="input-container">
        <input
          className="fluid-input"
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
      </div>
      <button onClick={register}> Create User</button>
      <h6>Login with account </h6>
    </div>
  );
}

export default Register;
