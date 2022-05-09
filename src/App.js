import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Plan from "./components/Plan";



function App() {
  return (
    <Router>
      <nav>
        <Link to="/UnityForBBM">
          <Navigation />
        </Link>
      </nav>
      
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
