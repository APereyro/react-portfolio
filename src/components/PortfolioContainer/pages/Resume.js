import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faCss3Alt, faHtml5, faJs } from "@fortawesome/free-brands-svg-icons";

export default function Resume() {
  return (
    <div style={{ backgroundColor: "#14213dff", color: "#e5e5e5ff", padding: "20px", height: "100vh", overflow: "hidden" }}>
      <h1>Resume Page</h1>
      <p>
        Hello! I recently completed a coding bootcamp where I acquired new skills in web development. Here are some of the technologies I learned:
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FontAwesomeIcon
          icon={faReact}
          size="5x"
          style={{ margin: "10px", transition: "color 0.3s ease" }}
          onMouseOver={(e) => e.target.style.color = "#fca311ff"}
          onMouseOut={(e) => e.target.style.color = ""}
        />
        <FontAwesomeIcon
          icon={faCss3Alt}
          size="5x"
          style={{ margin: "10px", transition: "color 0.3s ease" }}
          onMouseOver={(e) => e.target.style.color = "#fca311ff"}
          onMouseOut={(e) => e.target.style.color = ""}
        />
        <FontAwesomeIcon
          icon={faHtml5}
          size="5x"
          style={{ margin: "10px", transition: "color 0.3s ease" }}
          onMouseOver={(e) => e.target.style.color = "#fca311ff"}
          onMouseOut={(e) => e.target.style.color = ""}
        />
        <FontAwesomeIcon
          icon={faJs}
          size="5x"
          style={{ margin: "10px", transition: "color 0.3s ease" }}
          onMouseOver={(e) => e.target.style.color = "#fca311ff"}
          onMouseOut={(e) => e.target.style.color = ""}
        />
      </div>
      <p>Also, check out my actual Resume by clicking the Google Drive Icon below!</p>
    </div>
  );
}