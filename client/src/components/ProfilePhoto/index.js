import React from 'react'
import "./style.css"

const ProfilePhoto = (props) => (
  <div className='profile-photo'>
    <img src={props.image} id="profileImg" />
  </div>
)


export default ProfilePhoto
