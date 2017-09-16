import React from 'react';

import MalkiPic from '../images/MalkiPic.png'
import Happy from '../images/Happy.png'

const About = () =>  {
  return (
    <div className="App main home">
      <div className="text-padded">
        <h1>A Little About Me</h1>
        <img src={MalkiPic} alt="malki" width='40%' height='40%'/>
        <h3>Born and bred in New York, now living in the Jerusalem Hills in Israel.
           <br/>
            I'm a wife, mother, and Full stack web developer with a background in IT and a passion for coding.
            <br />
            I love problem solving, tackling challenges and learning new things. I work hard and follow through on anything I start until it is completed.
            <br />
            As a graduate of Flatiron School, I learned HTML & CSS, Ruby, Rails, SQL, JavaScript, React and Redux.
            <br />
            I did a part time remote internship in Elixir/Phoenix at Yala AI.
            <br />
            When I'm not programming you can find me hanging out with my family, taking trips, and hanging out outdoors.
        </h3>
        <img src={Happy} alt="happy" width='8%' height='8%'/>
      </div>
    </div>
  )
}


export default About;
