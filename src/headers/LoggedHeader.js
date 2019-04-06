import React from "react";
import "../styles/index.css"
import { Navbar, Nav } from "react-bootstrap";
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
          <Nav.Link href="/MatchingView">Matching</Nav.Link>
          <Nav.Link href='/OffersFillingForm'>Offers</Nav.Link>
        </Nav>
        <Nav>
          <Logout />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}