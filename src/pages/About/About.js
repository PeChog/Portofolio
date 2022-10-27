import { motion } from "framer-motion";

import ProfilPicture from "../../assets/images/profilp.jpg";
import Figma from "../../assets/images/figma.png";
import Mern from "../../assets/images/mern.png";
import Photoshop from "../../assets/images/photoshop.png";
import Github from "../../assets/images/Github.png";
// import memoji from "../../assets/images/memoji.png";
// import SoundToggle from "../../components/SoundToggle/SoundToggle";

import "./about.scss";

const About = ({ mousePos, cursorRef }) => {
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
      {/* <SoundToggle /> */}
      <div className="app-cursor" ref={cursorRef}></div>
      <div className="container">
        <div className="left-section">
          <motion.h1
            className="about-title"
            initial={{ width: "0px" }}
            animate={{
              width: "100%",
              transition: { duration: 3 },
            }}
            exit={{ width: "100%" }}
          >
            About
          </motion.h1>
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
            to do something else. Having always been passionate about the world
            of web and apps and constantly monitoring this subject, it is quite
            natural that I decided to start a reconversion in web development.
          </p>
          <h2 style={{ marginTop: "50px" }}>Why development?</h2>
          <p>
            I really like the multidisciplinary ecosystem that a digital team
            offers. There are many challenges and the ratio between technicality
            and creativity is perfect to be continuously stimulated.
          </p>
          <h2 style={{ marginTop: "50px" }}>
            My stack
            <div className="mern">
              <img alt="mernImg" src={Mern} />
              <div className="logos">
                <img alt="github" src={Github} />
                <img alt="Photoshop" src={Photoshop} />
                <img alt="Figma" src={Figma} style={{ width: "50px" }} />
              </div>
            </div>
          </h2>
          <div className="curri">
            <h2 style={{ marginTop: "40px" }}>Curriculum vitæ</h2>
            <motion.a
              href="https://www.dropbox.com/s/fj41ym7d51g07d5/CV_dev_front-end_Chognard_PE.pdf?dl=0"
              className="CV"
              whileHover={{
                scale: 1.1,

                textShadow: "0px 0px 8px rgb(255, 255, 255",
                backgroundColor: "none",
              }}
            >
              CV
            </motion.a>
          </div>
        </div>
        <div className="right-section">
          <motion.img
            alt="PP"
            src={ProfilPicture}
            initial={{ opacity: -3 }}
            animate={{
              opacity: 1,
              transition: { duration: 1.9 },
            }}
            exit={{ opacity: 0 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
