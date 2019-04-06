import React, { Component } from "react";
import "./App.css";
import { Provider } from "unstated";
import { Switch, Route } from "react-router-dom";

import { authContainer } from './containers/authentication'

import { UnloggedHeader } from './components/UnloggedHeader'
import { LoggedHeader } from './components/LoggedHeader'
import LoginView from './views/LoginView'
import LoggedInView from './views/LoggedInView'
import LoggedOutView from './views/LoggedOutView'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getProperHeader() {
    if (window.sessionStorage.getItem("isLoggedIn")) {
      return (
        <LoggedHeader refresh={() => { this.setState({ refresh: !this.state.refresh }) }} />
      )
    }
    return (
      <UnloggedHeader
        refresh={() => {
          this.setState({ refresh: !this.state.refresh });
        }}
      />
    )
  }

  render() {
    return (
      <div
        className="switch"
      //style={{ backgroundColor:  }}
      >
        <Provider>
          {this.getProperHeader()}
          <Switch>
            <Route
              exact
              path="/"
              component={LoggedOutView}
            />
            <Route path="/LoginView" component={LoginView} />
            <Route path="/LoggedInView" component={LoggedInView} />
            <Route path="/LoggedOutView" component={LoggedOutView} />
          </Switch>
        </Provider>
      </div>
    );
  }
}

//<Route path="/" component={} />

export default App;
