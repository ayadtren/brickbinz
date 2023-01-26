import React, { Component } from 'react'
import "./NavbarStyles.css"

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
            <p>home</p> |
            <p>about us</p> |
            <p>Legos</p>  |
            <p>something else</p> 
        </nav>
      </div>
    )
  }
}

export default NavBar
