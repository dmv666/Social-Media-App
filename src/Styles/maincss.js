import { Button } from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import styled from "styled-components";
export const LoginContainer = styled.div`
  max-width: 500px;
  margin: auto;
`;

export const LoginForm = styled(Form)`
  margin: 0 auto;
  width: 80%;
`;

export const FormLabel = styled(Form.Label)`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

export const FormInput = styled(Form.Control)`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 15px;
  width: 100%;
`;

export const LoginButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  margin-right: 10px;
`;

export const GoogleButton = styled(Button)`
  background-color: #db4437;
  color: #fff;
  padding: 10px 20px;
`;

export const RegisterButton = styled(Button)`
  margin-top: 20px;
  width: 100%;
`;

export const RegisterLink = styled(Link)`
  text-decoration: none;
  color: #333;
`;