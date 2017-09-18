import React from 'react';

import RubyLogo from '../images/RubyLogo.png'
import ReduxLogo from '../images/ReduxLogo.png'
import ReactLogo from '../images/ReactLogo.png'
import JSLogo from '../images/JSLogo.png'
import RailsLogo from '../images/RailsLogo.png'

const Languages = () =>  {
  return (
    <div className="App main">
      <div className="text-padded green-text">
        <h1>Some of My Faves</h1>
        <div className="uk-grid">
          <div className="uk-width-1-5 slight-padding">
            <img src={RubyLogo} alt="Ruby" />
          </div>
          <div className="uk-width-1-5 slight-padding">
            <img src={RailsLogo} alt="Rails" />
          </div>
          <div className="uk-width-1-5 slight-padding">
            <img src={JSLogo} alt="JS" />
          </div>
          <div className="uk-width-1-5 slight-padding">
            <img src={ReactLogo} alt="React" />
          </div>
          <div className="uk-width-1-5 slight-padding">
            <img src={ReduxLogo} alt="Redux" />
          </div>
        </div>
      </div>
    </div>
  )

}

export default Languages;
