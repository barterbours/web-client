import React, { Component } from 'react'
import { Table,Button } from "react-bootstrap";

class Matching extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: this.handleClick(),
    random1: this.handleClick(), random2:this.handleClick() };
  }

  handleClick() {
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    return Math.floor(rand);
  }

  

  render() {
    return (
      <div style={{ marginTop: "30px" }}  >

    <h1 className="text-center"> Registered People List </h1>
    <div className="">
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>Percantage</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{this.state.random1} %</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><button >Message</button>
       </td>

        </tr>
        <tr>
          <td>{this.state.random2} %</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td><button >Message</button>
       </td>
        </tr>
        <tr>
          <td>{this.state.random} %</td>
          {/* <td colSpan="2">Larry the Bird</td> */}
          <td>Larry the Bird</td>
          <td>Thornton</td>
          <td>@twitter</td>
          <td><button >Message</button>
       </td>
        </tr>
      </tbody>
    </Table>
    </div>
      </div>
    )
  }
}

export default Matching;
