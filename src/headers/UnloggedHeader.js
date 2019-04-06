import React from "react";
import "../styles/index.css"
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const UnloggedHeader = props => {
  return (
    <Navbar expand="sm" variant="light" bg="info">
      <Navbar.Brand exact to="/" as={Link}>
        BarterHood
        </Navbar.Brand>
      <Nav><Nav.Link to="/">Main Page</Nav.Link></Nav>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto" navbar />
        <Nav>
          <NavDropdown.Item className="ml-auto" href="/LoginView" >Login</NavDropdown.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}