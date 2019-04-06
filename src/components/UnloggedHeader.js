import React from "react";
import "../styles/index.css"
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const UnloggedHeader = props => {
  return (
    <Navbar expand="sm" bg="dark" >
      <Navbar.Brand exact to="/" as={Link}>
        BarterHood
        </Navbar.Brand>
      <Link to="/">MainPage</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto" navbar >
          <Nav.Link>okokokok</Nav.Link>
          <Nav.Link >aaaa</Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown.Item className="ml-auto" href="/LoginView">Login</NavDropdown.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}