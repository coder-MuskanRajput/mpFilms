// src/ServiceProvider.js

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./ServiceProvider.css";

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

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Ensure the animation re-triggers each time the element is in view
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center p-5">
      <h1 className="text-4xl text-center text-white mb-20">We offer Line Production Services for all Projects</h1>
      <motion.div
        className="flex flex-wrap md:pl-24 md:pr-24 sm:px-12 px-6 text-center justify-center gap-4"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.1,
              when: "beforeChildren"
            }
          }
        }}
      >
        {buttonTexts.map((text, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.9 }}
            className="gr-btn-wrapper md:text-xl text-xs sm:text-sm w-full sm:w-fit border p-2 border-[#aaaaaa88] rounded-full"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="gr-btn">
              {text}
            </div>
            <div className="gr-btn-bg"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceProvider;
