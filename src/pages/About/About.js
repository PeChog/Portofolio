import { motion } from "framer-motion";
import { useRef } from "react";
import ProfilPicture from "../../assets/images/PP.jpeg";

import "./about.scss";

const About = () => {
  let cursorRef = useRef();
  const mousePos = (event) => {
    cursorRef.current.setAttribute(
      "style",
      `top:${event.pageY - 20}px; left:${event.pageX - 20}px;`
    );
  };
  return (
    <motion.div
      className="about"
      onMouseMove={mousePos}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1 },
      }}
      exit={{ opacity: 0 }}
    >
      <div className="app-cursor" ref={cursorRef}></div>
      <div className="container">
        <div className="left-section">
          <h1 className="about-title">About</h1>
          <h2>
            I'm Pierre-Etienne. I'm a junior front-end developer passionate
            about design and UI.
          </h2>
          <p>
            I like to conceptualize artistic websites where I can fully use my
            creativity. My goal is to go further with each of my projects and
            discover new technologies to use in my codes.
          </p>
          <p>
            After 10 years in the music business, in event and project
            management, I started to wonder about my future. I needed to evolve,
            to do something else, a flame was driving me to change. I am still a
            big fan of music and I continue to make and play it on stage.
            However I had done a bit of a tour. Having always been passionate
            about the world of internet and apps and constantly monitoring this
            subject, it is quite natural that I decided to start a reconversion
            in web development.
          </p>
          <h2 style={{ marginTop: "50px" }}>
            My stack
            {/* <p>
              After 10 years in the music business, in event management and
              project management, I started to wonder about my future. I needed
              to evolve, to do something else, a flame was driving me to change.
              I am still a big fan of music and I continue to make and play it
              on stage. However I had done a bit of a tour. Having always been
              passionate about the world of internet and apps and constantly
              monitoring this subject, it is quite natural that I decided to
              start a reconversion in web development.
            </p> */}
          </h2>
        </div>
        <div className="right-section">
          <img alt="PP" src={ProfilPicture} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
