import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";
import Swal from "sweetalert2";
import './login.css'
// import "bootstrap-social.less";



export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  // // Downloads oauth.js from CDN, pretty much like adding external scripts
  // componentDidMount () {
  //   const oauthScript = document.createElement("script");
  //   oauthScript.src = "https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js";

  //   document.body.appendChild(oauthScript);
  // }

  // handleClick(e) {
  //   // Prevents page reload
  //   e.preventDefault();

  //   // Initializes OAuth.io with API key
  //   // Sign-up an account to get one
  //   window.OAuth.initialize('BTfcjv51Sd9sJJrfLVp8QyIBZUM');

  //   // Popup Github and ask for authorization
  //   window.OAuth.popup('github').then((provider) => {

  //     // Prompts 'welcome' message with User's name on successful login
  //     // Check console logs for additional User info
  //     provider.me().then((data) => {
  //       console.log("data: ", data);
  //       alert("Welcome " + data.name + "!");
  //     });

  //     // You can also call Github's API using .get()
  //     provider.get('/user').then((data) => {
  //        console.log('self data:', data);
  //     });

  //   });

      
  // }


  render() {
    return (
        <div className="login">
          <h2  className="text-success text-center">Login</h2>
          <a href=" #"  className="btn btn-danger">
             <span className="fa fa-google"></span>  | Sign in with google
           </a>
        </div>

.login{
  margin: 0 auto;
  width: 300px;
  margin-top: 170px;
}
.btn{
  padding: 10px;
  width: 300px;
  font-size: 21px;
  margin-top: 15px;
}
    );
  }
}