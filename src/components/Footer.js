import React from 'react';
import { NavLink } from 'react-router-dom'

const Footer = () =>  {
  return (
    <div className="App footer">
      <nav className="uk-navbar">
        <div className="uk-navbar-flip">
          <ul className="uk-navbar-nav fixed main-nav footer">

            <li className="nav-text left-spacing">
              <NavLink to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-text left-spacing">
              <NavLink to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-text left-spacing">
              <NavLink to="/experience">
                Experience
              </NavLink>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  )
}


export default Footer;
