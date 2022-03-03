import { getAuth, signOut } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";

const Logout = getAuth();
signOut(Logout)
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });
export default Logout;
