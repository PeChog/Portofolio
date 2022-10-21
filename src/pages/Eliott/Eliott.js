import { motion } from "framer-motion";
import { useRef } from "react";
import eliott from "../../assets/images/eliott.png";

import "./style.scss";

const Eliott = ({ onMouseEnter, onMouseLeave, isHovered }) => {
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
              Eliott
            </motion.h1>
            <motion.img
              initial={{ opacity: -2 }}
              animate={{
                opacity: 1,
                transition: { duration: 2.5 },
              }}
              exit={{ opacity: 0 }}
              alt="porto"
              src={eliott}
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
              My first free-lance project i made for an artist called Eliott
              Paquet. I started his full-stack website just after my bootcamp,
              it was very challenging. For the first time i had to make a
              backoffice, i decided to do it only with code, forget forest admin
              and co... I wasn't into Scss, i did a carousel, i manage datas
              back/front for expositions and pictures that he can update on
              backoffice
            </h1>
            <div className="list">
              <motion.a
                href="https://github.com/PeChog/EP_front/tree/main/src"
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
                href="http://eliottpaquet.com/"
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

export default Eliott;
