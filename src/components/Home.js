import React from 'react';

import Portfolio from './Portfolio'
import Languages from './Languages'
import projects from '../data/projects'

import Wave from '../images/Wave.png'
import GoDaddyLogo from '../images/GoDaddyLogo.png'


const Home = () =>  {
  return (
      <div className="App main">

        <div className="text-padded">
          <h1>Hi <img src={Wave} alt="wave" width='5%' height='5%'/>  I'm Malki and </h1>
          <h1 className="no-bottom-padding">I would love to work for <img src={GoDaddyLogo} alt="GoDaddyLogo" width='25%' height='25%'/></h1>

          <h3>
            GoDaddy has an awesome community and encourages team work. I thrive from being a team player, and working in a positive and friendly atmosphere. <br/>
            I have lots of experience working remotely: I currently am a Remote Tech Coach for Flatiron School; I am an IT Consultant for small businesses remotely; I run a weekly remote JavaScript meetup where we tackle some CodeWars together; I attended the online Flatiron School where I made many friends, and attended many online meetings, starting off our week with "Motivation Monday" and ending with "Thoughtful Thursday".
            <br/>
            I love learning new things, and to be challenged. GoDaddy's innovative technology will keep me learning, and solving new problems daily. <br />If GoDaddy would hire me I look forward to a future of building great things!
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
