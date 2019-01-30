import React from 'react'
import "./style.css"
import ProfilePhoto from "../ProfilePhoto"

const PhotoHeader = (props) => (
  <header>
     <div className='accent' />
    <ProfilePhoto image={props.photo} />
  </header>
)

export default PhotoHeader
