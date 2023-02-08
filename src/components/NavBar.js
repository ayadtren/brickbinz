import React, { Component } from 'react'
c

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='nav'>
            <ul>
            <li>home</li> |
            <li>about us</li>| 
            <li>legos</li>   |
            <li>sumn else</li>
            </ul>
        </nav>
        <img src="/brickbinbanner.png" alt='random'></img>
      </div>
    )
  }
}

export default Navbar
