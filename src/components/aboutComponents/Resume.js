import React from 'react'; 
import Resumejpg from '../../assets/images/resume.png'
import Certificatepng from '../../assets/images/certificate.png'

function Resume() {

return(
    <>
    <div className="resume">
        {/* <div id="bfoglayer_01" class="bfog">
          <div class="image01"></div>
            <div class="image02"></div>
        </div>
        <div id="bfoglayer_02" class="bfog">
          <div class="image01"></div>
          <div class="image02"></div>
        </div>
        <div id="bfoglayer_03" class="bfog">
          <div class="image01"></div>
          <div class="image02"></div>
        </div> */}
        <h2>Resume</h2>
        <div>
            <div id="resume">
                <img src={Resumejpg} alt="resume.png" id="resume-img"/>
            </div>
            <div id="resume">
                <img src={Certificatepng} alt="resume.png" id="resume-img"/>
            </div>
        </div>
    </div>
    </>
);
}


export default Resume;