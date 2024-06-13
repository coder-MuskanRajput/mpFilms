import { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { mapRange } from 'gsap/all';


const N_Hero = () => {
     
const useGSAP = () => {
    useEffect(() => {
        return () => {
            gsap.killTweensOf('.dot');
        };
    }, []);

    const animateDot = (move) => {
        gsap.to('.dot', {
            y: move.top,
            x: move.left,
            rotate:move.rotate,
            ease: 'power2.out', 
            duration: 0.5,
        });
        
    };

    return { animateDot };
};
    const [move, setMove] = useState({ top: 0, left: 0, rotate:0 });
    const { animateDot } = useGSAP();

    

    useEffect(() => {
        const onMouseMove = (e) => {
            const valX = mapRange(0, window.innerWidth - window.innerWidth / 4, 0, 1, e.clientX);
            const valY = mapRange(0, window.innerHeight - window.innerHeight / 4, 0, 1, e.clientY);

            const lerp = (x, y, a) => x * (1 - a) + y * a;
            const moveX = lerp(-20, 20, valX);
            const moveY = lerp(-20, 20, valY);
            const rotate = lerp(-5, 5, valX);

            setMove({ top: moveY, left: moveX, rotate:rotate });
        };

        window.addEventListener('mousemove', onMouseMove);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    useEffect(() => {
        animateDot(move);
    }, [move, animateDot]);
    
 
 

  
 
  return (
    <div className='w-full h-screen relative bg-[#101010] grid grid-flow-row grid-rows-3 overflow-x-hidden'>
        <div className=' gap-3 items-baseline p-5 overflow-hidden grid grid-cols-3'>
            <img  src="https://goingbionic.com/wp-content/uploads/2017/03/film-production-on-set.jpg" className='dot max-h-28 rounded-2xl object-cover mx-w-[300px]' alt="" />
            <img src="https://www.adorama.com/alc/wp-content/uploads/2018/03/shutterstock_226081837.jpg" className='dot max-h-44 rounded-2xl w-fit object-cover'  alt="" />
            <img src="https://blog.ipleaders.in/wp-content/uploads/2020/01/Screen-Shot-2020-01-14-at-6.04.40-PM.png" className='dot max-w-56 object-cover rounded-2xl' alt="" />
        </div> 
        <div className='grid grid-cols-2 gap-3 items-baseline p-5 overflow-hidden'>
        <img src="https://4.imimg.com/data4/LD/KW/MY-10072209/shooting-services-500x500.jpg" className='dot max-h-48 aspect-video rounded-2xl w-fit object-cover'  alt="" />
        <img src="https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/12/og-for-Iconic-Shooting-Locations-To-Explore-In-India.jpg" className='dot max-h-48 object-cover w-fit rounded-2xl' alt="" />
        </div>
        <div className='grid grid-cols-3 gap-3 items-baseline p-5 overflow-hidden'>
        <img  src="https://goingbionic.com/wp-content/uploads/2017/03/film-production-on-set.jpg" className='dot max-h-28 rounded-2xl object-cover max-w-[300px]' alt="" />
            <img src="https://www.adorama.com/alc/wp-content/uploads/2018/03/shutterstock_226081837.jpg" className='dot max-h-44 rounded-2xl w-fit object-cover'  alt="" />
            <img src="https://blog.ipleaders.in/wp-content/uploads/2020/01/Screen-Shot-2020-01-14-at-6.04.40-PM.png" className='dot max-w-56 object-cover rounded-2xl' alt="" />
        </div>
        <div  className="w-full h-full g2-blur absolute top-0 left-0 flex flex-col items-center justify-center">
            <h1 className="sm:text-9xl text-7xl text-white font-bold text-center"><span className="text-red-600">{'MP'.split("").map((child, idx) => (
        <span className='hoverText' key={idx}>
          {child}
        </span>
      ))}</span> <span className="text-blue-500">{'FILMS'.split("").map((child, idx) => (
        <span className='hoverText' key={idx}>
          {child}
        </span>
      ))}</span></h1>
            <p className="text-white opacity-75 text-xl text-center">Lorem ipsum dolor sit amet consectetur </p>
        </div>
    </div>
  )
}

export default N_Hero