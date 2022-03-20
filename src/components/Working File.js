import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./login.css";

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
    <div>
      <FormInput
        description="Email"
        placeholder="Enter your email"
        type="text"
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}
      />
      <FormInput
        description="Password"
        placeholder="Enter your password"
        type="password"
      />
      <FormButton title="Log in" />
    </div>
  );

  const FormButton = (props) => (
    <div id="button" class="row">
      <button>{props.title}</button>
    </div>
  );

  const FormInput = (props) => (
    <div class="row">
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
}
export default Login;

//ReactDOM.render(<App />, document.getElementById("container"));
