import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroPage = () => {
    const ourEmplyee = [
        {
            work: "I'M Line Producer",
            Name1: 'Sachin',
            Name2: 'Sharma',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas asperiores obcaecati culpa, ratione cumque temporibu.',
            img: 'https://faime-next.vercel.app/_next/static/media/director2.ae539b43.jpg'
        },
        {
            work: "I'M Line Producer",
            Name1: 'Sachin',
            Name2: 'Sharma',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas asperiores obcaecati culpa, ratione cumque temporibu.',
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
        <div className='relative bg-black w-full min-h-screen'>
            <img src={ourEmplyee[isOpen].img} className='object-contain w-full h-full' alt="" />
        <div  className={`w-full bgContain absolute top-0 left-0 text-white p-5 min-h-screen flex md:flex-row flex-col items-center justify-center bg-cover bg-no-repeat`}>
            
            <div className='flex gap-5 md:w-1/2 '>
                <div className='flex flex-col items-center justify-center w-fit gap-3'>
                    <p className='flex flex-col items-center w-fit justify-center text-[10px]'>
                        <span>F</span>
                        <span>O</span>
                        <span>L</span>
                        <span>L</span>
                        <span>O</span>
                        <span>W</span>
                    </p>
                    <div className='w-[1px] h-5 bg-[#dddddd64]'></div>
                    <div className='flex flex-col gap-3'>
                        <div className='p-1 hover:bg-[#ED1C24] cursor-pointer text-white w-fit aspect-square flex items-center justify-center rounded-full border border-[#dddddd64]'><i className='ri-facebook-fill'></i></div>
                        <div className='p-1 hover:bg-[#ED1C24] cursor-pointer text-white w-fit aspect-square flex items-center justify-center rounded-full border border-[#dddddd64]'><i className='ri-twitter-fill'></i></div>
                        <div className='p-1 hover:bg-[#ED1C24] cursor-pointer text-white w-fit aspect-square flex items-center justify-center rounded-full border border-[#dddddd64]'><i className='ri-instagram-line'></i></div>
                        <div className='p-1 hover:bg-[#ED1C24] cursor-pointer text-white w-fit aspect-square flex items-center justify-center rounded-full border border-[#dddddd64]'><i className='ri-pinterest-fill'></i></div>
                    </div>
                </div>
                <div className='flex flex-col justify-center px-5 py-3'>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isOpen}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className='text-[#ED1C24] text-lg font-semibold uppercase'>{ourEmplyee[isOpen].work}</p>
                            <h1 className='uppercase text-[100px] h-[110px] font-bold'>{ourEmplyee[isOpen].Name1}</h1>
                            <h1 className='uppercase text-[100px] font-bold'>{ourEmplyee[isOpen].Name2}</h1>
                            <p className='text-lg tracking-wide text-gray-400 w-[80%]'>{ourEmplyee[isOpen].description}</p>
                        </motion.div>
                    </AnimatePresence>
                    <Link to="/contact" className='px-12 py-3 hover:bg-[#ED1C24] border border-[#dddddd64] rounded my-8 w-fit'>Contact Me</Link>
                </div>
            </div>
            <div hidden className='md:w-1/2 h-full flex flex-col items-end gap-5 justify-center p-6 '>
                <div onClick={changeUp} className='hidden p-1 px-2 active:scale-95 text-xl font-bold hover:bg-[#ED1C24] cursor-pointer text-white w-fit aspect-square items-center justify-center rounded-full border border-[#dddddd64]'><i className='ri-arrow-up-s-line'></i></div>
                <div onClick={changeDown} className='hidden p-1 px-2 active:scale-95 text-xl font-bold hover:bg-[#ED1C24] cursor-pointer text-white w-fit aspect-square items-center justify-center rounded-full border border-[#dddddd64]'><i className='ri-arrow-down-s-line'></i></div>
            </div>
        </div>
        </div>
    );
}

export default HeroPage;
