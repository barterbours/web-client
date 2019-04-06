import React from "react";
import { Row, Col, Container } from "react-bootstrap";


export default class CenterView extends React.Component {
    render() {
        return (
            <Row >
                <Col />
                <Col >{this.props.children}</Col>
                <Col />
            </Row>
        )
    }
}