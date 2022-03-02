import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import User from "./User";
ReactDOM.render(
  <React.StrictMode>
    <User />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
