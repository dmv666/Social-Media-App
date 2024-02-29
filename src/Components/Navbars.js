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

const LogoutButton = styled.button`
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 5px;
  margin-left: auto; // Empuja el botón al extremo derecho
`;
const Navbars = () => {
  const dispatch = useDispatch();
  return (
    <StyledNavbar>
      <StyledNav expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <StyledLink to="/">Home</StyledLink>
              </Nav.Link>
              <Nav.Link>
                <StyledLink to="/add">Post</StyledLink>
              </Nav.Link>

              <Nav.Link>
                <StyledLink to="/search">Search</StyledLink>
              </Nav.Link>
              <Nav.Link>
                <StyledLink to="/perfil">Profile</StyledLink>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <LogoutButton
                variant="outline-success"
                onClick={() => dispatch(actionLogoutAsyn())}
              >
                Logout
              </LogoutButton>
            </Form>
          </Navbar.Collapse>
        </Container>
      </StyledNav>
      </StyledNavbar>
  );
};

export default Navbars;
