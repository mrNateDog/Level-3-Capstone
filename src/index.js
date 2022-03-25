import React from "react";
import ReactDOM from "react-dom";
import ToDoRoutes from "./ToDoRoutes";
import * as firebase from "./firebase";

ReactDOM.render(
  <React.StrictMode>
    <ToDoRoutes auth={firebase.auth} />,
  </React.StrictMode>,
  document.getElementById("root")
);
