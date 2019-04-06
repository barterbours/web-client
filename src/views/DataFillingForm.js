import React, { Component } from 'react'
import { Row, Col, Form, Button } from "react-bootstrap";
import CustomersService from '../temp/Api';

const customersService = new CustomersService();

export default class Address extends Component {

    // constructor(props) {
    //   super(props);

    //   //this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // componentDidMount(){
    //   const { match: { params } } = this.props;
    //   if(params && params.pk)
    //   {
    //     customersService.getCustomer(params.pk).then((c)=>{
    //       // this.refs.firstName.value = c.first_name;
    //       // this.refs.lastName.value = c.last_name;
    //       // this.refs.email.value = c.email;
    //       // this.refs.phone.value = c.phone;
    //       // this.refs.address.value = c.address;
    //       // this.refs.description.value = c.description;
    //     })
    //   }
    // }

    // handleCreate(){
    //   customersService.createCustomer(
    //     {
    //       // "first_name": this.refs.firstName.value,
    //       // "last_name": this.refs.lastName.value,
    //       // "email": this.refs.email.value,
    //       // "phone": this.refs.phone.value,
    //       // "address": this.refs.address.value,
    //       // "description": this.refs.description.value
    //   }          
    //   ).then((result)=>{
    //     alert("Your Data Added Succesfully");
    //   }).catch(()=>{
    //     alert('There was an error! Please re-check your form.');
    //   });
    // }
    // handleUpdate(pk){
    //   customersService.updateCustomer(
    //     {
    //       // "pk": pk,
    //       // "first_name": this.refs.firstName.value,
    //       // "last_name": this.refs.lastName.value,
    //       // "email": this.refs.email.value,
    //       // "phone": this.refs.phone.value,
    //       // "address": this.refs.address.value,
    //       // "description": this.refs.description.value
    //   }          
    //   ).then((result)=>{
    //     console.log(result);
    //     alert("Profile updated!");
    //   }).catch(()=>{
    //     alert('There was an error! Please re-check your form.');
    //   });
    // }
    // handleSubmit(event) {
    //   const { match: { params } } = this.props;

    //   if(params && params.pk){
    //     this.handleUpdate(params.pk);
    //   }
    //   else
    //   {
    //     this.handleCreate();
    //   }

    //   event.preventDefault();
    // }

    render() {
        return (
            <div>
                <Row>
                    <Col />
                    <Col sm={9} className="main" style={{ marginTop: "120px" }}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Radius</Form.Label>
                                    <Form.Control type="text" placeholder="Radius Eg. 2 Km, 5Km" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridAddress2">
                                    <Form.Label>Proposed Offer</Form.Label>
                                    <Form.Control placeholder="Drill, Screw Drive..." />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Intrestedn In</Form.Label>
                                    <Form.Control placeholder="Hammer, Drill.." />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Building Number</Form.Label>
                                    <Form.Control placeholder="Eg.2, 5, 8 .." />
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
                    <Col />
                </Row>
            </div>
        )
    }
}


