import React, { Suspense } from 'react'; 
import Certificatepng from '../../assets/images/certificate-min.png';
// const Certificatepng = React.lazy(() => import('../../assets/images/certificate.png'))

function Resume() {
return(
    <>
    <div className="resume">
        <h2>Resume</h2>
        <div className="resume-box">
            <div>
              <div>
                <h3>
                  Zach Imerzel 
                </h3>
                <p>
                  Austin, TX 78737
                </p>
                <p>Phone:(303)902-0091 | Email: zachary.imerzel@gmail.com</p>
                <div>
                  <ul>
                    <li><a href="https://github.com/Zimerzel" target="_blank" rel="noreferrer" id="github">Github |</a></li>
                    <li><a href="https://www.linkedin.com/in/zach-imerzel-336b9414b/" target="_blank" rel="noreferrer" id="linkedin">LinkedIn</a></li>
                  </ul>
                </div>
              </div>
              <div>
                <h4>
                  Summary
                </h4>
                <p>
                  Full Stack Web Developer with a life-long dedication to learning. Effective at combining creativity and problem solving to develop user-friendly applications. Known among colleagues for strong wit and attention to detail no matter the complexity of the project.   
                </p>
              </div>
              <div>
                <h4>
                  Technical Skills
                </h4>
                <p>
                  <strong>Languages</strong>: Java, JavaScript, Python
                </p>
                <p>
                  <strong>Applications</strong>: Git, Github, VS Code 
                </p>
                <p>
                  <strong>Application Servers</strong>: Heroku, Firebase
                </p>
                <p>
                  <strong>Database Systems</strong>: MongoDB, SQL, MySQL, NoSQL, SQLAlchemy
                </p>
                <p>
                  <strong>Frameworks</strong>: ReactJS, VueJS, Bootstrap

                </p>
              </div>
              <div>
                <h4>
                  Projects
                </h4>
                <h5>
                  Meal Match | <a href="https://github.com/misn0147/meal_match" target="_blank" rel="noreferrer" id="link">Github</a> | <a href="https://misn0147.github.io/meal_match/" target="_blank" rel="noreferrer" id="link">Deployed</a>
                </h5>	
                <p>
                When you can’t decide on what you want to order, and searching for recipes just isn’t in the cards, you just want someone to decide for you. 
                MealMatch will randomly choose a food and drink pairing for you to make a date night that is much more spontaneous and exciting. 
            
                </p>
                <h6> Made with:</h6>
                <ul>
                  <li>HTML, </li>
                  <li>CSS, </li>
                  <li>Javascript, </li>
                </ul>
                <br />
                <br/>
              </div>
              <div>
                <h5>
                  Redux Store | <a href="https://github.com/Zimerzel/ReduxStore" target="_blank" rel="noreferrer" id="link">Github</a> | <a href="https://dry-peak-41185.herokuapp.com/" target="_blank" rel="noreferrer" id="link">Deployed</a>
                </h5>
                <p>
                  A simple and user friendly shopping application using CRUD methodology
 
                </p>
                <h6>Made with:</h6>
                <ul>
                  <li>HTML, </li>
                  <li>CSS, </li>
                  <li>JavaScript, </li>
                  <li>Stripe, </li>
                  <li>Graphql, </li>
                  <li>React, </li>
                  <li>Redux, </li>
                  <li>Express, </li>
                  <li>Mongoose, </li>
                  <li>Jsonwebtoken, </li>
                  <li>Bcrypt </li>
                </ul>
                <br/>
                <br/>
              </div>
              <div>
                <h5>
                  UT Gaming Reviews | <a href="https://github.com/ewebber283/utgr" target="_blank" rel="noreferrer" id="link">Github</a> | <a href="https://majestic-mammoth-cave-33282.herokuapp.com/dashboard" target="_blank" rel="noreferrer" id="link">Deployed</a>
                </h5>
                <p>
                  UTGR aims to bring people together through games, reguardless of location or restrictions.
                </p>
                <h6>Made with:</h6>
                <ul>
                  <li>HTML, </li>
                  <li>CSS, </li>
                  <li>JavaScript, </li>
                  <li>Bcrypt, </li>
                  <li>Express, </li>
                  <li>Express-Handlebars, </li>
                  <li>Express-Sessions, </li>
                  <li>MySQL, </li>
                  <li>Sequelize, </li>
                  <li>Bootstrap, </li>
                  <li>Dotenv </li>
                </ul>
                <br/>
                <br/>
              </div>
              <div>
                <h4>
                  Experience
                </h4>
                <h5>
                    Collings Guitars (Finish)| Austin, TX 						2/21-8/21
                </h5>
                <p>
                  Product Quality Control - My  responsibility was to ensure that the guitars were immaculate prior to moving forward, and finished in a timely manner as it was a crucial piece of our production process.
                  Creation/Application of Poly coating for all acoustic guitars
                  Customer Service
                  Responsible for finishing acoustic guitars valued at $90,000+/week 
                </p>
              </div>
              <div>
                <h4>
                  Education
                </h4>
                <ul>
                  <li>Certificate: University of Texas, Austin, TX</li>
                </ul>
                <p>
                  A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.
                </p>
              </div>
              </div>
            <div id="resume">
              <Suspense fallback={<div>Loading...</div>}>
                <img src={Certificatepng} alt="UT Certificate" id="resume-img"/>
              </Suspense>
            </div>
        </div>
    </div>
    <br />
    </>
);
}


export default Resume;