import React from 'react';

const ReviewCard = ({ review, isActive }) => {
    return (
        <div className={`card [grid-area:stack] transition-all duration-500 ${isActive ? '' : 'opacity-0'}`}>
            <blockquote className={`bg-[#171717] text-white rounded-md p-6 text-sm relative isolate transition-all duration-500 ${isActive ? '' : 'scale-0 before:-translate-y-full'}`}>
                {review.review}
                <div className={`details text-sm transition-all duration-500 flex flex-col items-center gap-2 mt-6 ${isActive ? '' : 'scale-0 translate-y-[150px]'}`}>
                    <img className="w-16 h-16 object-cover rounded-full" src={review.avatar} alt={`${review.name}'s avatar`} />
                    <div>
                        <p className="text-sm font-bold">{review.name}</p>
                        <p className="text-xs">{review.role}</p>
                    </div>
                </div>
            </blockquote>
        </div>
    );
};

export default ReviewCard;

