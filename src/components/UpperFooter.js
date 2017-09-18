import React from 'react';

import Linkedin from '../images/Linkedin.png'
import Github from '../images/Github.png'
import Blog from '../images/Blog.png'

const UpperFooter = () =>  {
  return (
      <div className="App">
        <div className="green">
          <div className="text-padded">
            <div className="uk-grid">
              <div className="uk-width-1-3 slight-padding">
                <a href="https://www.linkedin.com/in/malki-davis/" target="_blank" rel="noopener noreferrer">
                  <img src={Linkedin} alt="linked in" width='20%' height='20%'/>
                </a>
              </div>

              <div className="uk-width-1-3 slight-padding border-left-right">
                <a href="https://github.com/mxdavis" target="_blank" rel="noopener noreferrer">
                  <img src={Github} alt="github" width='20%' height='20%'/>
                </a>
              </div>

              <div className="uk-width-1-3 slight-padding">
                <a href="http://malki.rocks" target="_blank" rel="noopener noreferrer">
                  <img src={Blog} alt="blog" width='20%' height='20%'/>
                </a>
              </div>
             </div>
           </div>
         </div>
       </div>
  )
}


export default UpperFooter;
