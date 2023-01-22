import React from 'react'

function Menu( props ) {
  return (
    <ul>
      <li>
        <a href="#home" onClick={props.action}>Home</a>
      </li>
      <li>
        <a href="#bio" onClick={props.action}>Bio</a>
      </li>
      <li>
        <a href="#portfolio" onClick={props.action}>Portfolio</a>
      </li>
      <li>
        <a href="#social" onClick={props.action}>Social</a>
      </li>
      <li>
        <a href="#social" onClick={props.action}>Contact</a>
      </li>
    </ul>
  )
}

export default Menu