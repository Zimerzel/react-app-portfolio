import React from 'react'; 
import ProjectCards from '../Project'
import portfolio from '../../Portfolio.json';

function portfolioCards (props) {
  return <div>{props.children}</div>;
}

function Portfolio () {  

    return (
      <section>
        <div>
          <h1 className="title">Portfolio</h1>
        </div>
        <portfolioCards id="card-info">
          {portfolio.map((project) =>(
            <ProjectCards key={project.id} name={project.name} image={project.image} github={project.github} deploy= {project.deploy} topics= {project.topics} />
          ))}
        </portfolioCards>
      </section>
    
    );
  }

export default Portfolio;