import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionLogoutAsyn } from "../Redux/actions/actionsLogin";
import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledNavbar = styled(Navbar)`
  position: fixed;
  
  width: 100%;
  background-color: #FF7674; // Cambiar a rosa
`;

const StyledNav = styled(Nav)`
  display: flex;
  width: 100%;
  justify-content: space-around; // Espaciado uniforme para los links
`;

const StyledLink = styled(Link)`
  color: white;
  font-size:  20px;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const LogoutButton = styled(Button)`
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 5px;
  margin-left: auto; // Empuja el botón al extremo derecho
`;
const Navbars = () => {
  const dispatch = useDispatch();
  return (
    <StyledNavbar expand="lg">
    <Container fluid>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/add">Add</StyledLink>
        <StyledLink to="/search">Buscar</StyledLink>
      </StyledNav>
      <Form className="d-flex">
        <LogoutButton variant="outline-success" onClick={() => dispatch(actionLogoutAsyn())}>
          Logout
        </LogoutButton>
      </Form>
    </Container>
  </StyledNavbar>
  );
};

export default Navbars;
