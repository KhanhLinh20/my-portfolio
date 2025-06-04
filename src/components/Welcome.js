import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Welcome.css";

function Welcome() {
  return (
    <section className="welcome-section text-white d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Icon Section */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
  <iframe
    src="https://my.spline.design/genkubgreetingrobot-gYiV3fGEPoLreHvriqz8JNI5/"
    frameBorder="0"
    width="100%"
    height="500px"
    style={{
      maxWidth: '500px',
      border: 'none',
    }}
  ></iframe>
</div>

          {/* Text Section */}
          <div className="col-md-6">
            <h1 className="typing-effect display-4 gradient-text fw-bold">
              Bringing <span>Value</span>
              <br />
              To the{" "}
              <span>
                <Typewriter
                  words={["Best Project", "Bold Ideas", "Real Users"]}
                  loop={true}
                  cursor
                  // cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>
            {/* <p className="badge bg-gradient">✨ Fullstack Developer Portfolio</p> */}
            {/* <h1 className="display-4 gradient-text fw-bold">
              Bringing <span>Value</span>
              <br />
              To the <span>Best Projects</span>
            </h1> */}
            <p className="lead mt-3">
              Hi, I’m Linh – a passionate self-taught developer.
              <br />I love turning ideas into real products, and I truly believe
              that with enough effort and a willingness to learn, it doesn’t
              matter where you’re from — city or countryside.
            </p>
            <button className="btn btn-gradient mt-3">Learn More!</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
