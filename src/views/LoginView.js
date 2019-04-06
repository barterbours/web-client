import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class LoginView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login">

        <Button onClick={async () => {
          await window.sessionStorage.setItem("isLoggedIn", true)
          window.location.href = "/";
        }} className="btn btn-danger"> <span className="fa fa-google"></span>  |  Sign in with Google</Button>
      </div >
    );
  }
}