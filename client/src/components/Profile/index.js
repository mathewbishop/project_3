import React from 'react'
import PhotoHeader from '../PhotoHeader'
import "./style.css"

const Profile = (props) => (
  <div>
    <PhotoHeader photo={props.photo} />
      <h1 className="display-2">{props.petName}</h1>
      <hr />
      <br />
      <h3>Birthday: 2008-07-31</h3>
      <h3>Breed: Mix</h3>
      <h3>Color: White</h3>
      <h3>Markings: None</h3>
      <h3>Weight: 30lbs</h3>
      <h3>Preferred Food Brand: Wellness</h3>
      <h3>Microchip Number: 123</h3>
      <h3>Rabies Tag Number: 321</h3>
      <h3>Insurance: None</h3>
      <h3>Medications: None</h3>
      <h3>Allergies: Seasonal</h3>
      <h3>Special Care Notes: None</h3>
    <footer />
  </div>
)



export default Profile
