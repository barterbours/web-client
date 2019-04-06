import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./login.css";

import Sidebar from "./sidebar"

export default class LoginView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* <Container> */}
                <Row>
                    <Col sm={2} className="side">
                       <Sidebar />
                    </Col>

                    <Col sm={9} className="main">
                        <iframe src=" https://www.google.com/maps/d/u/0/embed?mid=1taB2k4xcKSWfW2EaMFpNm6q6m2CvDZ-0" width="980" height="480" style={{ marginTop: "30px"}}></iframe>
                    </Col>
                </Row>
                {/* </Container>  */}
                
               
            </div>
        );
    }
}