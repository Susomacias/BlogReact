import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import {NavLink} from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to={"/"}>React-Java</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Create Post</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to={"/signin"}>Crear Cuenta</Nav.Link>
            <Nav.Link as={NavLink} to={"/"}>Iniciar Sesión</Nav.Link>

            <NavDropdown title="Suso" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Posts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cerrar Sesión
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
