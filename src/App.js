import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AnimatedRoutes from "./components/AnimatedRoutes";
import "./App.scss";

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
