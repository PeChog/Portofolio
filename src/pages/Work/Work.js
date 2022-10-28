import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import SoundToggle from "../../components/SoundToggle/SoundToggle";

import "./work.scss";

const Work = ({ cursorRef, mousePos }) => {
  return (
    <motion.div
      onMouseMove={mousePos}
      className="work"
      initial={{ opacity: 0, width: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.8 },
      }}
      exit={{ opacity: 0 }}
    >
      {/* <SoundToggle /> */}
      <div className="app-cursor" ref={cursorRef}></div>
      <div className="container">
        <div className="work-menu">
          <Link className="link" to={"/portofolio"}>
            <motion.h1
              className="portofolio-work"
              whileHover={{ letterSpacing: "5px" }}
              transition={{ duration: 0.6 }}
            >
              Portfolio
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
              Selected personal, free-lance and school works. It shows you some
              of my skills with react.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};

export default Work;
