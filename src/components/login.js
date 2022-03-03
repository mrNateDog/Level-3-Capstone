import { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = async () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  try {
    const user = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log(user);
  } catch (error) {
    alert(error.message);
  }
  return (
    <div>
      <h3>Login</h3>
      <input
        type="email"
        className="form-control"
        placeholder="Enter Email"
        id="email"
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}
      />
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        onChange={(event) => {
          setLoginPassword(event.target.value);
        }}
      />

      <button
        type="submit"
        className="btn btn-primary btn-block m-3"
        type="submit"
        onClick={Login}
      >
        {" "}
        Login
      </button>
    </div>
  );
};
export default Login;
