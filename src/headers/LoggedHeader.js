import React from "react";
import "../styles/index.css"
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logout from '../components/Logout'

export const LoggedHeader = props => {
  return (
    <Navbar expand="sm" variant="light" bg="info">
      <Navbar.Brand exact to="/" as={Link}>
        BarterHood
        </Navbar.Brand>
      <Nav><Nav.Link href="/">Map</Nav.Link></Nav>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto" navbar >
          <Nav.Link href="/matching">Matching</Nav.Link>
          <Nav.Link href='/OffersFillingForm'>Offers</Nav.Link>
          <Nav.Link href='/location'>Address</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav>
        <NavDropdown title="User Name">
          <Logout />
          <NavDropdown.Item className="ml-auto" href="/DataFillingForm">
            Adress
          </NavDropdown.Item>
          <NavDropdown.Item className="ml-auto" href="/map">
            Map
          </NavDropdown.Item>
          <NavDropdown.Item className="ml-auto" href="/SimpleChat">
            Mailbox
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}