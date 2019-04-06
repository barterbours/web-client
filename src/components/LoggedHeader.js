import React from "react";
import "../styles/index.css"
import { Navbar, Nav,NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logout from './Logout'

export const LoggedHeader = props => {
  return (
    <Navbar expand="sm" variant="light" bg="info">
      <Navbar.Brand exact to="/" as={Link}>
        BarterHood
        </Navbar.Brand>
      <Link to="/LoggedInView">MainPage</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto" navbar >
          <NavDropdown title="UserName" id="collasible-nav-dropdown" >
              <Logout />
          </NavDropdown>
          <Nav.Link>okokokok</Nav.Link>
          <Nav.Link >aaaa</Nav.Link>
          
        </Nav>
    

        
       
      </Navbar.Collapse>
    </Navbar>
  );
}