import React from 'react';
import Project from '../../Project/Project';
import './portfolio.css';
export default function Portfolio() {
  return (
    <div  style={{ backgroundColor: "#14213dff", color: "#e5e5e5ff", padding: "20px",height: "100vh%" }}>
      <h1 style={{textAlign:"center"}}>Portfolio</h1>
      <Project />
    </div>
  );
}
