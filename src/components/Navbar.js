import React from 'react';
import { NavLink } from 'react-router-dom'
import MalkiLogo from '../images/MalkiLogo.svg'

const Navbar = () =>  {
  return (
    <div className="App center">
      <nav className="uk-navbar">

          <ul className="uk-navbar-nav fixed main-nav">
            <li>
              <NavLink to="/">
                <img src={MalkiLogo} alt="MalkiDavis" width="300%" height="300%" />
              </NavLink>
            </li>

            <li className="nav-text">
              <NavLink to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-text nav-padding">
              <NavLink to="/experience">
                Experience
              </NavLink>
            </li>

            <li className="nav-text uk-navbar-right uk-float-right">
              🇮🇱 <a href="tel:072-255-9098">072-255-9098</a>
            </li>

            <li className="nav-text uk-navbar-right uk-float-right">
              🇱🇷 <a href="tel:516-986-8732">516-986-8732</a>
            </li>

            <li className="nav-text uk-navbar-right uk-float-right">
              ✉️ <a href="mailto:md01@me.com">md01@me.com</a>
            </li>

          </ul>

      </nav>
    </div>
  )
}


export default Navbar;
