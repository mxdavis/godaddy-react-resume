import React from 'react';

import Portfolio from './Portfolio'
import Languages from './Languages'
import projects from '../data/projects'

import GoDaddyLogo from '../images/GoDaddyLogo.png'


const Home = () =>  {
  return (
      <div className="App main">

        <div className="text-padded">
          <h1>Hi 👋 I'm Malki and I would be a great fit for <img className="GoDaddyLogo" src={GoDaddyLogo} alt="GoDaddyLogo" width='12%' height='12%'/> on Marc's team:</h1>

          <ul className="center">
            <li>I work against the odds. I don't give up until I figure it out!</li>
            <li>I work all day and all night until the task is completed.</li>
            <li>I'm a fast learner and love learning new things.</li>
            <li>I'm an excellent team player and colleague.</li>
          </ul>

          <h1>Google wants me but I told them that Marc and his team are a better fit 😉:</h1>

          <ul className="center">
            <li>Marc's team is happy and supportive of one another.</li>
            <li>Marc's team is always there to share their knowledge and skills.</li>
            <li>Marc's team has great programmers who are creative, positive and upbeat.</li>
            <li> Marc's team works remotely, but you feel you are sitting next to your colleagues.</li>
            <li> Marc's team has got some great programmers nearby in Jerusalem that I could meetup with.</li>
          </ul>

          <h1>I need to work remotely 👩‍💻:</h1>

          <ul className="center">
            <li>I'd rather spend the extra 2 hours coding, than sitting in traffic.</li>
            <li>I can be there for my family at the times they need while having the energy and time to give my programming job my all.</li>
            <li>I have been working remote for 2+ years, and have been very successful in this setting.</li>
            <li>My work life balance is healthier which makes me a better worker and a happier person.</li>
            <li>It gives me more job opportunities in English while living in Israel.</li>
            <li> While remote is important, I need to feel I am working with real people, and Marc's team understands this.</li>
          </ul>

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
