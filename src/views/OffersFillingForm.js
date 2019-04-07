import React, { Component } from "react";
import { Form, InputGroup, Table, Col } from "react-bootstrap";
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
            <div>
                <Table hover>
                    <thead>
                        <tr>
                            <th>Add Hashtags</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>
                            {offersContainer.state.hashtags.map((value, index) => {
                                return (
                                    <tr>
                                        <td>{value}</td>
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
                                        />
                                        </td>
                                    </tr>
                                )
                            })}
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