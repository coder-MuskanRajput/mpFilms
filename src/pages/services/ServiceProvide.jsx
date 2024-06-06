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
      <h1 className="text-4xl text-center text-white mb-10">We offer Line Production Services for all Projects</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {buttonTexts.map((text, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="gradient-border"
          >
            <div className="gradient-border-content text-white py-2 px-4">
              {text}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceProvider;
