import React from 'react';
import { NavLink } from 'react-router-dom'
import MalkiLogo from '../images/MalkiLogo.svg'


const Navbar = () =>  {
  return (
    <div className="AppOther">
      <nav className="uk-navbar fixed">
        <div className="uk-navbar-flip">
          <ul className="uk-navbar-nav">
            <li>

              <img src={MalkiLogo} alt="MalkiDavis" />

            </li>

          </ul>
        </div>
      </nav>
    </div>
  )
}


export default Navbar;
