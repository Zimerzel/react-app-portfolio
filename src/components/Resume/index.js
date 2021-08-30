import React from 'react'; 
import Resumejpg from '../../assets/images/resume.png'

function Resume() {

return(
<section>
    <h2 className="resume">Resume</h2>
        <hr></hr>
        <div>
            <div>
                <img src={Resumejpg} alt="resume.png" id="resume-img"/>
            </div>
            <div> 
                <p>
                <a href="https://www.linkedin.com/in/zach-imerzel-336b9414b/"><img src="https://img.icons8.com/color/48/000000/linkedin-2.png" alt="Zach Imerzel LinkedIn"/></a>
                </p>
            </div>
        </div>
</section>
);
}

export default Resume;