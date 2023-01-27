import React, { Component } from 'react'
import "./NavbarStyles.css"

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
            <ul>
            <li>home</li> |
            <li>about us</li> |
            <li>legos</li>  | 
            <li>sumn else</li>
            </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar
