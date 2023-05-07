import React from 'react'
import logo from '../../Assets/faviconio-logo/logo.png'

export default function Title(props) {
  return (
    <div>
      <img src={logo} style={props.imgstyle}/>
    </div>
  )
}
