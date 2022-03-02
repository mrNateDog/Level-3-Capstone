import React, { useState } from "react";
import { register } from "../auth";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Create An Account</h3>
      <div className="form-group m-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          id="mail"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div className="form-group m-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block  m-3">
        Sign Up
      </button>
    </form>
  );
};

export default Register;
