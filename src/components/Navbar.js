import React from 'react';
import { NavLink } from 'react-router-dom'
import MalkiLogo from '../images/MalkiLogo.svg'

const Navbar = () =>  {
  return (
    <div className="App center">
      <nav className="uk-navbar">
        <div className="uk-navbar-flip">
          <ul className="uk-navbar-nav fixed main-nav">
            <li>
              <NavLink to="/">
                <img src={MalkiLogo} alt="MalkiDavis" />
              </NavLink>
            </li>

            <li className="nav-text">
              <NavLink to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-text">
              <NavLink to="/experience">
                Experience
              </NavLink>
            </li>

            <li className="nav-text">
              <NavLink to="/contact">
                Contact
              </NavLink>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  )
}


export default Navbar;
