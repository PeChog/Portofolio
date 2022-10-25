import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Work from "../pages/Work/Work";
import Portofolio from "../pages/Portofolio/Portofolio";
import Deliveroo from "../pages/Deliveroo/Deliveroo";
import Eliott from "../pages/Eliott/Eliott";

const AnimatedRoutes = () => {
  const [isHovered, setIshovered] = useState(false);
  const [click, setClick] = useState(false);

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
              />
            }
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/about"
            element={
              <About
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                isHovered={isHovered}
              />
            }
          ></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route
            path="/portofolio"
            element={
              <Portofolio
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                isHovered={isHovered}
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
              />
            }
          ></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
