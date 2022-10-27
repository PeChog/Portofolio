import { motion } from "framer-motion";
import portofolio from "../../assets/images/portofolio.png";

// import useMediaQuery from "../../components/Hooks/useMediaQuery";
// import SoundToggle from "../../components/SoundToggle/SoundToggle";

import "./style.scss";

const Portofolio = ({
  onMouseEnter,
  onMouseLeave,
  isHovered,
  mousePos,
  cursorRef,
}) => {
  let isPhone = window.innerWidth < 450;
  const variants = isPhone
    ? {
        initial: {
          height: 0,
        },
        animate: {
          height: "50vh",
        },
      }
    : {
        initial: {
          width: 0,
        },
        animate: {
          width: "45vw",
        },
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
      {/* <SoundToggle /> */}
      <div
        className={isHovered ? "app-cursor-left" : "app-cursor"}
        ref={cursorRef}
      ></div>
      <div className="container">
        <section className="left-section">
          <motion.div
            variants={variants}
            className="title-cont"
            initial="initial"
            animate="animate"
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
              className="home-page"
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
          <div className="right-content">
            <div
              style={{
                fontFamily: "Millimetre-Regular",
                fontSize: "45px",

                textDecoration: "underline",
                marginLeft: "18vw",
              }}
            >
              Personal project
            </div>
            <h1>
              Starting a new personal project is really stimulating. You can
              take time to explore new frameworks, like here with Framer-Motion.
              I did simple motions but it was a good exercise to understand
              animations, page transitions, x/y axis.
            </h1>
            <div className="list">
              <motion.a
                href="https://github.com/PeChog/Portofolio"
                className="github"
                whileHover={{
                  scale: 1.1,

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
                  scale: 1.1,

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
