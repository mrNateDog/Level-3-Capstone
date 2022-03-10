import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  // const [setUser] = useState({});

  const navigate = useNavigate();

  /*onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });*/

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
      alert(error.message);
    }
  };
  return (
    <div className="App">
      <div>
        <h3>Register</h3>
        <input
          placeholder="Email..."
          value={registerEmail}
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register}> Create User</button>
      </div>
    </div>
  );
}

export default Register;
