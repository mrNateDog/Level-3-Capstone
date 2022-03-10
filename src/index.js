import React from "react";
import ReactDOM from "react-dom";
import TopNavBar from "./TopNavBar";
import * as firebase from "./firebase";

ReactDOM.render(
  <React.StrictMode>
    <TopNavBar auth={firebase.auth} />
  </React.StrictMode>,
  document.getElementById("root")
);
