import { motion } from "framer-motion";
import portofolio from "../../assets/images/portofolio.png";
import { useRef } from "react";

import "./style.scss";

const Portofolio = () => {
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
      <div className="app-cursor" ref={cursorRef}></div>
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
        >
          <div>
            <h1>
              Starting a new personal project is really stimulating. I can try
              to do exactly what i want. And take time to explore new
              frameworks. Like here with Framer-Motion. I did simple css motions
              but it was a good exercise to understand stratings and endings
              points, animatings on x/y axis with css features.
            </h1>
            <div className="list">
              <div>
                <h2>Learnings</h2>
              </div>
              <div>
                <h2>Technos</h2>
              </div>
              <div>
                <h2>Process</h2>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Portofolio;
