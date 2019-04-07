
import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import { Container, Row, Col, Button, ButtonGroup, Table } from 'react-bootstrap';
import { Icon, Form } from 'semantic-ui-react';
import { chatContainer } from '../containers/chat';
import { Button as ButtonManager } from "semantic-ui-react";
import Swal from 'sweetalert2';
// import Blockies from "react-blockies";



export default class Sidenav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: true,
            option: "all",
            selected: [],
            refresh: false,
            email: "lalala@lala.la"
        }
    }

    async handleReply(index) {
        const { value: text } = await Swal.fire({
            input: 'textarea',
            inputPlaceholder: 'Type your message here...',
            showCancelButton: true,
            confirmButtonText: '➤ Send ',
        })

        if (text) {
            Swal.fire(text)
        }
    }

    handleOperation(variant) {
        if (variant === "Delete") {

        } else if (variant === "Star") {

        } else if (variant === "Unstar") {

        } else if (variant === " MarkAsRead") {

        }
    }

    isSelected() {
        if (this.state.selected) {
            if (this.state.option === "starred") {
                return <td><div class="ui buttons">
                    <button class="ui button" onClick={this.handleOperation('Delete')}>
                        <i class="trash alternate outline icon"></i>
                        Delete</button>
                    <div class="or"></div>
                    <button class="ui button" onClick={this.handleOperation('Star')}>
                        <i class="star icon"></i>
                        Star</button>
                </div></td>
            }

            if (this.state.option === "all") {
                return <td><div class="ui buttons">
                    <button class="ui button" onClick={this.handleOperation('Delete')}>
                        <i class="trash alternate outline icon"></i>
                        Delete</button>
                    <div class="or"></div>
                    <button class="ui button" onClick={this.handleOperation('Star')}>
                        <i class="star icon"></i>
                        Star</button>
                </div></td>
            }

            if (this.state.option === "unread") {
                return <td>
                    <div class="ui buttons">
                        <button class="ui button" onClick={this.handleOperation('Delete')}>
                            <i class="trash alternate outline icon"></i>
                            Delete</button>
                        <div class="or"></div>
                        <button class="ui button" onClick={this.handleOperation('Star')}>
                            <i class="star icon"></i>
                            Star</button>
                        <div class="or"></div>
                        <button class="ui button" onClick={this.handleOperation('MarkAsRead')}>
                            <i class="check square outline icon"></i>
                            Mark as Read</button>
                    </div></td>
            }
        }
    }

    render() {
        return (
            <div as={"container"} style={{ backgroundColor: '#868f95', width: '100%', height: '95%' }}>
                <Row>
                    <Col md={1}>
                        <div className="sidenav">
                            <Row className="sidenavHeader" style={{ alignContent: 'right' }}><Col ><Blockies
                                seed={SHA256(this.state.email).toString("hex")}
                                size={15}
                                scale={6}
                                color="#dfe"
                                bgColor="#ffe"
                                spotColor="#abc"
                                className="identicon"
                            /></Col><Col md={{ offset: "4" }}> Username</Col></Row>
                            <ButtonGroup vertical style={{ width: "34vh" }}>
                                <Button className="btn-block" onClick={() => { this.setState({ option: 'unread' }) }}><Icon name="mail outline" /> Unread</Button>
                                <Button className="btn-block" onClick={() => { this.setState({ option: 'all' }) }}><Icon name="mix" /> All mail</Button>
                                <Button className="btn-block" onClick={() => { this.setState({ option: 'starred' }) }}><Icon name="star half full" /> Stared</Button>
                            </ButtonGroup>
                        </div>
                    </Col>
                    <Col md={{ offset: 1 }}>
                        <Table hover style={{ textAlign: "center" }}>
                            <thead style={{ backgroundColor: '#d6d9db' }}>
                                <tr>
                                    <td />
                                    <td />
                                    <td />
                                    <td><div style={{ width: '100vh' }}><h1>Mailbox</h1></div></td>
                                    <td />
                                    {this.isSelected()}
                                </tr>
                                <tr style={{ backgroundColor: '#aeb4b8' }}>
                                    <td />
                                    <td />
                                    <td>User</td>
                                    <td><div style={{ width: '100vh' }}>Messages</div></td>
                                    <td></td>
                                    <td>Selected</td>
                                </tr>

                            </thead>
                            <tbody>
                                {chatContainer.state.all.map((value, index) => {
                                    if (this.state.option === 'all') {
                                        return (
                                            <tr>
                                                <td />
                                                <td><Blockies
                                                    seed={SHA256(value.userEmail).toString("hex")}
                                                    size={10}
                                                    scale={3}
                                                    color="#dfe"
                                                    bgColor="#ffe"
                                                    spotColor="#abc"
                                                    className="identicon"
                                                /></td>
                                                <td>{value.userEmail}</td>
                                                <td>{value.message}</td>
                                                <td><ButtonManager onClick={() => { this.handleReply(index) }}><Icon name='send' />Reply</ButtonManager></td>
                                                <td>fucking checkboxes pls help fuck</td>
                                            </tr>
                                        )
                                    } else if (value.variant === this.state.option) {
                                        return (
                                            <tr>
                                                <td />
                                                <td><Blockies
                                                    seed={SHA256(value.userEmail).toString("hex")}
                                                    size={10}
                                                    scale={3}
                                                    color="#dfe"
                                                    bgColor="#ffe"
                                                    spotColor="#abc"
                                                    className="identicon"
                                                /></td>
                                                <td>{value.userEmail}</td>
                                                <td>{value.message}</td>
                                                <td><ButtonManager onClick={() => { this.handleReply(index) }}><Icon name='send' />Reply</ButtonManager></td>
                                                <td>fucking checkboxes pls help fuck</td>
                                            </tr>
                                        )
                                    }
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div >
        )
    }
}

