import React, { useState } from "react";
import { login } from "../Auth";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(form);
  };
  return (
    <Form>
      <h3>Log In</h3>
      <Form.Group
        className="m-3"
        controlId="formBasicEmail"
        onSubmit={handleSubmit}
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          id="mail"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <Form.Text className="text-muted">{this.state.email}</Form.Text>
      </Form.Group>

      <Form.Group className="m-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </Form.Group>
      <Button variant="primary m-3" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
