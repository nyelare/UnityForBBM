import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Plan from "./Plan";
import { AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Plan />}></Route>
        <Route path="/errorpage" element={<ErrorPage />}></Route>
        <Route path="/" element={<Navigation />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
