import React from 'react'
import logo from '../images/meme-logo.png'

function Header() {
  return (
    <nav className='nav'>
        <img className='nav--logo' src={logo} alt='meme'/>
        <p>Meme Generator</p>

    </nav>
  )
}

export default Header