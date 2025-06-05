import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./About.css";
import avatar from "../assets/avatar.jpg";

const About = () => {
  return (
    <section className="about-section d-flex align-items-center" id="about">
      <div className="container">
        <h2 className="about-title">About Me</h2>

        <div className="row align-items-center">
          {/* Text column */}
          <div className="col-md-6 about-text">
            <p className="hello">Hello!</p>
            <h1 className="name">I am Linh</h1>

            <p className="typing-effect">
              <Typewriter
                words={[
                  "Passionate about web technology 💻",
                  "Love building beautiful interfaces ✨",
                  "Focus on smooth user experience 🧠",
                  "Believe every line of code tells a story 🧾",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1500}
              />
            </p>

            <div className="buttons">
              <a href="/cv.pdf" className="btn" download>
                Download CV
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact
              </a>
            </div>
          </div>

          {/* Avatar column */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="about-image">
              <img src={avatar} alt="avatar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
