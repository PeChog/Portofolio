import { motion } from "framer-motion";
import portofolio from "../../assets/images/portofolio.png";
import SoundToggle from "../../components/SoundToggle/SoundToggle";

import { useRef } from "react";

import "./style.scss";

const Portofolio = ({ onMouseEnter, onMouseLeave, isHovered }) => {
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
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.8 },
      }}
      exit={{ opacity: 0 }}
      className="porto-page"
    >
      <SoundToggle />
      <div
        className={isHovered ? "app-cursor-left" : "app-cursor"}
        ref={cursorRef}
      ></div>
      <div className="container">
        <section className="left-section">
          <motion.div
            className="title-cont"
            initial={{ width: 0 }}
            animate={{ width: "45vw" }}
            transition={{ duration: 1.5 }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 1.5 },
              }}
              exit={{ opacity: 0 }}
            >
              Portofolio
            </motion.h1>

            <motion.img
              initial={{ opacity: -2 }}
              animate={{
                opacity: 1,
                transition: { duration: 2.5 },
              }}
              exit={{ opacity: 0 }}
              alt="porto"
              src={portofolio}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          </motion.div>
        </section>

        <motion.section
          className="right-section"
          initial={{ opacity: -6 }}
          animate={{
            opacity: 1,
            transition: { duration: 2.5 },
          }}
          exit={{ opacity: 0 }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div>
            <h1>
              Starting a new personal project is really stimulating. I can try
              to do exactly what i want. And take time to explore new
              frameworks. Like here with Framer-Motion. I did simple features
              but it was a good exercise to understand animations, page
              transitions, x/y axis with css and JS.
            </h1>
            <div className="list">
              <motion.a
                href="https://github.com/PeChog/Portofolio"
                className="github"
                whileHover={{
                  scale: 1.2,
                  transformOrigin: "left center",
                  textShadow: "0px 0px 8px rgb(255, 255, 255",
                  backgroundColor: "none",
                }}
              >
                Github
              </motion.a>
              <motion.a
                href="https://portofolio-pe.netlify.app/"
                className="deploy"
                whileHover={{
                  scale: 1.2,
                  transformOrigin: "left center",
                  textShadow: "0px 0px 8px rgb(255, 255, 255",
                  backgroundColor: "none",
                }}
              >
                Website
              </motion.a>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Portofolio;
