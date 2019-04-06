import React, { Component } from 'react'
import {  Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "./sidebar"

export default class Address extends Component {
  render() {
    return (
      <div>
        <Row>
                <Col sm={2} className="side">
                    <Sidebar />
                </Col>

              <Col sm={9} className="main" style={{ marginTop: "120px"}}>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control type="text" placeholder="Phone" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                  </Form.Group>
              <Form.Row>
                  <Form.Group as={Col} md="8" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                  </Form.Group>

                  <Form.Group as={Col}  controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control placeholder="01-344" />
                    </Form.Group>

              </Form.Row>


                  <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>

                  <Button variant="primary" type="submit" href="/LoggedInView">
                    Submit
                  </Button>
                </Form>
                
            </Col>
      </Row>
      </div>
    )
  }
}


