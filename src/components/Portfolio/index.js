import React from 'react'; 
import ProjectCards from '../Project'
import portfolio from '../../data';
import 'bootstrap/dist/css/bootstrap.min.css';

function portfolioCards (props) {
  return <div className="portfolioCards">{props.children}</div>;
}

function Portfolio () {  

    return (
      <>
      <div>
        <div className="project">
          <h2 className="title">Portfolio</h2>
        </div>
        <div id="card-container">
          <portfolioCards id="card-items">
            {portfolio.map((project) =>(
              <ProjectCards key={project.id} name={project.name} image={project.image} github={project.github} deploy= {project.deploy} topics= {project.topics} />
            ))}
          </portfolioCards>
        </div>
      </div>
    </>
    );
  }

export default Portfolio;