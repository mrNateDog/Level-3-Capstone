import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import "./login_style.scss";

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
      console.log("Account created successfully!");
      console.log(navigate);
      navigate("/login", { replace: true });
    } catch (error) {
      alert(error.message);
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
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
      </div>
      <button onClick={register}> Create User</button>
      <Link className="links" to="/login">
        Already have an account? Log in
      </Link>
    </div>
  );
}

export default Register;
