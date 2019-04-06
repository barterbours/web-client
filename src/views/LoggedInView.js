import React, { Component } from "react";
import { Icon } from "semantic-ui-react";

export default class LoginView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Icon
                    size="large"
                    name="minus circle"
                    onClick={async () => {
                        this.setState({ refresh: !this.state.refresh });
                    }}
                />
            </div>
        );
    }
}