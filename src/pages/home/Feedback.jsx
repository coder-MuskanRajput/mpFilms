import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const Feedback = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const feedbacks = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur velit soluta fugiat et deserunt, sit consequatur rerum possimus ab hic ipsa quisquam repudiandae, molestias facilis consectetur odio. Illum, magnam commodi?',
      author: "Rohit Muley"
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur velit soluta fugiat et deserunt, sit consequatur rerum possimus ab hic ipsa quisquam repudiandae, molestias facilis consectetur odio. Illum, magnam commodi?',
      author: "Abhishek B Jain"
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur velit soluta fugiat et deserunt, sit consequatur rerum possimus ab hic ipsa quisquam repudiandae, molestias facilis consectetur odio. Illum, magnam commodi?',
      author: "Rashmi Khandelwal"
    },
    {
      id: 4,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur velit soluta fugiat et deserunt, sit consequatur rerum possimus ab hic ipsa quisquam repudiandae, molestias facilis consectetur odio. Illum, magnam commodi?',
      author: "Rohit Muley"
    },
    {
      id: 5,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur velit soluta fugiat et deserunt, sit consequatur rerum possimus ab hic ipsa quisquam repudiandae, molestias facilis consectetur odio. Illum, magnam commodi?',
      author: "Abhishek B Jain"
    },
    {
      id: 6,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur velit soluta fugiat et deserunt, sit consequatur rerum possimus ab hic ipsa quisquam repudiandae, molestias facilis consectetur odio. Illum, magnam commodi?',
      author: "Rashmi Khandelwal"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % (feedbacks.length / 2));
    }, 5000);
    return () => clearInterval(interval);
  }, [feedbacks.length]);

  const handlePagination = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="p-4 relative" style={{ backgroundImage: `url("https://faime-next.vercel.app/_next/static/media/testimonial.9c4d3c06.png")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative text-right text-[#ED1C24] text-2xl mr-40 mb-5 mt-5">FEEDBACK</div>
      <div className="relative text-right text-white text-7xl font-bold mb-8 mr-20">Customer Feedback</div>
      <div className="relative flex justify-start items-center w-full mb-8 pl-8">
        {Array.from({ length: feedbacks.length / 2 }, (_, index) => (
          <span
            key={index}
            onClick={() => handlePagination(index)}
            className={`cursor-pointer w-4 h-4 rounded-full mx-1 ${currentPage === index ? 'bg-[#ED1C24]' : 'bg-gray-400'}`}
          />
        ))}
      </div>
      <div className="relative carousel w-full flex justify-center gap-4 flex-wrap">
        <AnimatePresence initial={false} mode="wait">
          {feedbacks.slice(currentPage * 2, currentPage * 2 + 2).map(feedback => (
            <motion.div key={feedback.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className='w-full rounded-2xl md:w-5/12 h-96 bg-white flex flex-col items-center justify-center p-4'>
              <div className='text-4xl text-[#ED1C24] mb-4'>
                <FontAwesomeIcon icon={faComment} className="text-4xl text-[#ED1C24]" />
              </div>
              <div className='text-center mb-4'>
                {feedback.text}
              </div>
              <div className='text-right font-bold w-full'>- {feedback.author}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Feedback;
