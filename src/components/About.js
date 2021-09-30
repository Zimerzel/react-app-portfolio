import React, { lazy } from "react";
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

// const ProfilePicture = lazy(() => import('../assets/images/me-min.jpg'))
// const Bootjs = lazy(() => import('../assets/skills/bootjs.png'))
// const CSS = lazy(() => import('../assets/skills/css3.png'))
// const Github = lazy(() => import('../assets/skills/github.png'))
// const Express = lazy(() => import('../assets/skills/express.png'))
// const Html = lazy(() => import('../assets/skills/html.png'))
// const JQuery = lazy(() => import('../assets/skills/jQuery.png'))
// const MERN = lazy(() => import('../assets/skills/mern.jpg'))
// const Mongodb = lazy(() => import('../assets/skills/mongodb.png'))
// const MySQL = lazy(() => import('../assets/skills/mysql.jpg'))
// const Node = lazy(() => import('../assets/skills/node.png'))
// const Npm = lazy(() => import('../assets/skills/npm_logo.png'))
// const Reactjs = lazy(() => import('../assets/skills/reactjs.png'))
// const JS = lazy(() => import('../assets/skills/js.png'))


function About () {
    return(
        <>
                <div id="background">
                    </div>
                    <br></br>
                    <h2>About Me</h2>
                    <br></br>
                    <div className="about-box">
                        <div id="photo">
                            <img src={ProfilePicture}  alt="Profile-Picture" id="photo" width="250px" height="250px"/>
                        </div>
                        
                        <br></br>
                        <h3>My Story</h3>
                        <p id="about-text">
                        I lived most of my life in Boulder, CO and was taught to embrace the adventure.
                        In many ways that mindset has been both a blessing and a curse, it has shown me that there is so much to this amazing place we live and to never settle as there is always another adventure just around the corner. 
                        That same passion for adventure and finding what feels "right" has inspired me to work in various carrer fields to see what they can offer. I have a certificate of completion from the University of Texas for Full Stack Development.
                         Although I am early in the process of becoming a developer, I can't help but feel that same sense of adventure that I have been looking for in a career! Feel free to browse my work and don't hesistate to reach out with any questions/comments!
                        </p>
                        <br></br>
                        <h3>Skills</h3>
                        <div id="skills">
                            <img src= {Bootjs} width="50px" height="50px" id="border-radius"/>
                            <img src= {CSS} width="50px" height="50px" id="border-radius"/>
                            <img src= {Express} width="50px" id="border-radius" />
                            <img src= {Github} width="50px" height="50px"/>
                            <img src= {Html} width="50px" height="50px" id="border-radius"/>
                            <img src= {JQuery} width="50px" height="50px"/>
                            <img src= {JS} width="50px" height="50px"/>
                            <img src= {MERN} width="90px" height="50px"/>
                            <img src= {Mongodb} width="50px" height="50px"/>
                            <img src= {MySQL} width="55px" height="50px"/>
                            <img src= {Node} width="50px" height="50px"/>
                            <img src= {Npm} width="60px" height="50px"/>
                            <img src= {Reactjs} width="50px" height="50px"/>
                        </div>
                    </div>
                <br></br>
        </>

        // forest bathing
        // great reads
    )
}

export default About;