
import React, { Component } from 'react'

import { Route} from 'react-router-dom'

class Sidebar extends Component {
  render() {
    return (
    <div>
      <div className="sidenav">
        <a href="/address"><i class="fa fa-user"></i> About</a>
        <a href=" #"> <i class="fa fa-tasks"></i> Services</a>
        <a href=" #"> <i class="fa fa-users"></i> Clients</a>                 
      </div>

  

    </div>
    )
  }
}

export default Sidebar;

