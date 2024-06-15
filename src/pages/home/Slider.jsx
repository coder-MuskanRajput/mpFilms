import React, { useState } from 'react';
import ReviewCard from './ReviewCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const reviews = [
    {
        id: 1,
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_dNKmk5idziwPzIR--pk5zHsTMkKcyGgBA&s",
        role: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur velit soluta fugiat et deserunt, sit consequatur rerum possimus ab hic ipsa quisquam repudiandae, molestias facilis consectetur odio. Illum, magnam commodi?',
        name: "Ritesh Modi"
    },
    {
        id: 2,
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEL8mVQcZIKu4bvR8lmXKRLNHRwpvnKaiXKQ&s",
        role: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur velit soluta fugiat et deserunt, sit consequatur rerum possimus ab hic ipsa quisquam repudiandae, molestias facilis consectetur odio. Illum, magnam commodi?',
        name: "Mautik Tolia"
    },
    {
        id: 3,
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_dNKmk5idziwPzIR--pk5zHsTMkKcyGgBA&s",
        role: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur velit soluta fugiat et deserunt, sit consequatur rerum possimus ab hic ipsa quisquam repudiandae, molestias facilis consectetur odio. Illum, magnam commodi?',
        name: "Rashmi Khandelwal"
    },
    {
        id: 4,
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_dNKmk5idziwPzIR--pk5zHsTMkKcyGgBA&s",
        role: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur velit soluta fugiat et deserunt, sit consequatur rerum possimus ab hic ipsa quisquam repudiandae, molestias facilis consectetur odio. Illum, magnam commodi?',
        name: "Rohit Muley"
    },
    {
        id: 5,
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_dNKmk5idziwPzIR--pk5zHsTMkKcyGgBA&s",
        role: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur velit soluta fugiat et deserunt, sit consequatur rerum possimus ab hic ipsa quisquam repudiandae, molestias facilis consectetur odio. Illum, magnam commodi?',
        name: "Abhishek B Jain"
    },
    
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
    };

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % reviews.length);
    };

    return (
        <div className="bg-[#171717] flex flex-col justify-center items-center min-h-screen relative px-4">
            <main className="bg-[#c3c2c2] my-4 w-full h-full max-h-3xl max-w-3xl rounded-3xl text-center p-8 sm:p-16">
                <h1 className="text-4xl mb-5 font-bold">Customer's Feedback</h1>
                {/* <p className="text-base">We've been helping businesses do their best since 2018</p> */}

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-[60px_auto_60px] [grid-template-areas:'slider_slider'_'nav-left_nav-right'] sm:[grid-template-areas:'nav-left_slider_nav-right'] gap-2 sm:gap-6">
                    <button onClick={handlePrev} className="[grid-area:nav-left] text-2xl -translate-x-1/2 md:translate-x-0">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <div id="slider" className="[grid-area:slider]">
                        <div id="list-cards" className="grid [grid-template-areas:'stack'] overflow-hidden">
                            {reviews.map((review, idx) => (
                                <ReviewCard key={review.id} review={review} isActive={idx === currentIndex} />
                            ))}
                        </div>
                    </div>
                    <button onClick={handleNext} className="[grid-area:nav-right] text-2xl">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Slider;
