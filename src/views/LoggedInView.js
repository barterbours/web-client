// import React, { Component } from "react";
// import CenterView from "../styles/Center"


// const data = [
//     {
//       name: "Oslo",
//       location: [59.923043, 10.752839]
//     },
//     {
//       name: "Stockholm",
//       location: [59.339025, 18.065818]
//     },
//     {
//       name: "Copenhagen",
//       location: [55.675507, 12.574227]
//     },
//     {
//       name: "Berlin",
//       location: [52.521248, 13.399038]
//     },
//     {
//       name: "Paris",
//       location: [48.856127, 2.346525]
//     }
//   ];

// export default class LoginView extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <CenterView>
//                 <iframe src=" https://www.google.com/maps/d/u/0/embed?mid=1taB2k4xcKSWfW2EaMFpNm6q6m2CvDZ-0" width="980" height="480" style={{ marginTop: "30px" }}
//                     display="initial"
//                     position="relative" />
//             </CenterView>
//         );
//     }
// }

import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from "./Map";
import CenterView from "../styles/Center"

// import './style.css';

const data = [
  {
    name: "Michal",
    location: [52.246883,21.0629092]
  },
  {
    name: "Gabriela",
    location: [52.246883,21.0649092]
  },
  {
    name: "Marcello",
    location: [52.246860, 21.063320]
  },
  {
    name: "Maciej",
    location: [52.246883,21.0619092]
  },
  {
    name: "Rahul",
    location: [52.2467724,21.0628948]
  }
];

const LoginView  = () => (
  <CenterView>
  <h2 className="text-center" style={{ marginTop: "30px" }}> Registered User List </h2>
   <div style={{ width: "900px", height:"500px", border: "2px solid green" }}>
   
    <Map data={data} center={{ lat: 52.246883, lng: 21.0619092 }} zoom={17} />
  </div>

  </CenterView>
);


export default LoginView ;
