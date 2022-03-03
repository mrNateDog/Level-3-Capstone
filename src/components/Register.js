import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const Register = async () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    console.log(user);
  } catch (error) {
    alert(error.message);
  }
  return (
    <div>
      <h3>Register</h3>
      <h6>Create an Account</h6>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        onChange={(event) => {
          setRegisterEmail(event.target.value);
        }}
      />
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        onChange={(event) => {
          setRegisterPassword(event.target.value);
        }}
      />

      <button
        className="btn btn-primary btn-block m-3"
        type="submit"
        onClick={Register}
      >
        {" "}
        Create User
      </button>
    </div>
  );
};
export default Register;
