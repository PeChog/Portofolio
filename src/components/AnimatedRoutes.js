import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Work from "../pages/Work/Work";
import Portofolio from "../pages/Portofolio/Portofolio";
import Deliveroo from "../pages/Deliveroo/Deliveroo";
import Eliott from "../pages/Eliott/Eliott";
// import SoundToggle from "../components/SoundToggle/SoundToggle";

const AnimatedRoutes = () => {
  const [isHovered, setIshovered] = useState(false);
  const [click, setClick] = useState(false);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const audioPlayer = useRef();

  // const togglePlayPause = () => {
  //   const prevValue = isPlaying;
  //   setIsPlaying(!prevValue);
  //   if (!prevValue) {
  //     audioPlayer.current.play();
  //   } else {
  //     audioPlayer.current.pause();
  //   }
  // };

  let cursorRef = useRef();
  const mousePos = (event) => {
    cursorRef.current.setAttribute(
      "style",
      `top:${event.pageY - 20}px; left:${event.pageX - 20}px;`
    );
  };

  const onClick = (event) => {
    setClick(!click);
  };

  const onMouseEnter = () => {
    setIshovered(true);
  };

  const onMouseLeave = () => {
    setIshovered(false);
  };
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        {/* <SoundToggle /> */}
        <Routes location={location}>
          <Route
            path="/"
            element={
              <Home
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                isHovered={isHovered}
                onClick={onClick}
                click={click}
                mousePos={mousePos}
                cursorRef={cursorRef}

                // togglePlayPause={togglePlayPause}
                // isPlaying={isPlaying}
                // audioPlayer={audioPlayer}
              />
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <Contact
                mousePos={mousePos}
                cursorRef={cursorRef}
                // togglePlayPause={togglePlayPause}
                // isPlaying={isPlaying}
                // audioPlayer={audioPlayer}
              />
            }
          ></Route>
          <Route
            path="/about"
            element={
              <About
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                isHovered={isHovered}
                mousePos={mousePos}
                cursorRef={cursorRef}
              />
            }
          ></Route>
          <Route
            path="/work"
            element={<Work mousePos={mousePos} cursorRef={cursorRef} />}
          ></Route>
          <Route
            path="/portofolio"
            element={
              <Portofolio
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                isHovered={isHovered}
                mousePos={mousePos}
                cursorRef={cursorRef}
              />
            }
          ></Route>
          <Route
            path="/deliveroo"
            element={
              <Deliveroo
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                isHovered={isHovered}
                mousePos={mousePos}
                cursorRef={cursorRef}
              />
            }
          ></Route>
          <Route
            path="/eliott"
            element={
              <Eliott
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                isHovered={isHovered}
                mousePos={mousePos}
                cursorRef={cursorRef}
              />
            }
          ></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
