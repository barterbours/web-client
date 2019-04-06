import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";
import Swal from "sweetalert2";

export default class LoginView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Logged Out View</h1>
            </div>
        );
    }
}