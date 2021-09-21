import React from 'react'; 
import ProjectCards from './Project'
import portfolio from '../../data';

function portfolioCards (props) {
  return <div className="portfolioCards">{props.children}</div>;
}

function Portfolio () {  

    return (
      <>
      <div>
        {/* <div id="cfoglayer_01" class="fog">
          <div class="image01"></div>
            <div class="image02"></div>
        </div>
        <div id="cfoglayer_02" class="fog">
          <div class="image01"></div>
          <div class="image02"></div>
        </div>
        <div id="cfoglayer_03" class="fog">
          <div class="image01"></div>
          <div class="image02"></div>
        </div> */}
        <br></br>
        <div className="project">
          <h2 className="title">Portfolio</h2>
        </div>
        <br></br>
        <br></br>
        <div id="card-container">
          <portfolioCards id="card-items">
            {portfolio.map((project) =>(
              <ProjectCards key={project.id} name={project.name} image={project.image} github={project.github} deploy= {project.deploy} topics= {project.topics} tech= {project.tech}/>
            ))}
          </portfolioCards>
        </div>
      </div>
    </>
    );
  }

export default Portfolio;