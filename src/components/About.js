import React from "react";
import ProfilePicture from '../assets/images/me-min.jpg'
import Bootjs from '../assets/skills/bootjs.png'
import CSS from '../assets/skills/css3.png'
import Express from '../assets/skills/express.png'
import Github from '../assets/skills/github.png'
import Html from '../assets/skills/html.png'
import JQuery from '../assets/skills/jQuery.png'
import MERN from '../assets/skills/mern.jpg'
import Mongodb from '../assets/skills/mongodb.png'
import MySQL from '../assets/skills/mysql.jpg'
import Node from '../assets/skills/node.png'
import Npm from '../assets/skills/npm_logo.png'
import Reactjs from '../assets/skills/reactjs.png'
import JS from '../assets/skills/js.png'


function About () {
    return(
        <>
                <div id="background">
                    </div>
                    <br></br>
                    <h2>About Me</h2>
                    <br></br>
                    <div className="about-box">
                        <div id="profile">
                            <img src={ProfilePicture} id="profile" width="200.3px" height="204.2px" alt="Zach"/>
                        </div>
                        
                        <br></br>
                        <h3>My Story</h3>
                        <p id="about-text">
                        I have lived most of my life in Boulder, CO and was taught to embrace adventure.
                        In many ways that mindset has been both a blessing and a curse. It has shown me that there is so much to this amazing place we live and to never settle as there is always another adventure just around the corner. 
                        That same passion for adventure and finding what feels "right" has inspired me to work in various career fields to see what they can offer. I have a certificate from the University of Texas for Full Stack Development.
                         Although I am early in the process of becoming a developer, I can't help but feel that same sense of adventure that I have been looking for in a career! Feel free to browse my work and don't hesitate to reach out with any questions/comments!
                        </p>
                        <br></br>
                        <h3>Skills</h3>
                        <div id="skills">
                            <img src= {Bootjs} width="50px" height="50px" id="border-radius" alt="Bootstrap JS Logo" />
                            <img src= {CSS} width="50px" height="50px" id="border-radius" alt="CSS Logo" />
                            <img src= {Express} width="50px" height="50px" id="border-radius" alt="Express Logo" />
                            <img src= {Github} width="105px" height="100px" alt="Github Logo" id="Github_logo"/>
                            <img src= {Html} width="50px" height="50px" id="border-radius" alt="HTML Logo"/>
                            <img src= {JQuery} width="285px" height="310px" alt="jQuery Logo" id="jQuery_logo"/>
                            <img src= {JS} width="50px" height="50px" alt="JavaScript Logo" />
                            <img src= {MERN} width="105px" height="46.7px" alt="MERN Logo" />
                            <img src= {MySQL} width="45px" height="34px" alt="MySQL Logo" id="mysql_logo"/>
                            <img src= {Reactjs} width="100px" height="100px" alt="React Logo" id="react_logo"/>
                            <img src= {Node} width="50px" height="50px" alt="Node Logo" />
                            <img src= {Mongodb} width="50px" height="50px" alt="Mongodb Logo" />
                            <img src= {Npm} width="188px" height="100px" alt="NPM Logo" id="npm_logo"/>
                            
                        </div>
                    </div>
                <br></br>
        </>
    )
}

export default About;