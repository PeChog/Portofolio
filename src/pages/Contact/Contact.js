import { motion } from "framer-motion";
import { useRef } from "react";

import "./contact.scss";

const Contact = () => {
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
        className="contact"
        onMouseMove={mousePos}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1 },
        }}
        exit={{ opacity: 0 }}
      >
        <div className="app-cursor" ref={cursorRef}></div>
        <motion.div
          initial={{ width: "0px" }}
          animate={{
            width: "100%",
            transition: { duration: 3 },
          }}
          exit={{ width: "100%" }}
          className="meet-container"
        >
          <motion.div className="meet">Contact.</motion.div>
        </motion.div>
        <div>
          <div className="mail container">
            Mail:
            <a href="pe.chognard@gmail.com"> pe.chognard@gmail.com</a>
          </div>
          <div className="infos container">
            <span>Social:</span>
            <div className="links">
              <a href="https://www.linkedin.com/in/pierre-etienne-chognard-39491722b/">
                Linkedin
              </a>
              <a href="https://github.com/PeChog">Github</a>
              <a href="https://www.instagram.com/quasardjkatarina_officiel/?hl=fr">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
