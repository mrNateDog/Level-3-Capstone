import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import "./login_style.scss";
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
      //console.log(navigate);
      navigate("/app", { replace: true });
      //console.log(user, " logged in");
    } catch (error) {
      alert(error.message);
    }
  };
  //input styling fun

  return (
    <div className="login-container ">
      <h3 className="title"> Login </h3>
      <div className="input-container">
        <input
          className="fluid-input"
          type="text"
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
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
            setLoginPassword(event.target.value);
          }}
        />
      </div>
      <button onClick={login}> Login</button>
      <Link className="links" to="/register">
        Create an Account
      </Link>
    </div>
  );
}
export default Login;
