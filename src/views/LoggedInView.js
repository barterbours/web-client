import React, { Component } from "react";

import CenterView from "../styles/Center"


export default class LoginView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               <CenterView>
                    <iframe src=" https://www.google.com/maps/d/u/0/embed?mid=1taB2k4xcKSWfW2EaMFpNm6q6m2CvDZ-0" width="980" height="480" style={{ marginTop: "30px" }}
                        display="initial"
                        position="relative" />
                </CenterView>


            </div>
        );
    }
}