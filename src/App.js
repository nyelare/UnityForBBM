import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          <Navigation />
        </Link>
      </nav>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
