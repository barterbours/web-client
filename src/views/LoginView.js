import React, { Component } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { validateContainer } from "../containers/register";
import Swal from "sweetalert2";
import { SHA256 } from "sha2";



export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    if (this.state.email && this.state.password) {
      this.fetchUserData();
    }
  }


  async fetchUserData() {
    Swal.fire({
      title: "Logowanie w trakcie",
      showCancelButton: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });

    const requestData = {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        passwordHash: SHA256(this.state.password).toString("hex")
      }),
      headers: { "Content-Type": "application/json" }
    };

    const request = await fetch(
      "http://192.168.43.221:8084/api/v1/user/login",
      requestData
    );
    const response = await request.json();
    const error = response.error;
    const success = !response.error;
    if (success) {
      const session = response.session;
      validateContainer.updateSession(session);
    }

    if (error) {
      Swal.fire({
        title: "Logowanie nieudane",
        type: "error",
        text: "Niepoprawny e-mail lub hasło"
      });
    } else {
      Swal.fire({
        title: "Zalogowano",
        type: "success",
        showConfirmButton: false,
        timer: 1000
      }).then(login => {
        window.sessionStorage.setItem('isLoggedIn', true)
        window.location.href = "/";
      });
    }
  }

  render() {
    return (
      <div className="loginn">

        <Button onClick={async () => {
          // console.log("aa")
          // const request = await fetch("http://localhost:3000/auth/google");
          // const data = await request.json()
          // console.log(data)
          window.sessionStorage.setItem("isLoggedIn", true)
          window.location.href = "/";
        }} className="btn btn-danger"> <span className="fa fa-google"></span>  |  Sign in with Google</Button>

        <Button onClick={async () => {
          window.sessionStorage.setItem("isLoggedIn", true)
          window.location.href = "/";
        }} className="btn btn-primary"> <span className="fa fa-facebook"></span>  |  Sign in with Facebook</Button>
        <hr />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              Password
            </Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={this.handleSubmit}
          >
            Login
          </Button>
          <Link to="/register" className="btn btn-link">
            Register
          </Link>
        </Form>

      </div >
    );
  }
}