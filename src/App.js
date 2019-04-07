import React, { Component } from "react";
import "./App.css";
import { Provider } from "unstated";
import { Switch, Route } from "react-router-dom";

import { authContainer } from './containers/authentication'

import { UnloggedHeader } from './headers/UnloggedHeader'
import { LoggedHeader } from './headers/LoggedHeader'

import LoginView from './views/LoginView'
import LoggedInView from './views/LoggedInView'
import LoggedOutView from './views/LoggedOutView'
import DataFillingForm from './views/DataFillingForm'
import MatchingView from './views/MatchingView'
import OffersFillingForm from './views/OffersFillingForm'
import SimpleChat from './views/SimpleChat'
import GeoLocation from './views/GeoLocation'
import Registe from './views/Registe'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getProperRoot() {
    if (window.sessionStorage.getItem("isLoggedIn")) {
      return LoggedInView
    }
    {
      return LoggedOutView
    }
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
              component={this.getProperRoot()}
            />
            <Route path="/LoginView" component={LoginView} />
            <Route path="/DataFillingForm" component={DataFillingForm} />
            <Route path="/MatchingView" component={MatchingView} />
            <Route path="/OffersFillingForm" component={OffersFillingForm} />
            <Route path="/SimpleChat" component={SimpleChat} />
            <Route path="/location" component={GeoLocation} />
            <Route path="/register" component={Registe} />
          </Switch>
        </Provider>
      </div>
    );
  }
}

//<Route path="/" component={} />

export default App;
