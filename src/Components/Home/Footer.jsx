import { motion } from "framer-motion";
import React from "react";

export default function Footer() {
  const footerMenu = [
    {
      name: <div>footer1</div>,
    },
    {
      name: <div>footer2</div>,
    },
    {
      name: <div>footer3</div>,
    },
    {
      name: <div>footer4</div>,
    },
  ];
  return (
    <div className="w-full bg-gray-900 text-white ">
      <div className="grid lg:grid-cols-4 items-center justify-center w-10/12 mx-auto text-center text-3xl md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {footerMenu.map((item, index) => {
          return <motion.div>{item.name}</motion.div>;
        })}
      </div>
    </div>
  );
}
