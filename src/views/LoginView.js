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
        <h1>Hiiiii</h1>
        <h2>Lets Log in !</h2>
        <Button onClick={async () => {
          await window.sessionStorage.setItem("isLoggedIn", true)
          window.location.href = "/LoggedInView";
        }}>Log In</Button>
      </div >
    );
  }
}