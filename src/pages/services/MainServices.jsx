import React from 'react';
import { motion } from 'framer-motion';
import logo from "../../assets/logo.png";

const MainService = () => {
  return (
    <div className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLGDN8K4tIry6XbHDldgcZDEJBLgnTkDD9tg&s')" }}>
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative z-10 p-8">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-lg text-justify md:text-2xl w-full md:w-1/3 font-bold mb-8 md:mb-0 md:mr-4"
          >
            We love what we do and on every project, we work with the sole purpose of providing complete satisfaction to our clients by our services.
          </motion.div>

          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            src={logo}
            alt="Logo"
            className="w-48 h-28 md:w-64 md:h-40"
          />
        </div>

        <div className="flex justify-center items-center h-full">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotateY: 360 }}
            className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg w-full md:max-w-md"
          >
            <p className="text-black text-justify text-base md:text-lg">
             MP Films The Complete Line Production services all around Madhya Pradesh offers a range of Filming services to clients across different spectrums. We cater to every Filming need with a passion and an eye for detailing. MP Films has specialized itself in arranging every shooting requirement closely from a pin to a plane. We have grown to become one of the most trustworthy, professional, reasonable, and dependable line production outfits all over Madhya Pradesh. Also, we are associated with multiple professional vendors in Mumbai who all are able to give the best shooting services with all essential equipment required for filming in MP at reasonable costs.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-4 left-0 right-0 text-white text-lg md:text-2xl font-bold text-center"
        style={{ textShadow: "0 0 10px rgba(255, 0, 0, 1)" }}
      >
        THE COMPLETE LINE PRODUCTION SERVICES IN MADHYA PRADESH
      </motion.div>
    </div>
  );
};

export default MainService;
