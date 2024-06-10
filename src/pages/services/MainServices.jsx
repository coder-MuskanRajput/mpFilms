import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import mainService from "../../assets/mainService.png";

const MainService = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
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
    <div className="bg-[#171717] min-h-screen flex justify-center items-center">
      <motion.div
        className="flex justify-between flex-col items-center gap-9 text-left md:flex-row md:max-w-6xl"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
        }}
      >
        <div className="w-full md:w-1/2">
          <img
            src={mainService}
            alt="Image"
            className="w-full h-auto md:h-full"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-400 p-8">
          <motion.h1
            className="text-3xl md:text-4xl text-gray-300 font-bold mb-4"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } }
            }}
          >
            THE COMPLETE LINE PRODUCTION SERVICES IN MADHYA PRADESH
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }
            }}
          >
            MP Films The Complete Line Production services all around Madhya Pradesh offers a range of Filming services to clients across different spectrums. We cater to every Filming need with a passion and an eye for detailing. MP Films has specialized itself in arranging every shooting requirement closely from a pin to a plane. We have grown to become one of the most trustworthy, professional, reasonable, and dependable line production outfits all over Madhya Pradesh. Also, we are associated with multiple professional vendors in Mumbai who all are able to give the best shooting services with all essential equipment required for filming in MP at reasonable costs.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default MainService;
