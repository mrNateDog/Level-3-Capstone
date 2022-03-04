import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";

const Logout = async () => {
  await signOut(auth);
};
export default Logout;
