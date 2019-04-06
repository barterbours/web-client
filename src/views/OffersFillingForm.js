import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { offersContainer } from "../containers/offers";
import { Icon } from "semantic-ui-react";


export default class OffersFillingForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            refresh: false
        };
    }

    handleChange(e) {
        if (e.target.name === "quality" && e.target.dataset.id !== "") {
            offersContainer.state.quality.sensorsDescriptions[
                e.target.dataset.id
            ] = e.target.value;
        }
        if (
            e.target.name === "possession" &&
            e.target.dataset.id !== ""
        ) {
            offersContainer.state.possesion.subAssembliesDescriptions[
                e.target.dataset.id
            ] = e.target.value;
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
                        </td>
                    </tbody>
                </Table>
            </div>
        );
    }
}