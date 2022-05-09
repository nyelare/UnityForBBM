import React from "react";
import { Link, useNavigate } from "react-router-dom";
import picture from "../components/images/fubbm.jpg";
import { motion } from "framer-motion";

function ErrorPage() {
  return (
    <motion.div
      className="h-full max-w-[1200px] mx-auto container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="p-6 text-5xl font-bold text-center text-red-500 font-Mont sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
        UNITY
      </h1>
      <div className="flex flex-col gap-16">
        <img
          src={picture}
          alt="ngiwi"
          className="mx-auto w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] xl:w-[750px] xl:h-[750px] shadow-xl shadow-rose-300 rounded-2xl"
        />
        <Link to="/">
          <button className="flex w-[150px] h-[100px] mx-auto shadow-xl rounded-xl bg-rose-500 hover:scale-110 shadow-rose-900 sm:w-[250px] sm:h-[100px] items-center justify-center">
            <h1 className="text-xl font-semibold font-Mont sm:text-3xl">
              TANGINA KA
            </h1>
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default ErrorPage;
