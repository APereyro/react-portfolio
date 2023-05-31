import React from "react";
import profileImage from "./images/profilePic.jpg";

export default function About() {
  return (
    <div
      style={{
        backgroundColor: "#14213dff",
        color: "#ffffff",
        padding: "20px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>About Page</h1>
      <div
        style={{
          marginTop: "20px",
          borderRadius: "50%",
          border: "4px solid #ffffff",
          overflow: "hidden",
        }}
      >
        <img
          src={profileImage}
          alt="Profile"
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <p style={{ textAlign: "center", marginTop:"30px" }}>
        Hello, my name is Alan, and I'm a passionate and motivated individual
        who recently completed a coding bootcamp. During the bootcamp, I gained
        a solid foundation in JavaScript, React, HTML, and CSS, and now I'm
        excited to apply these skills in real-world applications. I'm a
        hardworking and dedicated learner, always eager to expand my knowledge
        and tackle new challenges. With a strong work ethic and a thirst for
        knowledge, I'm confident in my ability to contribute to the
        ever-evolving field of web development. I'm now actively seeking
        opportunities to further develop my skills, grow as a professional, and
        make a positive impact in the tech industry.
      </p>
    </div>
  );
}