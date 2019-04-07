import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from "./Map";

// import './style.css';

const data = [
  {
    name: "Oslo",
    location: [59.923043, 10.752839]
  },
  {
    name: "Stockholm",
    location: [59.339025, 18.065818]
  },
  {
    name: "Copenhagen",
    location: [55.675507, 12.574227]
  },
  {
    name: "Berlin",
    location: [52.521248, 13.399038]
  },
  {
    name: "Paris",
    location: [48.856127, 2.346525]
  }
];

const Display = () => (
  <div style={{ width: "80", height: "100%" }}>
    <Map data={data} center={{ lat: 59.339025, lng: 18.065818 }} zoom={4} />
  </div>
);


export default Display;
