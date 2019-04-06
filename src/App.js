import React, { Component } from "react";
import "./App.css";
import { Provider } from "unstated";
import { Switch, Route } from "react-router-dom";
import { UnloggedHeader } from './components/UnloggedHeader'
import { LoggedHeader } from './components/LoggedHeader'
import LoginView from './views/LoginView'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  isLoggedIn(){
    return false
  }

  getProperHeader() {
    if (this.isLoggedIn()) {
      return(
        <LoggedHeader refresh={() => {this.setState({refresh: !this.state.refresh})}}/>
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
            />
            <Route path="/LoginView" component={LoginView} />
          </Switch>
        </Provider>
      </div>
    );
  }
}

//<Route path="/" component={} />

export default App;
