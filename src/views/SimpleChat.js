
import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import { Container, Row, Col, Button, ButtonGroup, Table } from 'react-bootstrap';
import { Icon, Form } from 'semantic-ui-react';
import { chatContainer } from '../containers/chat';
import { Button as ButtonManager } from "semantic-ui-react";


export default class Sidenav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: true,
            option: "all",
            selected: [],
            refresh: false
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
            <Row>
                <Col>
                    <div className="sidenav">
                        <Row className="sidenavHeader"><Icon name="user circle" size="large" /></Row>
                        <Row className=""> Username</Row>
                        <ButtonGroup vertical style={{ width: "180px" }}>
                            <Button className="btn-block" onClick={() => { this.setState({ option: 'unread' }) }}><Icon name="mail outline" /> Unread</Button>
                            <Button className="btn-block" onClick={() => { this.setState({ option: 'all' }) }}><Icon name="mix" /> All mail</Button>
                            <Button className="btn-block" onClick={() => { this.setState({ option: 'starred' }) }}><Icon name="star half full" /> Stared</Button>
                        </ButtonGroup>
                    </div>
                </Col>
                <Col>
                    <Table hover>
                        <thead>
                            <tr>
                                <td>Messages</td>
                                {this.isSelected()}
                            </tr>
                            <tr>
                                <td> </td>
                                <td>User</td>
                                <td>Message</td>
                                <td>Selected</td>
                                
                            </tr>

                        </thead>
                        <tbody>
                            {chatContainer.state[this.state.option].map((value, index) => {
                                return (
                                    <tr>
                                        <td>Icon</td>
                                        <td>{value.userEmail}</td>
                                        <td>{value.message}</td>
                                        <td> <Form>
                                                <input type="checkbox" />
                                        </Form>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row >
        )
    }
}

