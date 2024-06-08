import React, { useEffect, useState } from 'react'
import './Anim.scss'

import { Link } from 'react-router-dom'

const Anim2 = ({slides}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPreviousSlide, setIsPreviousSlide] = useState(false);
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        const firstLoadTimer = setTimeout(() => {
            setIsFirstLoad(false);
        }, 2000); // Adjust the time as needed

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
                    className={`slide-wrapper ${index === currentSlide ? 'active' : ''} g-blur`}
                    style={{ zIndex: slides.length - index, backgroundImage: `url(${slide.bgImg})` }}

                >
                    <div className="slide-inner g-blur"
                    style={{ zIndex: slides.length - index, backgroundImage: `url(${slide.bgImg})`, backgroundSize:'contain', backgroundPositionX:'80%', backgroundRepeat:'no-repeat' }}

                    >
                        <div className="slide-bg-text ">
                            <p >{slide.headlineFirstLine}</p>
                            <p>{slide.headlineSecondLine}</p>
                        </div>
                        <div className="slide-rect-filter">
                            {/* <div className="slide-rect" style={{ borderImageSource: `url(${slide.rectImg})` }}></div> */}
                        </div>
                        <div className="slide-content">
                            <h1 className="slide-content-text">
                                {/* <p>{slide.headlineFirstLine}</p> */}
                                {/* <p>{slide.headlineSecondLine}</p> */}
                            </h1>
                            <Link to="/projects" className="slide-content-cta">more...</Link>
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
