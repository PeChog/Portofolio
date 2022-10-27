import { motion } from "framer-motion";

import deliveroo from "../../assets/images/deliveroo.png";
// import SoundToggle from "../../components/SoundToggle/SoundToggle";

import "./style.scss";

const Deliveroo = ({
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
              Deliveroo
            </motion.h1>
            <motion.img
              initial={{ opacity: -2 }}
              animate={{
                opacity: 1,
                transition: { duration: 2.5 },
              }}
              exit={{ opacity: 0 }}
              alt="del"
              src={deliveroo}
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
              }}
            >
              School project
            </div>
            <h1>
              School project to train React, it's a Deliveroo restaurant page.
              It was a very complete exercise because we need three importants
              Things for front-end development: handle datas with an API, render
              them in jsx with flexbox and co, algorithm, states and functions
              to return a usable product.
            </h1>
            <div className="list">
              <motion.a
                href="https://github.com/PeChog/deliveroo-client"
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
                href="https://pe-deliveroo.netlify.app/"
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

export default Deliveroo;
