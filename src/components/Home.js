import React from 'react';

import Portfolio from './Portfolio'
import Languages from './Languages'
import projects from '../data/projects'

import GoDaddyLogo from '../images/GoDaddyLogo.png'


const Home = () =>  {
  return (
      <div className="App main">

        <div className="text-padded">
          <h1>Hi 👋 I'm Malki and I would love to work for <img src={GoDaddyLogo} alt="GoDaddyLogo" width='15%' height='15%'/></h1>

          <h3>
            GoDaddy has an awesome community that encourages teamwork. I thrive in team-based environments, and working in a positive and friendly atmosphere. <br/>
            A recent graduate of Flatiron School’s Online Program, I have a lot of experience working remotely: I am currently a Remote Tech Coach for the Flatiron School, an off-site IT Consultant for a couple of small businesses, and I run a weekly remote JavaScript meetup with friends I made at Flatiron, where we tackle problems on CodeWars together.
            <br/>
            I love learning new things, and being challenged. GoDaddy's innovative environment will keep me learning, and solving new problems.
            <br />
            I'm excited about the opportunity to work in such a creative atmosphere!
          </h3>
         </div>

        <div className="gray">
          <div className="text-padded green-text">
            <h1> Some Things I've Built</h1>
            <div className="uk-grid">
              {projects.map(project => <Portfolio project={project}/>)}
            </div>
          </div>
         </div>

         <Languages />
        </div>
  )
}


export default Home;
