import Card from "react-bootstrap/Card";
import React from "react";
import { data } from "../../assets/portfolioData/data";
import "./project.css";

function Project() {
  console.log(data);
  console.log();
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      
      {data.map((item) => (
        <div key={item.id} style={{ margin: "10px" }}>
          <Card style={{ width: "18rem", backgroundColor: "#000000ff" }}>
            <a
              href={item.Live}
              target="_blank"
              rel="noopener noreferrer" 
              style={{
                textDecoration: "none",
                position: "relative",
                display: "inline-block",
                overflow: "hidden",
                color: "#ffffff",
                transition: "color 0.3s ease",
              }}
              className="link-hover-effect"
            >
              <Card.Img variant="top" src={item.Image} />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "#fca311ff",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
              ></div>
            </a>
            <Card.Body>
              <Card.Title>
                <a
                  href={item.Github}
                  target="_blank"  
                  rel="noopener noreferrer" 
                  style={{
                    textDecoration: "none",
                    color: "#e5e5e5ff",
                    transition: "color 0.3s ease",
                  }}
                  className="link-hover-effect"
                >
                  {item.Title}
                </a>
              </Card.Title>
              <Card.Text>{item.Text}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
    
  );
}


export default Project;