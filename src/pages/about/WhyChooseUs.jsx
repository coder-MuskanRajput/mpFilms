import React from 'react';
import { motion } from 'framer-motion';
import why from "../../assets/why.png";

const WhyChooseUs = () => {
  return (
    <div
      className="relative flex flex-col justify-center min-h-screen p-4"
      style={{
        backgroundImage: `url("https://faime-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-2.efac6c73.jpg&w=750&q=75")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
        <motion.div
          className="text-3xl text-[#ED1C24] font-bold mb-8"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          WHY CHOOSE US?
        </motion.div>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <motion.div
            className="md:w-1/2 text-lg"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ul className="list-disc text-white pl-5 text-3xl space-y-2">
              <li>All team has worked before in Mumbai film industry</li>
              <li>Able to give pre production to post production services</li>
              <li>Perfect planning & execution during the shoot</li>
              <li>Cost effective</li>
              <li>Quality content</li>
              <li>On time delivery</li>
              <li>Working transparency</li>
            </ul>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex items-center justify-center md:justify-end mb-4 md:mb-0 md:ml-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={why} alt="Why Choose Us" className="w-full max-w-lg h-auto" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
