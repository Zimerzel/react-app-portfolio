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
import SQLA from '../assets/images/sqlalchemy.png'
import Flask from '../assets/images/flask.png'
import Firebase from '../assets/images/firebase.png'
import Python from '../assets/images/python.png'


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
                            <img src={ProfilePicture}  alt="Profile-Picture" id="photo" width="200.3px" height="204.2px" alt="Photo of Zach"/>
                        </div>
                        
                        <br></br>
                        <h3>My Story</h3>
                        <p id="about-text">
                        I have lived most of my life in Boulder, CO and was taught to embrace adventure. 
                        Colorado is known for being an unpredictable environment as the weather and events 
                        that follow can change by the minute. Growing up in an ever-changing environment
                        has taught me many things but the most important lesson was to be able to adapt.
                        Initially, I had no desire to enter the world of tech and I refused to accept 
                        it’s increasing integration in our lives. Being young and growing up alongside 
                        the social media era, I had a narrow view on technology. I wanted people to 
                        socialize instead of tweet, to call instead of text, and for people to eat 
                        their food without taking another #mylunch photo.
                        That’s exactly where I was wrong, software is so much larger than just media. 
                        Adaptation doesn't always have to be an alteration of your person or the thing itself, but it can also be a change in perspective.
                        Once my perspective changed, I saw just how many opportunities
                        there were to personally or indirectly create positive change in the world through software development.
                        Software could be and often is developed for hospitals, research facilities, prosthetics and environmental needs. 
                        The applications are limitless. While I've just begun my adventure into software development, 
                        I can say I am extremely proud to be a part of this field. Feel free to browse my work and don't 
                        hesitate to reach out with any questions/comments!

                        </p>
                        <br></br>
                        <h3>Skills</h3>
                        <div id="skills">
                            <img src= {Bootjs} width="50px" height="50px" id="border-radius" alt="Bootstrap JS Logo" />
                            <img src= {CSS} width="50px" height="50px" id="border-radius" alt="CSS Logo" />
                            <img src= {Express} width="50px" height="50px" id="border-radius" alt="Express Logo" />
                            <img src= {Github} width="105px" height="100px" alt="Github Logo" id="Github_logo"/>
                            <img src= {Html} width="50px" height="50px" id="border-radius" alt="HTML Logo"/>
                            <img src= {Python} width="50px" height="50px" id="border-radius" alt="Python Logo"/>
                            <img src= {JS} width="50px" height="50px" alt="JavaScript Logo" />
                            <img src= {JQuery} width="285px" height="310px" alt="jQuery Logo" id="jQuery_logo"/>
                            <img src= {MERN} width="105px" height="46.7px" alt="MERN Logo" />
                            <img src= {MySQL} width="45px" height="34px" alt="MySQL Logo" id="mysql_logo"/>
                            <img src= {Reactjs} width="100px" height="100px" alt="React Logo" id="react_logo"/>
                            <img src= {Node} width="50px" height="50px" alt="Node Logo" />
                            <img src= {Mongodb} width="50px" height="50px" alt="Mongodb Logo" />
                            <img src= {Npm} width="188px" height="100px" alt="NPM Logo" id="npm_logo"/>
                            <img src= {SQLA} width="110px" height="50px" alt="SQL Alchemy Logo" id="SQLA" />
                            <img src={Flask} width="110px" height="50px" alt="Flask Logo" id="Flask" />
                            <img src={Firebase} width="150px" height="50px" alt="Firebase Logo" id="Firebase" />
                        </div>
                    </div>
                <br></br>
        </>
    )
}

export default About;