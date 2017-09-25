 const projects = [
  {
    key: "456",
    name: "Client Billing App",
    github: "https: github.com/mxdavis/timer-billing-client",
    description: "A billing app with clients, projects, and tasks",
    details: ["RoR for the backend API and postgres. Follows RESTful routes.", "React on the client side to keep pages from reloading and loading async.", "Redux to help store data across pages", "Used isomorphic fetch for GET, POST, and PATCH requests.", "Rails testing with FactoryGirl", "Deployed to heroku."]
  },
  {
    key: "324",
    name:"Recipes App",
    github: "https://github.com/mxdavis/rails-project-recipe-manager",
    description: "Users can search, create, and edit recipes",
    details: ["Rails implementation for controllers, and views. Follows RESTful routes.", "Utilized many view partials to keep code DRY across pages", "Implemented AJAX requests, Handlebars, Jquery, and Javascript.", "Employed Omniauth to allow users to sign-in via Google.", "Implemented authentication with bCrypt and authorization with admin and user roles."]
  },
  {
    key: "152",
    name: "Real Estate Listings with Sinatra",
    github: "https://github.com/mxdavis/Sinatra-Project-Real-Estate-Listings",
    description: "A billing app with clients, projects, and tasks",
    details: ["Built a CRUD site for Real Estate Listings using Ruby/Sinatra with bCrypt authentication.", "Used Sinatra to render the views with RESTful routes.", "Used ActiveRecord to set up the models and validators."]
  },
  {
    key: "876", 
    name: "Top Recipes Gem",
    github: "https://github.com/mxdavis/recipes-from-food2fork-cli/",
    description: "Scraped recipes from food2fork.com and created a Ruby Gem.",
    details: ["Created a CLI with Ruby for the backend functionality.", "Scraped the website food2fork.com with Nokogiri.", " Uploaded my Top Recipes Gem to RubyGems.com."]
  }
]

export default projects
