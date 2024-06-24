import { useAnimate } from "framer-motion";
import React, { useRef, useState } from "react";
import { FiMousePointer } from "react-icons/fi";
import casting from '../../assets/casting.png'
import casting1 from '../../assets/casting1.webp'
import filming from '../../assets/filming.png'
import filming2 from '../../assets/filming2.webp'
import filming1 from '../../assets/filming1.webp'
import filming3 from '../../assets/filming3.webp'
import crew from '../../assets/crew.png'
import crew1 from '../../assets/crew1.webp'
import crew2 from '../../assets/crew2.webp'
import crew3 from '../../assets/crew3.webp'
import crew4 from '../../assets/crew4.webp'


export const NMOuseTrails = () => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false)
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        casting,
        casting1,
        crew,
        filming,
        filming1,
        crew1,
        crew2,
        crew3,
        crew4,
        filming2,
        filming3,
      ]}
    >
      <div className='flex flex-col md:p-12 p-5 justify-between gap-5 text-center items-center bg-[#101010]'>
            <h1 className='md:text-6xl text-5xl font-bold text-red-500 uppercase'>{'About MP Films'.split("").map((child, idx) => (
        <span className='hoverText' key={idx}>
          {child}
        </span>
      ))}
            </h1>
            <img src="https://pbs.twimg.com/media/EIQwL7QXsAAbH7S?format=jpg&name=medium" className='w-[80%] object-center  pointer-events-none aspect-video object-cover rounded-xl ' alt="" />
            <div className='md:text-lg text-sm text-gray-200 w-full sm:w-[70%] text-center flex flex-col gap-4 '>

            <p className="transition-all">{'MP Films has multiple , rich shooting locations an ultimate mixture of Wildlife, Leisure and Heritage . The Wide panorama of geographical variations , variety of heritage assets , lively urban locals , peaceful Ghats , exposure to world heritage sites coupled with th ease on procedures required to fulfill the shooting formalities have been some of the key factors that have raised Madhya Pradesh among the top-shooting destinations . Here are some top cities from the wishlist of renowned directors - Bhopal , Indore , Gwalior, Jabalpur, Chhatarpur , Chhindwara , Maheshwar , Omkarehwar , Ujjain , Hoshangabad , Panna , Bundlekhand , Bhedaghat , Mandu , Orchha , Pachmarhi ..'.split("").map((child, idx) => (
        <span className='hoverText' key={idx}>
          {child}
        </span>
      ))}
      
      </p>
            {isReadMoreOpen &&<p className={``}>Madhya Pradesh has emerged as a shooting friendly state for all kinds of filming activities . Our Madhya Pradesh government , administration and MP Tourism & Film board is very co-operative and supportive at every filming step . The government of Madhya Pradesh is also giving maximum subsidy benefits to filmmakers from all around INDIA for feature films , web-series , documentaries , TV-serials & web films .</p>}
           <p className="text-center"> <button onClick={()=>setIsReadMoreOpen(!isReadMoreOpen)} className="text-xl rounded-2xl bg-[#ED1C24] text-white w-32 h-12 hover:bg-white hover:text-[#ED1C24] transition-all">{isReadMoreOpen ? 'Make Less':'Read More'}</button></p>
            </div>
        </div>
    </MouseImageTrail>
  );
};

export const MouseImageTrail = ({
  children,
  // List of image sources
  images,
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector);

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 5 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};