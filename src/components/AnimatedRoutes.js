import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Work from "../pages/Work/Work";
import Portofolio from "../pages/Portofolio/Portofolio";
import Deliveroo from "../pages/Deliveroo/Deliveroo";
import Eliott from "../pages/Eliott/Eliott";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/portofolio" element={<Portofolio />}></Route>
          <Route path="/deliveroo" element={<Deliveroo />}></Route>
          <Route path="/eliott" element={<Eliott />}></Route>
        </Routes>
      </AnimatePresence>
      {/* <AnimatePresence>
        <Routes></Routes>
      </AnimatePresence> */}
    </>
  );
};

export default AnimatedRoutes;
