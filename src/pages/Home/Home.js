import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/arrow.png";

// import UkraineBanner from "../../components/Ukraine-Banner/UkraineBanner";

import "./home.scss";
// import SoundToggle from "../../components/SoundToggle/SoundToggle";

const Home = ({
  onMouseEnter,
  onMouseLeave,
  click,
  onClick,
  isHovered,
  cursorRef,
  mousePos,
  // isPlaying,
  // audioPlayer,
  // togglePlayPause,
}) => {
  return (
    <>
      {/* {click ? <UkraineBanner /> : null} */}

      <motion.div
        className="Home container"
        onMouseMove={mousePos}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1.5 },
        }}
        exit={{ opacity: 0 }}
      >
        {/* <SoundToggle
          audioPlayer={audioPlayer}
          togglePlayPause={togglePlayPause}
          isPlaying={isPlaying}
        /> */}
        {isHovered ? (
          <div
            className={isHovered ? "app-cursor-hover" : "app-cursor"}
            ref={cursorRef}
          >
            <p
              style={{
                marginTop: "42px",
                marginLeft: "20px",
                fontFamily: "Millimetre-Light",
              }}
            >
              Click me !
            </p>
          </div>
        ) : (
          <div
            className={isHovered ? "app-cursor-hover" : "app-cursor"}
            ref={cursorRef}
          ></div>
        )}

        <div className="menu ">
          <Link
            className="home-link"
            to={"/contact"}
            // isPlaying={isPlaying}
            // audioPlayer={audioPlayer}
            // togglePlayPause={togglePlayPause}
          >
            CONTACT
          </Link>
          <Link className="home-link" to={"/about"}>
            ABOUT
          </Link>
          <Link className="home-link" to={"/work"}>
            WORK
          </Link>
        </div>

        <div className="social container">
          <div>
            <img alt="arrow" src={arrow} />
          </div>

          <a href="https://www.instagram.com/quasardjkatarina_officiel/?hl=fr">
            IG
          </a>
          <a href="https://www.linkedin.com/in/pierre-etienne-chognard-39491722b/">
            IN
          </a>
          <a href="https://github.com/PeChog">GH</a>
        </div>
        <div className="presentation">
          <h1
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
          >
            Pierre-Etienne Chognard
            <p>I love make creative design for websites</p>
          </h1>
          {click ? (
            <h2>Currently looking for a front-end developer position</h2>
          ) : null}
        </div>
      </motion.div>
    </>
  );
};

export default Home;
