import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../App.css";
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
      navigate("/app", { replace: true });
      //console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="App">
      <div>
        <h3>Login</h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button type="submit" onClick={login}>
          {" "}
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
