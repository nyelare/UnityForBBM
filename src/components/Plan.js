import React from "react";
import { stockData } from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Plan() {
  return (
    <div className="h-full max-w-[1200px] mx-auto container">
      <h1 className="p-8 text-4xl font-bold text-center text-red-500 font-Mont">
        Plano para sa Lahat
      </h1>

      <div className="grid grid-cols-3 gap-4 px-4 place-items-center sm:grid-cols-4 md:grid-cols-6">
        {stockData.map((data, key) => {
          return (
            <div
              key={key}
              className="text-center duration-200 ease-in hover:scale-125"
            >
              <Link to="/errorpage">
                <img
                  src={data.image}
                  alt={data.alt}
                  className="w-[60px] h-[60px] block my-0 mx-auto cursor-pointer sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]"
                />
                <h1 className="font-semibold text-red-500 font-Mont text-[15px] sm:text-[20px]">
                  {data.name}
                </h1>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Plan;
