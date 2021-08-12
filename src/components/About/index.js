import React from 'react';
// import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
  return (
    <section className="title">
      <h1 id="about">Zach Imerzel</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">
        <p>
        I lived most of my life in Boulder, CO and was taught to embrace the adventure.
         In many ways that mindset has been both a blessing and a curse, it has shown me that theres so much to this amazing place we live and to never settle as theres always another adventure just around the corner. 
         That same passion for adventure and finding what feels "right" has inspired me to work in various carrer fields to see what they can offer. Recently I started a Full Stack Javascript program at the University of Texas, and will be looking to have my certificate of completion this September. 
         Although I am early in the process of becoming a developer, I can't help but feel that same sense of adventure that I have been looking for in a career! Feel free to browse my work and don't hesistate to reach out with any questions/comments!
        </p>
      </div>
    </section>
  );
}

export default About;
