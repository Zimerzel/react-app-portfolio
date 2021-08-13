import React from "react";

function Footer() {
  return (
    <div className="footer" id="footer">
      {/* <a href=""><img src="" alt="Github" class="icon"/></a>
        <a href=""><img src="" alt="LinkedIn" class="icon"/></a> */}
      <p id="footer-txt">
        &copy; Zach Imerzel |{" "}
        <a href="https://www.linkedin.com/in/zach-imerzel-336b9414b/">
          | LinkedIn |
        </a>{" "}
        <a href="https://github.com/Zimerzel">| Github |</a>{" "}
        <a href= "https://docdro.id/g8dL6kd" download>
          | Download Resume
        </a>
      </p>
    </div>
  );
}

export default Footer;
