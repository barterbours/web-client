import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { NavDropdown } from "react-bootstrap";
import Swal from "sweetalert2";

export default class Logout extends Component {

  Logout() {
    Swal.fire({
      title: "Chcesz się wylogować?",
      type: "question",
      showCancelButton: true,
      cancelButtonText: "Nie",
      confirmButtonText: "Tak"
    }).then(result => {
      if (result.value) {
        console.log("aa")
        window.sessionStorage.removeItem("isLoggedIn");
        if (window.sessionStorage.getItem("isLoggedIn") === null) {
          window.location.href = "/LoggedOutView";
        }
      }
    });
  }

  render() {
    return (
      <NavDropdown.Item className="ml-auto" onClick={this.Logout}>
        Logout
      </NavDropdown.Item>
    );
  }
}