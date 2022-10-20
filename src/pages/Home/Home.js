import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/arrow.png";
import "./home.scss";

const Home = ({ onMouseEnter, onMouseLeave, isHovered }) => {
  let cursorRef = useRef();
  const mousePos = (event) => {
    cursorRef.current.setAttribute(
      "style",
      `top:${event.pageY - 20}px; left:${event.pageX - 20}px;`
    );
  };
  return (
    <>
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
        <div
          className={isHovered ? "app-cursor-hover" : "app-cursor"}
          ref={cursorRef}
        ></div>
        <div className="menu ">
          <Link className="home-link" to={"/contact"} state={{ mousePos }}>
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
          <h1 onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            Pierre-Etienne Chognard
          </h1>
          <p>I love make creative design for websites</p>
          <h2>Currently looking for a front-end developer position</h2>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
