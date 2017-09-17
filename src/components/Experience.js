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

  </div>
  )
}


export default Experience;
