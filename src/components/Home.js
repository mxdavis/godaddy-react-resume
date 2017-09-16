import React from 'react';

import Wave from '../images/Wave.png'
import BuildingThings from '../images/BuildingThings.png'
import Graduate from '../images/Graduate.png'
import Flatiron from '../images/Flatiron.png'

const Home = () =>  {
  return (
      <div className="App main home">

        <div className="text-padded">
          <h1>Hi <img src={Wave} alt="wave" width='5%' height='5%'/>  I'm Malki!</h1>

          <h3>
            I started my career as an administrative assistant, and worked my way up to head the IT department. As a recent <img src={Graduate} alt="graduate" width='3%' height='3%'/> graduate of the Flatiron School <img src={Flatiron} alt="flatiron" width='2%' height='2%'/>, and with a passion to code 👩‍💻 and learn, I'm looking forward to do the same in software development and have a future of building great things.
          </h3>
         </div>

        <div className="App gray">
          <img src={BuildingThings} alt="Building Things" width='60%'/>
        </div>
       </div>
  )
}


export default Home;
