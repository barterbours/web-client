import React, { Component } from "react";
import { Form, InputGroup, Table, Col, Row } from "react-bootstrap";
import { offersContainer } from "../containers/offers";
import { Icon, Button as ButtonManager } from "semantic-ui-react";
import { authContainer } from "../containers/authentication";
import color from "@material-ui/core/colors/blueGrey";


export default class OffersFillingForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            refresh: false,
            quality: "",
            possession: "",
            hashtag: "",
            trigger: false,
        };
    }

    handleRender() {
        if (offersContainer.state.hashtags.length > 2) {
            var halfwayPoint = Math.floor(offersContainer.state.hashtags.length / 3)
            var columnA = offersContainer.state.hashtags.slice(0, halfwayPoint)
            var columnB = offersContainer.state.hashtags.slice(halfwayPoint, 2 * halfwayPoint)
            var columnC = offersContainer.state.hashtags.slice(2 * halfwayPoint)
        } else if (offersContainer.state.hashtags.length > 1) {
            var halfwayPoint = Math.floor(offersContainer.state.hashtags.length / 2)
            var columnA = offersContainer.state.hashtags.slice(0, halfwayPoint)
            var columnB = offersContainer.state.hashtags.slice(halfwayPoint)
            var columnC = []
        } else {
            var columnA = offersContainer.state.hashtags
            var columnB = []
            var columnC = []
        }
        return (
            <Row>
                <Col>
                    {columnA.map((value, index) => {
                        return (
                            <tr><td style={{ width: '50vh' }}>{value}</td>
                                <td><Icon
                                    size="large"
                                    name="minus circle"
                                    onClick={async () => {
                                        await offersContainer.state.hashtags.splice(
                                            index,
                                            1
                                        );
                                        this.setState({ refresh: !this.state.refresh });
                                    }}
                                /></td>
                            </tr>
                        )
                    })}

                </Col>
                <Col >
                    {columnB.map((value, index) => {
                        return (
                            <tr><td style={{ width: '50vh' }}>{value}</td>
                                <td><Icon
                                    size="large"
                                    name="minus circle"
                                    onClick={async () => {
                                        await offersContainer.state.hashtags.splice(
                                            (index + halfwayPoint),
                                            1
                                        );
                                        this.setState({ refresh: !this.state.refresh });
                                    }}
                                /></td>
                            </tr>
                        )
                    })}
                </Col>
                <Col >
                    {columnC.map((value, index) => {
                        return (
                            <tr><td style={{ width: '50vh' }}>{value}</td>
                                <td><Icon
                                    size="large"
                                    name="minus circle"
                                    onClick={async () => {
                                        await offersContainer.state.hashtags.splice(
                                            (index + 2 * halfwayPoint),
                                            1
                                        );
                                        this.setState({ refresh: !this.state.refresh });
                                    }}
                                /></td>
                            </tr>
                        )
                    })}
                </Col>
            </Row>
        )
    }


    ifTriggered() {
        if (this.state.trigger) {
            return <div style={{ background: '#e0e1e2', textAlign: 'center', width: '91%' }}><Form.Label style={{ color: 'red' }}>Only one word u idiot</Form.Label></div>
        }
    }

    handleSubmit() {
        var check = this.state.hashtag.split(" ");
        if (check.length >= 2) {
            this.setState({ trigger: true })
        } else {
            this.setState({ trigger: false });
            offersContainer.state.hashtags.push(this.state.hashtag)
            this.setState({ hashtag: "" });
        };
    }

    render() {
        return (
            <div style={{ backgroundColor: '#868f95', width: '100%', height: '100%' }}>
                <Table hover style={{ width: '100%' }}>
                    <thead style={{ backgroundColor: '#d6d9db', textAlign: 'center' }}>
                        <tr>
                            <td><h1>Add Hashtags</h1></td>
                        </tr>
                    </thead>
                    <tbody>
                        <td>
                            {this.handleRender()}
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group as={Col} md="3" controlId="validationCustomUsername">
                                    <Form.Label>Add a Hashtag</Form.Label>
                                    <InputGroup />
                                    {this.ifTriggered()}
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">#</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            name="hashtag"
                                            value={this.state.hashtag}
                                            onChange={e => { this.setState({ hashtag: e.target.value }); }}
                                        />
                                        <InputGroup.Append>
                                            <ButtonManager
                                                onClick={this.handleSubmit}
                                                size="mini"
                                                icon
                                            >
                                                <Icon
                                                    size="large"
                                                    name="plus circle"
                                                />
                                            </ButtonManager>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Form.Group>
                            </Form>
                        </td>
                    </tbody>
                </Table>
            </div>
        );
    }
}