import React, { Component } from "react";
import { Button, Col, Row,Form } from "react-bootstrap";

export default class Registe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loginn">
        <h1 style={{ textAlign: "center"}}> Neighbour Register </h1>
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
        <hr/>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Agree Terms And Condition" />
          </Form.Group>
          <Button onClick={async () => {
          window.sessionStorage.setItem("isLoggedIn", true)
          window.location.href = "/";
        }} variant="primary"> Register </Button>
        </Form>
        
      </div >
    );
  }
}