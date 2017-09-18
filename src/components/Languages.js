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
        <h1>Favorite Technologies</h1>
        <div className="uk-grid">
          <div className="uk-width-1-5 slight-padding">
            <img src={RubyLogo} alt="Ruby" height="50%" width="50%"/>
          </div>
          <div className="uk-width-1-5 slight-padding">
            <img src={RailsLogo} alt="Rails" height="50%" width="50%" />
          </div>
          <div className="uk-width-1-5 slight-padding">
            <img src={JSLogo} alt="JS" height="50%" width="50%"/>
          </div>
          <div className="uk-width-1-5 slight-padding">
            <img src={ReactLogo} alt="React" height="50%" width="50%"/>
          </div>
          <div className="uk-width-1-5 slight-padding">
            <img src={ReduxLogo} alt="Redux" height="50%" width="50%"/>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Languages;
