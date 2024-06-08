// src/ServiceProvider.js

import React from 'react';
import { motion } from 'framer-motion';
import "./ServiceProvider.css"

const ServiceProvider = () => {
  const buttonTexts = [
    "Feature Films",
    "Ad Films",
    "Web Series",
    "TV Serials",
    "Corporate Films",
    "Commercial Films",
    "Documentaries",
    "Reality Show Auditions",
    "Av Shoot",
    "Music Album",
    "Short Films",
    "Film Events",
    "Any Kind of Film Promotion"
  ];

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center p-5">
      <h1 className="text-4xl text-center  text-white mb-20">We offer Line Production Services for all Projects</h1>
      <div className="flex flex-wrap justify-center gap-4">
        
        {buttonTexts.map((text, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.9 }}
            className="gr-btn-wrapper border border-[#aaaaaa88] rounded-full"
          >
            <div className="gr-btn ">
              {text}
            </div>
            <div className="gr-btn-bg"></div>
          </motion.div>
        ))}
        
      </div>
    </div>
  );
};

export default ServiceProvider;
