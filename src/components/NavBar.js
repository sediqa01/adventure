import React from 'react'
import ReactLogo from '../image/react-logo.png'

function NavBar() {
  return (
    <nav>
        <img src={ReactLogo}></img>
        <h3>ReactFact</h3>
        <h4>React Course- Project 1</h4>
    </nav>
  )
}

export default NavBar
