import React, { Component } from 'react'
import "./Geo.css";
// import "./index.js"




class GeoLocation extends Component {
  render() {
    return (
      <div class="container">

      <h4>Address</h4>
    
      <p>You can click the button below to use your current location as your shipping address</p>
    
      <div id="map">
      </div>
    
      <p id="current_position"></p>
    
      <button id="showMe" class="btn center-align">
        <i class="material-icons">
            my_location
        </i>
        Use My Location
      </button>
    
      <form id="billingAddress">
    
        <div id="locationList"></div>
        <br/>
    
        <div class="input-field">
          <textarea class="materialize-textarea" id="address" type="text"></textarea>
          <label class="active" for="address">Address (Area and Street)</label>
        </div>
    
        <div class="input-field">
          <input id="locality" type="text" />
          <label class="active" for="locality">Locality</label>
        </div>
    
        <div class="input-field">
          <input id="city" type="text" />
          <label class="active" for="city">City/District/Town</label>
        </div>
        <div class="input-field">
          <input id="postal_code" type="text" />
          <label class="active" for="pin_code">Pin Code</label>
        </div>
    
        <div class="input-field">
          <input id="landmark" type="text" />
          <label class="active" for="landmark">Landmark</label>
        </div>
    
        <div class="input-field">
          <input id="state" type="text" />
          <label class="active" for="State">State</label>
        </div>

        <button id="save" class="btn center-align bg-success">
          <i class="material-icons">
              my_location
          </i>
            Save Data
      </button>
    
      </form>
    </div>
    
    )
  }
}

export default GeoLocation;