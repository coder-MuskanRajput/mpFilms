import React from 'react';
import { motion } from 'framer-motion';
import mp from "../../assets/mp.png"

const AboutMpFilms = () => {
  return (
    <div className=" relative flex flex-col  justify-center min-h-screen p-4" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRx2CuUHpaeR3wQh5eJck3BrqSKrooJu3JeA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRx2CuUHpaeR3wQh5eJck3BrqSKrooJu3JeA&s")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-80"></div>
      <motion.div
        className=" relative text-3xl text-[#ED1C24] font-bold mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        ABOUT MP FILMS
      </motion.div>
      <div className=" relative flex flex-col md:flex-row items-center md:items-start">
        <motion.div
          className="md:w-1/3 relative flex items-center justify-center md:justify-end mb-4 md:mb-0 md:mr-8"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
           <img className='h-72' src={mp} alt="India Map" />
        </motion.div>
        <motion.div
          className=" relative text-white md:w-1/2 text-justify text-lg"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
            MP Films has multiple , rich shotting locations  an ultimate mixture of Wildlife, Leisure and Heritage . The Wide panorama of geographical variations , variety of heritage assets , lively urban locals , peaceful Ghats , exposure to world heritage sites coupled with th ease on procedures required to fulfill the shooting formalities have been some of the key factors that have raised Madhya Pradesh among the top-shooting destinations . Here are some top cities from the wishlist of renowned directors - Bhopal , Indore , Gwalior, Jabalpur, Chhatarpur , Chhindwara , Maheshwar , Omkarehwar , Ujjain  , Hoshangabad , Panna , Bundlekhand , Bhedaghat , Mandu , Orchha , Pachmarhi .
            <br /><br />
           Madhya Pradesh has emerged as a shooting friendly state for all kinds of filming activities . Our Madhya Pradesh government , administration and MP Tourism & Film board is very co-operative and supportive at every filming step . The government of Madhya Pradesh is also giving maximum subsidy benefits to filmmakers from all around INDIA for feature films , web-series , documentaries , TV-serials & web films . 
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMpFilms;
