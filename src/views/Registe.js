import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, Col, Row, Form, Overlay, Popover } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Subscribe } from "unstated";
import { validateContainer } from '../containers/register'
import { SHA256 } from "sha2";
import Swal from "sweetalert2";


export default class Registe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      submitted: false,
      errors: [],
      errorEmail: false,
      errorPasswordLenght: false,
      errorPasswordMatch: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data)
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });
  }

  validate(email, password) {
    const errors = [];

    if (email.length < 5) {
      this.setState({ errorEmail: true });
    } else {
      this.setState({ errorEmail: false });
    }
    if (email.split("").filter(x => x === "@").length !== 1) {
      this.setState({ errorEmail: true });
    } else {
      this.setState({ errorEmail: false });
    }

    if (email.indexOf(".") === -1) {
      this.setState({ errorEmail: true });
    } else {
      this.setState({ errorEmail: false });
    }

    if (password.length < 6) {
      this.setState({ errorPasswordLenght: true });
    } else {
      this.setState({ errorPasswordLenght: false });
    }

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ errorPasswordMatch: true });
    } else {
      this.setState({ errorPasswordMatch: false });
    }

    return errors;
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const email = this.state.email;
    const password = this.state.password;

    await this.validate(email, password);

    const confirmPassword = this.state.confirmPassword;
    const errorEmail = this.state.errorEmail;
    const errorPasswordLenght = this.state.errorPasswordLenght;
    const errorPasswordMatch = this.state.errorPasswordMatch;

    if (email && password && confirmPassword) {
      if (
        errorEmail === false &&
        errorPasswordLenght === false &&
        errorPasswordMatch === false
      ) {
        this.fetchData();
      } else {
        console.log("TODO Swal, Check errors");
      }
    }
  }

  async fetchData() {
    Swal.fire({
      title: "Rejestracja w trakcie",
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
      "http://192.168.43.221:8084/api/v1/users/register",
      requestData
    );
    const response = await request.json();
    const success = !response.error;

    // if (success) {
    //   const session = response.session;
    //   validateContainer.updateSession(session);

    //   const expirationTime = response.expirationTime;
    //   validateContainer.updateExpirationTime(expirationTime);

    //   const authLevel = response.authLevel;
    //   validateContainer.updateAuthLevel(authLevel);
    // }
    console.log(this.state)

    if (success) {
      Swal.fire({
        title: "Rejestracja udana",
        type: "success",
        text: "Konto stworzone"
      }).then(register => {
        window.sessionStorage.setItem('isLoggedIn', true)
        window.location.href = "/";
      });
    } else {
      Swal.fire({
        title: "Rejestracja nieudana",
        type: "error",
        text: "Taki e-mail już istnieje"
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
              ref="email"
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
              ref="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="checkBasicPassword">
            <Form.Label>
              Confirm Password
            </Form.Label>
            <Form.Control
              ref="confirmPassword"
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Subscribe to={[validateContainer]}>
            {counterContainer => (
              <Button
                variant="primary"
                type="submit"
                onClick={this.handleSubmit}
              >
                Register
              </Button>
            )}
          </Subscribe>
          <Link to="/" className="btn btn-link">
            Back
          </Link>

          <Overlay
            show={this.state.errorEmail}
            target={() => {
              return ReactDOM.findDOMNode(this.refs.email);
            }}
            placement="right"
          >
            <Popover id="popover-email" title="Niepoprawny e-mail">
              Sprawdź czy e-mail posiada odpowiednie symbole
                    </Popover>
          </Overlay>

          <Overlay
            show={this.state.errorPasswordLenght}
            target={() => {
              return ReactDOM.findDOMNode(this.refs.password);
            }}
            placement="right"
          >
            <Popover id="popover-password" title="Hasło za krótkie">
              Hasło musi zawierać minimum 6 znaków
                    </Popover>
          </Overlay>

          <Overlay
            show={this.state.errorPasswordMatch}
            target={() => {
              return ReactDOM.findDOMNode(this.refs.confirmPassword);
            }}
            placement="right"
          >
            <Popover
              id="popover-confirmPassword"
              title="Hasła nie pasują"
            >
              Sprawdź czy hasła zostały wpisane tak samo
                    </Popover>
          </Overlay>
        </Form>

      </div >
    );
  }
}