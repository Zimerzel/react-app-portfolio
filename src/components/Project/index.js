import React from 'react';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
// import Carousel from 'react-bootstrap/Carousel'


function ProjectCard(props) {
  return (
    <Container fluid="true" id="cardContainer">
      <Row xs={2} md={2} lg={3} className= "g-4">
        <Col xs={2} md={2} lg={2}>
          <Card>
            <Card.Img variant="top" alt={props.name} src={props.image} />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
                {props.topics}
              </Card.Text>
                <a href={props.github}><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon"/></a> 
                <a href={props.deploy}><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon"/></a> 
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
)}

    // <div class="card">
    //   <div className="img-container">
    //     <img alt={props.name} src={props.image}/>
    //   </div>
    //   <div className="description">
    //     <p className="project-title" id="card-title">{props.name}</p>
    //     <p>
    //       ({props.topics})
    //     </p>
    //   </div>
    // </div>
//   )
// }



export default ProjectCard;