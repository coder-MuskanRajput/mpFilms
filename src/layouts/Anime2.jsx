import React, { useEffect, useState } from 'react'
import './Anim.scss'
import bgImg1 from "../assets/Sajish.jpeg"
import bgimg2 from "../assets/Online24.jpeg"
import bgimg3 from "../assets/LifeNavrangi.jpeg"

const slides = [
    {
        headlineFirstLine: "SilenceTV",
        headlineSecondLine: "Its slow",
        sublineFirstLine: "This is...",
        sublineSecondLine: "an example",
        bgImg: bgImg1,
        // rectImg: "https://orchaa.wordpress.com/wp-content/uploads/2013/05/dokra1.jpg"
    },
    {
        headlineFirstLine: "Try it out",
        headlineSecondLine: "Why not",
        sublineFirstLine: "This is...",
        sublineSecondLine: "an another example",
        bgImg: bgimg2,
        // rectImg: "https://i.pinimg.com/550x/a9/b7/a1/a9b7a1b48104114cd42c82ee8474f603.jpg"
    },
    {
        headlineFirstLine: "Let it be",
        headlineSecondLine: "Here",
        sublineFirstLine: "Min is...",
        sublineSecondLine: "Explore the world",
        bgImg: bgimg3,

        // rectImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4pY-XbT8bTCDmnn-DCkNtNZrda7FMiOVtSw&s"
    },
    // Add more slides as needed
];

const Anim2 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPreviousSlide, setIsPreviousSlide] = useState(false);
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        const firstLoadTimer = setTimeout(() => {
            setIsFirstLoad(false);
        }, 3000); // Adjust the time as needed

        return () => clearTimeout(firstLoadTimer);
    }, []);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            updateSlide((currentSlide + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    const updateSlide = (index) => {
        setIsPreviousSlide(index < currentSlide);
        setCurrentSlide(index);
    };

    return (
        <div id="app" className={`wrapper ${isPreviousSlide ? 'is-previous' : ''} ${isFirstLoad ? 'first-load' : ''}`}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide-wrapper ${index === currentSlide ? 'active' : ''}`}
                    style={{ zIndex: slides.length - index, backgroundImage: `url(${slide.bgImg})` }}
                >
                    <div className="slide-inner">
                        <div className="slide-bg-text">
                            <p>{slide.headlineFirstLine}</p>
                            <p>{slide.headlineSecondLine}</p>
                        </div>
                        <div className="slide-rect-filter">
                            {/* <div className="slide-rect" style={{ borderImageSource: `url(${slide.rectImg})` }}></div> */}
                        </div>
                        <div className="slide-content">
                            <h1 className="slide-content-text">
                                <p>{slide.headlineFirstLine}</p>
                                <p>{slide.headlineSecondLine}</p>
                            </h1>
                            <a className="slide-content-cta">more...</a>
                        </div>
                        <h2 className="slide-side-text">
                            <span>{slide.sublineFirstLine} / </span>
                            <span>{slide.sublineSecondLine}</span>
                        </h2>
                    </div>
                </div>
            ))}
            <div className="controls-container">
                {slides.map((slide, index) => (
                    <button
                        key={index}
                        className={`controls-button ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => updateSlide(index)}
                    >
                        {slide.headlineFirstLine} {slide.headlineSecondLine}
                    </button>
                ))}
            </div>
            <div className="pagination-container">
                {slides.map((slide, index) => (
                    <span
                        key={index}
                        className={`pagination-item ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => updateSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Anim2;
