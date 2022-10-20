import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./work.scss";

const Work = () => {
  let cursorRef = useRef();
  const mousePos = (event) => {
    cursorRef.current.setAttribute(
      "style",
      `top:${event.pageY - 20}px; left:${event.pageX - 20}px;`
    );
  };
  return (
    <motion.div
      onMouseMove={mousePos}
      className="work"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.8 },
      }}
      exit={{ opacity: 0 }}
    >
      <div className="app-cursor" ref={cursorRef}></div>
      <div className="container">
        <div className="work-menu">
          <Link className="link" to={"/portofolio"}>
            <motion.h1
              className="portofolio-work"
              whileHover={{ letterSpacing: "5px" }}
              transition={{ duration: 0.6 }}
            >
              Portofolio
            </motion.h1>
          </Link>
          <Link className="link" to={"/eliott"}>
            <motion.h1
              className="eliott-work"
              whileHover={{ letterSpacing: "5px" }}
              transition={{ duration: 0.6 }}
            >
              Eliott
            </motion.h1>
          </Link>
          <Link className="link" to={"/deliveroo"}>
            <motion.h1
              className="deliveroo-work"
              whileHover={{ letterSpacing: "5px" }}
              transition={{ duration: 0.6 }}
            >
              Deliveroo
            </motion.h1>
          </Link>
        </div>
        <div className="right-section">
          <div className="work-infos">
            <h2>Works.</h2>
            <p>
              Selected works. School, personal and free-lance. It shows you some
              of my skills with react and plugins. Feel free to ask if you have
              some questions.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};

export default Work;
