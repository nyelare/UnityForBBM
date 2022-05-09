import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Plan from "./Plan";
import Navigation from "./Navigation";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          <Navigation />
        </Link>
      </nav>
      <Routes>
        <Route>
          <Route path="/" element={<Plan />}></Route>
          <Route path="/errorpage" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
