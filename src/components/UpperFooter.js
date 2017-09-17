import React from 'react';

import Linkedin from '../images/Linkedin.png'
import Github from '../images/Github.png'
import Blog from '../images/Blog.png'

const UpperFooter = () =>  {
  return (
      <div className="App">
        <div className="green">
          <div className="text-padded">
            <span className="boxes boxes-with-right-border">
              <a href="https://www.linkedin.com/in/malki-davis/" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="linked in" width='200px' height='200px'/>
              </a>
            </span>

            <span className="boxes boxes-with-no-border">
              <a href="https://github.com/mxdavis" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="github" width='315px' height='315px'/>
              </a>
            </span>

            <span className="boxes boxes-with-left-border">
              <a href="http://malki.rocks" target="_blank" rel="noopener noreferrer">
                <img src={Blog} alt="blog" width='200px' height='200px'/>
              </a>
            </span>
           </div>
         </div>
       </div>
  )
}


export default UpperFooter;
