import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import sachin from '../../assets/sachin.png'

const AboutMe = () => {
    const ourEmplyee = [
        {
            work: "I'M Line Producer",
            Name1: 'Sachin',
            Name2: 'Sharma',
            description: "As a line producer, I streamline the producer's and director's vision into seamless reality, crafting innovative solutions that turn hard work into effortless brilliance.",
            img: 'https://faime-next.vercel.app/_next/static/media/director2.ae539b43.jpg'
        },
        {
            work: "I'M Line Producer",
            Name1: 'Sachin',
            Name2: 'Sharma',
            description: "As a line producer, I streamline the producer's and director's vision into seamless reality, crafting innovative solutions that turn hard work into effortless brilliance.",
            img: 'https://faime-next.vercel.app/_next/static/media/director2.ae539b43.jpg'
        }
    ];

    const [isOpen, setIsOpen] = useState(0);

    const changeUp = () => {
        setIsOpen(prev => (prev === 0 ? ourEmplyee.length - 1 : prev - 1));
    };

    const changeDown = () => {
        setIsOpen(prev => (prev === ourEmplyee.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
      changeUp()
    
      return () => {
        
      }
    }, [])
    

    return (
        <div  className='relative bg-black w-full min-h-screen'>
            {/* <img src={ourEmplyee[isOpen].img} className='object-contain w-full h-full' alt="" /> */}
        <div  className={`w-full bgContain absolute top-0 left-0 text-white p-5 gap-4 h-screen flex md:flex-row flex-col-reverse items-center justify-center bg-cover bg-no-repeat`}>
            
            <div className='flex gap-5 md:h-full h-1/2 md:w-1/2 w-full text-center md:text-start'>
                <div className='flex flex-col items-center  justify-center w-fit gap-3 md:block hidden'>
                    <p className='flex p-3 flex-col items-center w-fit justify-center text-[10px]'>
                        <span>F</span>
                        <span>O</span>
                        <span>L</span>
                        <span>L</span>
                        <span>O</span>
                        <span>W</span>
                    </p>
                    <div className='w-[1px] ml-4 h-5 bg-[#dddddd64]'></div>
                    <div className='flex flex-col gap-3'>
                        <div className='p-1 hover:bg-[#ED1C24] cursor-pointer text-white w-fit aspect-square flex items-center justify-center rounded-full border border-[#dddddd64]'><i className='ri-facebook-fill'></i></div>
                        <div className='p-1 hover:bg-[#ED1C24] cursor-pointer text-white w-fit aspect-square flex items-center justify-center rounded-full border border-[#dddddd64]'><i className='ri-twitter-fill'></i></div>
                        <div className='p-1 hover:bg-[#ED1C24] cursor-pointer text-white w-fit aspect-square flex items-center justify-center rounded-full border border-[#dddddd64]'><i className='ri-instagram-line'></i></div>
                        <div className='p-1 hover:bg-[#ED1C24] cursor-pointer text-white w-fit aspect-square flex items-center justify-center rounded-full border border-[#dddddd64]'><i className='ri-pinterest-fill'></i></div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center px-5 py-3'>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isOpen}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className='text-[#ED1C24] text-lg font-semibold uppercase'>{ourEmplyee[isOpen].work}</p>
                            <h1 className='uppercase text-[40px] sm:text-[50px] md:text-[80px] lg:text-[120px] h-[40px] sm:h-[50px] md:h-[80px] lg:h-[120px] font-bold'>{ourEmplyee[isOpen].Name1}</h1>
                            <h1 className='uppercase text-[40px] sm:text-[50px] md:text-[100px] lg:text-[120px] font-bold'>{ourEmplyee[isOpen].Name2}</h1>
                            <p className='md:text-lg text-base tracking-wide text-gray-400 w-full md:w-[80%]'>{ourEmplyee[isOpen].description}</p>
                        </motion.div>
                    </AnimatePresence>
                    <Link to="/contact" className='px-12 py-3 hover:bg-[#ED1C24] border border-[#dddddd64] rounded my-8 w-fit'>Contact Me</Link>
                </div>
            </div>
            <div className='md:w-1/2 w-full min-w-[40vw] md:h-full h-1/2 flex flex-col items-center gap-5 justify-center p-2'>
            <img src={sachin} alt="" className='w-full h-full object-contain object-center overflow-hidden max-w-[500px]' />
                {/* <div onClick={changeUp} className='hidden p-1 px-2 active:scale-95 text-xl font-bold hover:bg-[#ED1C24] cursor-pointer text-white w-fit aspect-square items-center justify-center rounded-full border border-[#dddddd64]'><i className='ri-arrow-up-s-line'></i></div> */}
                {/* <div onClick={changeDown} className='hidden p-1 px-2 active:scale-95 text-xl font-bold hover:bg-[#ED1C24] cursor-pointer text-white w-fit aspect-square items-center justify-center rounded-full border border-[#dddddd64]'><i className='ri-arrow-down-s-line'></i></div> */}
            </div>
        </div>
        </div>
    );
}

export default AboutMe;
