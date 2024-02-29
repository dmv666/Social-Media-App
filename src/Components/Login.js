import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import useForm from "../Hooks/useForm";
import { useDispatch } from "react-redux";
import { actionGoogle, actionLoginAsyn } from "../Redux/actions/actionsLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange, reset] = useForm({
    email: "",
    pass: "",
  });

  const { email, pass } = formValue;
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(actionLoginAsyn(email, pass));
    reset();
  };
  return (
    <div className="login-container">
  <Form className="login-form" onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formPlaintextEmail">
      <Form.Label className="form-label">Email</Form.Label>
      <Form.Control
        className="form-input"
        placeholder="user_email@email.com"
        name="email"
        value={formValue.email}
        onChange={handleInputChange}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formPlaintextPassword">
      <Form.Label className="form-label">Password</Form.Label>
      <Form.Control
        className="form-input"
        type="password"
        placeholder="Password"
        name="pass"
        value={formValue.pass}
        onChange={handleInputChange}
      />
    </Form.Group>

    <Button type="submit" className="login-button">
      Login
    </Button>
    <Button
      onClick={() => dispatch(actionGoogle())}
      className="google-button"
    >
      Google
    </Button>
  </Form>
  <Button
    size="lg"
    variant="outline-warning"
    className="register-button"
  >
    <Link to="/register">Usuario Nuevo / Registrar</Link>
  </Button>
</div>
);
};

export default Login;
