import React from "react";
import "../styles/index.css"
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logout from './Logout'

export const LoggedHeader = props => {
  return (
    <Navbar expand="sm" variant="light" bg="light">
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
          <Logout />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}