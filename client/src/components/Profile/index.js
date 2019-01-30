import React from 'react'
import PhotoHeader from '../PhotoHeader'
import "./style.css"

const Profile = (props) => (
  <div>
    <PhotoHeader photo={props.photo} />
      <h1 className="display-2">{props.petName}</h1>
      <hr />
      <br />
      <h3>Birthday:</h3>
      <h3>Breed:</h3>
      <h3>Color:</h3>
      <h3>Markings:</h3>
      <h3>Weight:</h3>
      <h3>Preferred Food Brand:</h3>
      <h3>Microchip Number:</h3>
      <h3>Rabies Tag Number:</h3>
      <h3>Insurance:</h3>
      <h3>Medications:</h3>
      <h3>Allergies:</h3>
      <h3>Special Care Notes:</h3>
    <footer />
  </div>
)



export default Profile
