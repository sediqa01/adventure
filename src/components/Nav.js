import React from 'react'
import Troll from '../image/Troll-Face-Meme-PNG.webp'

function Nav() {
  return (
    <header>
        <img src={Troll} className='logo'></img>
        <h3 className='header-title'>Meme Genarator</h3>
        <h4 className='header-txt'>Course Project</h4>
    </header>
  )
}

export default Nav