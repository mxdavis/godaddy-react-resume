import React from 'react';

const Portfolio = ({project}) =>  {
  return (
    <div className="green dark-text right-padding">
      <h3><a href={project.github}>{project.name}</a></h3>
      <p>{project.description}</p>
      <ul>
        {project.details.map(detail => <p key={Math.floor((Math.random() * 1000) + 1)}>+ {detail}</p>)}
      </ul>
    </div>
  )
}

export default Portfolio;
