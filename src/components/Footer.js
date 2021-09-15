import React from "react";

function Footer() {
  return (
    <div className="footer" id="footer">
      <p id="footer-txt">
        &copy; Zach Imerzel |{" "}
        <a href="https://www.linkedin.com/in/zach-imerzel-336b9414b/" target="_blank" rel="noreferrer" id="link-footer">
          | LinkedIn |
        </a>
        <a href="https://github.com/Zimerzel" target="_blank" rel="noreferrer" id="link-footer">| Github |</a>
        <a href= "https://docdro.id/bBZ6vQs" target="_blank" rel="noreferrer" id="link-footer" download>
            | Download Resume
        </a>
      </p>
    </div>
  );
}

export default Footer;