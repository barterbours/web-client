import React, { Component } from "react";
import { Form, InputGroup, Table } from "react-bootstrap";
import { offersContainer } from "../containers/offers";
import { Icon, Button as ButtonManager } from "semantic-ui-react";
import { authContainer } from "../containers/authentication";


export default class OffersFillingForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            refresh: false,
            quality: "",
            possession: ""
        };
    }

    handleChange(e) {
        if (e.target.name === "quality") {
            offersContainer.setState({ quality: e.target.value })
        }
        if (
            e.target.name === "possession") {
            offersContainer.setState({ possession: e.target.value })
        }
    }

    render() {
        return (
            <div>
                <Table hover>
                    <thead>
                        <tr>
                            <th>Qualities</th>
                            <th>Possessions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>
                            {offersContainer.state.qualities.map((value, index) => {
                                return (
                                    <tr>
                                        <td>{value}</td>
                                        <td><Icon
                                            size="large"
                                            name="minus circle"
                                            onClick={async () => {
                                                await offersContainer.state.qualities.splice(
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
                            <Form.Label>Add Quality</Form.Label>
                            <InputGroup onChange={this.handleChange}>
                                <Form.Control
                                    type="text"
                                    name="quality"
                                    value={this.state.quality}
                                    onChange={e => { this.setState({ quality: e.target.value }) }}
                                />
                                <InputGroup.Append>
                                    <ButtonManager
                                        onClick={async () => {
                                            await offersContainer.state.qualities.push(this.state.quality)
                                            this.setState({ quality: "" });
                                        }}
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
                        </td>
                        <td>
                            {offersContainer.state.possessions.map((value, index) => {
                                return (
                                    <tr>
                                        <td>{value}</td>
                                        <td><Icon
                                            size="large"
                                            name="minus circle"
                                            onClick={async () => {
                                                await offersContainer.state.possessions.splice(
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
                            <Form.Label>Add Possession</Form.Label>
                            <InputGroup onChange={this.handleChange}>
                                <Form.Control
                                    type="text"
                                    name="possession"
                                    value={this.state.possession}
                                    onChange={e => { this.setState({ possession: e.target.value }) }}
                                />
                                <InputGroup.Append>
                                    <ButtonManager
                                        onClick={async () => {
                                            await offersContainer.state.possessions.push(this.state.possession)
                                            this.setState({ possession: "" });
                                        }}
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
                        </td>
                    </tbody>
                </Table>
            </div>
        );
    }
}