import React, { Component } from 'react'

import { Route } from 'react-router-dom'
import { Icon } from "semantic-ui-react";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidenav">
        <sidenavHeader><Icon name="user circle" size="large" /> Username</sidenavHeader>
        <c />
        <c />
        <c><Icon name="mix" /> All mail</c>
        <c><Icon name="mail outline" /> Unread</c>
        <c><Icon name="star half full" /> Starred</c>
      </div>
    )
  }
}

export default Sidebar;

