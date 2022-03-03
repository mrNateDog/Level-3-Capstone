import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TopNavBar from "./TopNavBar";

ReactDOM.render(
  <React.StrictMode>
    <TopNavBar />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
