import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Plan from "./Plan";
import ErrorPage from "./ErrorPage";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/UnityForBBM/" element={<Plan />}></Route>
        <Route path="/errorpage" element={<ErrorPage />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
