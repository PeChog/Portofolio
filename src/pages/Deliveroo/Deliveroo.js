import { useRef } from "react";
import { motion } from "framer-motion";

import deliveroo from "../../assets/images/deliveroo.png";

import "./style.scss";

const Deliveroo = () => {
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
              School project to train React, a Deliveroo restaurant page. It was
              nice and a very complete exercise because we need three importants
              Things for front-end development: Fetching datas with useEffect,
              render them in jsx with flexbox, algorithm with states, functions
              to return a usable.
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

export default Deliveroo;
