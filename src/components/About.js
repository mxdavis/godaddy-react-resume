import React from 'react';

import MalkiPic from '../images/MalkiPic.png'
import Happy from '../images/Happy.png'
import Graduate from '../images/Graduate.png'
import Flatiron from '../images/Flatiron.png'

const About = () =>  {
  return (
    <div className="App main">
      <div className="text-padded">
        <h1>A Little About Me</h1>
        <img src={MalkiPic} alt="malki" width='40%' height='40%'/>
        <h3>Born and bred in New York, now living in the Jerusalem Hills, Israel.
           <br/>
            I'm a wife, mother, and Full stack web developer with a background in IT and a passion for coding.
            <br />
            I love problem solving, tackling challenges and learning new things. I work hard and follow through on anything I start until it is completed.
            <br />
            I started my career as an administrative assistant, and worked my way up to head the IT department. As a recent <img src={Graduate} alt="graduate" width='3%' height='3%'/> graduate of the Flatiron School <img src={Flatiron} alt="flatiron" width='2%' height='2%'/>, and with a passion to code <span role="img" aria-label="At Computer">👩‍💻</span>‍ and learn, I'm looking forward to do the same in software development and have a future of building great things.
            <br />
            When I'm not programming you can find me hanging out with my family, taking trips, baking, and just enjoying the outdoors.
        </h3>
        <img src={Happy} alt="happy" width='8%' height='8%'/>
      </div>
    </div>
  )
}


export default About;
