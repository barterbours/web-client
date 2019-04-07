import React, { Component } from 'react'
import { Table, Button } from "react-bootstrap";
import Swal from 'sweetalert2';

class Matching extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleReply = this.handleReply.bind(this)
    this.state = {
      random: this.handleClick(),
      random1: this.handleClick(), random2: this.handleClick()
    };
  }

  handleClick() {
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    return Math.floor(rand);
  }

  async handleReply(lala) {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputPlaceholder: 'Type your message here...',
      showCancelButton: true,
      confirmButtonText: '➤ Send ',
    })

    if (text) {
      Swal.fire("Message sent to  " + lala)
    }
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
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.random1} %</td>
                <td>Michal</td>
                <td>Otto</td>
                <td>swingingChair49@usa.pl</td>
                <td><button onClick={() => { this.handleReply("swingingChair49@usa.pl") }}>Message</button>
                </td>

              </tr>
              <tr>
                <td>{this.state.random2} %</td>
                <td>Gabriela</td>
                <td>Thornton</td>
                <td>fatJackob666@wp.pl</td>
                <td><button onClick={() => { this.handleReply("fatJackob666@wp.pl") }}>Message</button>
                </td>
              </tr>
              <tr>
                <td>{this.state.random} %</td>
                {/* <td colSpan="2">Larry the Bird</td> */}
                <td>Marcello</td>
                <td>Bardus</td>
                <td>larry.birdman@gmail.com</td>
                <td><button onClick={() => { this.handleReply("larry.birdman@gmail.com") }}>Message</button>
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
