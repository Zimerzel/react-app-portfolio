import React from 'react'; 

function ProjectCard(props) {
  return (
    <div classname="card">
      <div className="img-container">
        <img alt={props.name} src={props.image}/>
      </div>
      <div className="description">
        <p>
          ({props.topics})
        </p>
      </div>
    </div>
  )
}

export default ProjectCard;