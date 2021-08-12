import React from 'react'; 
import ProjectCards from '../Project'
import portfolio from '../../data';
import 'bootstrap/dist/css/bootstrap.min.css';

function portfolioCards (props) {
  return <div className="portfolioCards">{props.children}</div>;
}

function Portfolio () {  

    return (
      <section>
        <div className="project">
          <h1 className="title">Portfolio</h1>
        </div>
          <portfolioCards id="cards-data">
            {portfolio.map((project) =>(
              <ProjectCards key={project.id} name={project.name} image={project.image} github={project.github} deploy= {project.deploy} topics= {project.topics} />
            ))}
          </portfolioCards>
      </section>
    
    );
  }

export default Portfolio;