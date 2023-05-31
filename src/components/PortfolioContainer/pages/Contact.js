import React, { useState, useRef, useEffect } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const refForm = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_qnwvzgg',
                'template_i2r3e5a',
                refForm.current,
                'BcA3OzFEzoHu_wHlI',
            )
            .then(
                () => {
                    alert('Message sent successfully!');
                    window.location.reload(false);
                },
                () => {
                    alert('Message failed to send.');
                },
            );
    };
    useEffect(() => {
      const body = document.querySelector('body');
      body.style.overflow = 'hidden';
      return () => {
        body.style.overflow = 'auto';
      };
    }, []);
  return (
    <div className="container contact-page" style={{ backgroundColor: "#14213dff", color: "#ffffff", padding: "20px",height: "100vh",width:"100vw",overflow: "hidden" }}>
      <h1 style={{textAlign:"center"}}>About Page</h1>
      <div className="text-zone">
        <p>
          Greetings! I'm Alan, a dedicated and enthusiastic individual
          who recently completed a comprehensive coding bootcamp. Throughout the
          program, I honed my skills in JavaScript, React, HTML, and CSS,
          equipping me with a strong foundation to thrive in the world of web
          development. I am eager to apply my newly acquired knowledge and
          further enhance my abilities in practical, real-world scenarios. I
          approach challenges with tenacity and have a strong work ethic, always
          striving to push my boundaries and learn something new every day. If
          you're interested in connecting and discussing potential
          opportunities, please feel free to reach out to me by filling out the
          contact form below. I look forward to engaging with like-minded
          professionals and contributing to the ever-evolving tech landscape.
        </p>
        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                ></input>
              </li>
              <li className="half">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                ></input>
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input style={{ backgroundColor: "#14213dff", color: "#ffffff", }}
                  type="submit"
                  className="flat-button"
                  value="Send"
                ></input>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}
