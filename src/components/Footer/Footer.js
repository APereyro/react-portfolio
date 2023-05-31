import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow, faGoogleDrive} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer style={{ backgroundColor: "#f5f5f5", color: "#333", padding: "20px", position: "fixed", left: 0, bottom: 0, width: "100%", textAlign: "center" }}>
    <div className="container">
      <div style={{ marginTop: "10px" }}>
        <a href="https://github.com/APereyro" target="_blank" rel="noreferrer" style={{ marginRight: "30px" }}>
          <FontAwesomeIcon icon={faGithub} color="#333" size="2xl" />
        </a>
        <a href="https://www.linkedin.com/in/alan-pereyro-1aa770199/" target="_blank" rel="noreferrer" style={{ marginRight: "30px" }}>
          <FontAwesomeIcon icon={faLinkedin} color="#333" size="2xl" />
        </a>
        <a href="https://stackoverflow.com/users/21981317/alan-pereyro" target="_blank" rel="noreferrer" style={{ marginRight: "30px" }}>
          <FontAwesomeIcon icon={faStackOverflow} color="#333" size="2xl" />
        </a>
        <a href="https://docs.google.com/document/d/e/2PACX-1vR6wlBoxAoV6qa84nAff07EHzhSVLzC7kR4BH1Q5tBUh2ZHEGseSYUHFWk0gZ-t8vz0gGozGWYQroIe/pub" target="_blank" rel="noreferrer" style={{ marginRight: "30px" }}>
          <FontAwesomeIcon icon={faGoogleDrive} color="#333" size="2xl" />
        </a>
      </div>
    </div>
  </footer>
  );
}

export default Footer;