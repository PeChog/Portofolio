import { motion } from "framer-motion";
import eliott from "../../assets/images/eliott.png";
// import SoundToggle from "../../components/SoundToggle/SoundToggle";

import "./style.scss";

const Eliott = ({
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
            <div className="free">Free-lance.</div>
            <h1>
              The first free-lance project I made, was for an artist called
              Eliott Paquet. I started his full-stack website just after my
              bootcamp, it was very challenging. For the first time, I had to
              make a backoffice. I did a strong back-end for this one. Regarding
              front-end, I managed API, carousel, and hooks. I have learned a
              lot of CSS properties and global jsx rules as well. Part of the
              contract's specifications was that the website should be
              responsive on mobile and full-screen.
            </h1>
            <div className="list">
              <motion.a
                href="https://github.com/PeChog/EP_front/tree/main/src"
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
                href="http://eliottpaquet.com/"
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

export default Eliott;
