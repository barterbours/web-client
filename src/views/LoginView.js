import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { authContainer } from "../containers/authentication";

export default class LoginView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button onClick={async () => {
          await window.sessionStorage.setItem("isLoggedIn", true)
          window.location.href = "/";
        }}>Log In</Button>
      </div >
    );
  }
}