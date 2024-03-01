import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import useForm from "../Hooks/useForm";
import { useDispatch } from "react-redux";
import { actionGoogle, actionLoginAsyn } from "../Redux/actions/actionsLogin";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  max-width: 500px;
  margin: auto;
`;

const LoginForm = styled(Form)`
  margin: 0 auto;
  width: 80%;
`;

const FormLabel = styled(Form.Label)`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const FormInput = styled(Form.Control)`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 15px;
  width: 100%;
`;

const LoginButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
`;

const GoogleButton = styled(Button)`
  background-color: #db4437;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;

`;

const RegisterButton = styled(Button)`
  margin-top: 20px;
  width: 100%;
  cursor: pointer;

`;

const RegisterLink = styled(Link)`
  text-decoration: none;
  color: #333;
`;
const Login = () => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange, reset]:any = useForm({
    email: "",
    pass: "",
  });

  const { email, pass } = formValue;
  const handleSubmit = (e:any) => {
    e.preventDefault();

    dispatch(actionLoginAsyn(email, pass));
    reset();
  };
  return (
    <LoginContainer>
    <LoginForm onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formPlaintextEmail">
        <FormLabel>Email</FormLabel>
        <FormInput
          type="email"
          placeholder="user_email@email.com"
          name="email"
          value={formValue.email}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPlaintextPassword">
        <FormLabel>Password</FormLabel>
        <FormInput
          type="password"
          placeholder="Password"
          name="pass"
          value={formValue.pass}
          onChange={handleInputChange}
        />
      </Form.Group>
      <LoginButton type="submit">Login</LoginButton>
      <GoogleButton onClick={() => dispatch(actionGoogle())}>
        Google
      </GoogleButton>
    </LoginForm>
   
    
    <RegisterButton>

      <RegisterLink to="/register">Usuario Nuevo / Registrar</RegisterLink>

    </RegisterButton>
  </LoginContainer>
);
};


export default Login;
