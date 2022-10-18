import { useRef } from "react";
import { motion } from "framer-motion";
import "./home.scss";

const Home = () => {
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
        className="Home"
        onMouseMove={mousePos}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1.5 },
        }}
        exit={{ opacity: 0 }}
      >
        <div className="app-cursor" ref={cursorRef}></div>
        <div className="menu">
          <h1>CONTACT</h1>
          <h1>ABOUT</h1>
          <h1>WORK</h1>
        </div>
        <div className="social">
          <span></span>
          <span>IG</span>
          <span>IN</span>
          <span>GH</span>
        </div>
        <div className="presentation">
          <h1>Pierre-Etienne Chognard</h1>
          <p>I love make creative design for websites</p>
          <h2>Currently looking for a front-end developer position</h2>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
