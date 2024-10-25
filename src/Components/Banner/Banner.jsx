import { motion } from "framer-motion";
import React from "react";

export default function Banner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative w-12/12    h-[80vh] mx-auto flex flex-col justify-center items-center text-center bg-yellow-200 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className={`relative z-10 text-white px-4  `}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse text-orange-500">
          Welcome to Our E-Commerce Store
        </h1>
        <p className="text-lg md:text-xl mb-6 text-orange-500 animate-bounce ">
          Discover amazing products at unbeatable prices!
        </p>
        <button className="animate-pulse bg-orange-100 text-orange-500 px-6 py-2 rounded-full shadow-lg hover:bg-orange-200 font-semibold transition duration-300">
          Shop Now
        </button>
      </motion.div>

      <svg
        className="absolute bottom-0 "
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        overflow="auto"
        shapeRendering="auto"
        fill="#ffca99"
      >
        <defs>
          <path
            id="wavepath"
            d="M 0 2000 0 500 Q 56 369 112 500 t 112 0 112 0 112 0 112 0 112 0 112 0 112 0 112 0 112 0 112 0  v1000 z"
          />
          <path id="motionpath" d="M -224 0 0 0" />
        </defs>
        <g>
          <use xlinkHref="#wavepath" y={125} fill="#f78426">
            <animateMotion dur="5s" repeatCount="indefinite">
              <mpath xlinkHref="#motionpath" />
            </animateMotion>
          </use>
        </g>
      </svg>
    </motion.div>
  );
}
