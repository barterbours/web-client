import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";
import Swal from "sweetalert2";

export default class Logout extends Component {
  constructor(props) {
    super(props);
  }

  Logout() {
    Swal.fire({
      title: "Chcesz się wylogować?",
      type: "question",
      showCancelButton: true,
      cancelButtonText: "Nie",
      confirmButtonText: "Tak"
    })
  }

  render() {
    return (
      <NavDropdown.Item className="ml-auto" onClick={this.Logout}>
        Logout
      </NavDropdown.Item>
    );
  }
}