import React from 'react';

const Experience = () =>  {
  return (
    <div className="App main">

      <h1> Portfolio </h1>

      <div className="green">
        <div className="text-padded">
          <h3>Client Billing App - <a href="https://github.com/mxdavis/timer-billing-client" target="_blank" rel="noopener noreferrer">Github</a></h3>
          <p>A billing app with clients, projects, and tasks</p>
          <p>
            + RoR for the backend API and postgres.
            + React/Redux as the client side.
            + Used isomorphic fetch for GET, POST, and PATCH requests.
            + Deployed to heroku.
          </p>
        </div>
      </div>

      <div className="gray">
        <div className="text-padded dark-text">
          <h3>Recipes App - <a href="https://github.com/mxdavis/rails-project-recipe-manager" target="_blank" rel="noopener noreferrer">Github</a></h3>
          <p>Users can search, create, and edit recipes</p>
          <p>
            + Ruby for backend functionality.
            + Rails implementation for controllers, and views. Follows RESTful routes.
            + Utilized many view partials to keep code DRY across pages
            + Implemented AJAX requests, Handlebars, Jquery, and Javascript.
            + Employed Omniauth to allow users to sign-in via Google.
            + Implemented authentication with bCrypt and authorization with admin and user roles.
          </p>
        </div>
      </div>

      <div className="green">
        <div className="text-padded">
          <h3>Real Estate Listings with Sinatra - <a href="https://github.com/mxdavis/Sinatra-Project-Real-Estate-Listings" target="_blank" rel="noopener noreferrer">Github</a></h3>
          <p>A billing app with clients, projects, and tasks</p>
          <p>
            + Built a CRUD site for Real Estate Listings using Ruby/Sinatra with bCrypt authentication.
            + Used Sinatra to render the views from the controller with RESTful routes.
            + Used ActiveRecord to set up the models and validators.
          </p>
        </div>
      </div>

      <div className="gray">
        <div className="text-padded dark-text">
          <h3>Top Recipes Gem  - <a href="https://github.com/mxdavis/recipes-from-food2fork-cli/" target="_blank" rel="noopener noreferrer">Github</a></h3>
          <p>Scraped top ten recipes from food2fork.com and created a Ruby Gem CLI.</p>
          <p>
            + Created a CLI with Ruby for the backend functionality.
            + Scraped the website food2fork.com with Nokogiri, a Ruby Gem.
            + Uploaded my Top Recipes Gem to RubyGems.com.
          </p>
        </div>
      </div>

      <h1> Work History </h1>

      <div className="green">
        <div className="text-padded">
          <h3>Flatiron School, New York City (Working Remotely from Jerusalem, Israel)</h3>
          <p>Technical Coach, September 2017 - present</p>
          <p>
            + Help students learn to program using the Socratic Method.
            + One on one screenshares with students programming with the student and further explaining concepts they do not understand.
            + Handling multiple chats with students troubleshooting their code
          </p>
        </div>
      </div>

      <div className="gray">
        <div className="text-padded dark-text">
          <h3>Yalabot AI, Jerusalem, Israel</h3>
          <p>Intern (one day a week), February 2017 - August 2017</p>
          <p>
            + Working with Elixir, Erlang, Ecto, and Redis help fix bugs and implement new feature requests.
            + Created branches, commits, pull requests, rebase, merged branches and resolved conflicts with Github as a team user.
            + Test Driven Development; created tests with mock and  exVCR.
          </p>
        </div>
      </div>

      <div className="green">
        <div className="text-padded">
          <h3>Self Employed IT Consultant, Jerusalem, Israel</h3>
          <p>IT Consultant, February 2016 - present</p>
          <p>
            + Maintain phone servers (FreePBX, Asterisk), configuring phones, and fixing issues that come up.
            + Fix software related issues on a PC or Mac, and small hardware related issues, or assess and send to a suitable repair center.
            + Maintenance and code updates of websites/wordpress, or serve as the liaison between the client and the developer.
          </p>
        </div>
      </div>

      <div className="gray">
        <div className="text-padded dark-text">
          <h3>Schwell Wimpfheimer & Associates, Jerusalem, Israel</h3>
          <p>System Administrator, August 2009 - October 2015</p>
          <p>
            + Keeping the office up to date on the latest technologies, moved all infrastructure in the cloud creating a better remote.\ experience for users who frequently work out of the office, and it keeps downtime very low since there are big companies supporting the infrastructure.
            + Lowered the firm’s IT expenses (on both equipment and support) by 60%.
            + Manage 30 computers, 25 phones, and all IT related hardware for the 20 person firm located in NYC and Israel.
          </p>
        </div>
      </div>

  </div>
  )
}


export default Experience;
