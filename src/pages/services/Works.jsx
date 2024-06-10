import React, { useEffect, useRef, useState } from 'react';
import './Works.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import location from "../../assets/location.png";
import crew from "../../assets/crew.png";
import rentals from "../../assets/rentals.png";
import manpower from "../../assets/manpower.png";
import catering from "../../assets/catering.png";
import filming from "../../assets/filming.png";
import casting from "../../assets/casting.png";
import location1 from "../../assets/location1.JPG"
import location2 from "../../assets/location2.JPG"
import location3 from "../../assets/location3.JPG"
import location4 from "../../assets/location4.JPG"
import location5 from "../../assets/location5.JPG"
import filming1 from "../../assets/filming1.jpg"
import filming2 from "../../assets/filming2.JPG"
import filming3 from "../../assets/filming3.jpg"
import filming4 from "../../assets/filming4.JPG"
import filming5 from "../../assets/filming5.JPG"
import travel1 from "../../assets/travel1.JPG"
import travel2 from "../../assets/travel2.jpg"
import travel3 from "../../assets/travel3.jpg"
import travel4 from "../../assets/travel4.JPG"
import travel5 from "../../assets/travel5.jpg"
import crew1 from "../../assets/crew1.JPG"
import crew2 from "../../assets/crew2.JPG"
import crew3 from "../../assets/crew3.JPG"
import crew4 from "../../assets/crew4.JPG"
import crew5 from "../../assets/crew5.jpg"
import rentals1 from "../../assets/rentals1.JPG"
import rentals2 from "../../assets/rentals2.JPG"
import rentals3 from "../../assets/rentals3.JPG"
import rentals4 from "../../assets/rentals4.JPG"
import rentals5 from "../../assets/rentals5.JPG"
import casting1 from "../../assets/casting1.jpg"
import casting2 from "../../assets/casting2.JPG"
import casting3 from "../../assets/casting3.JPG"
import casting4 from "../../assets/casting4.JPG"
import casting5 from "../../assets/casting5.JPG"
import man1 from "../../assets/man1.JPG"
import man2 from "../../assets/man2.jpg"
import man3 from "../../assets/man3.jpg"
import man4 from "../../assets/man4.jpg"
import man5 from "../../assets/man5.JPG"
// import catering1 from "../../assets/catering1.JPG"
// import catering2 from "../../assets/catering2.JPG"
// import catering3 from "../../assets/catering3.JPG"
// import catering4 from "../../assets/catering4.JPG"
// import catering5 from "../../assets/catering5.JPG"


const Works = () => {
  const animationElements = useRef([]);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);

  const galleries = [
    [
      location1,
      location2,
      location3,
      location4,
      location5,
    ],
    [
       filming1,
       filming2,
       filming3,
       filming4,
       filming5,
    ],
    [
      travel1,
      travel2,
      travel3,
      travel4,
      travel5,
    ],
    [
       crew1,
       crew2,
       crew3,
       crew4,
       crew5,
    ],
    [
       rentals1,
       rentals2,
       rentals3,
       rentals4,
       rentals5,
    ],
    [
       casting1,
       casting2,
       casting3,
       casting4,
       casting5
    ],
    [
       man1,
       man2,
       man3,
       man4,
       man5,
    ],
    [
       "https://static.wixstatic.com/media/1a56e2_d4a5b524357041c8bd24eedfceed333b~mv2.jpeg/v1/fill/w_301,h_169,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202020-04-27%20at%2017_48_31_jp.jpeg",
       "https://salsaverde.es/wp-content/uploads/2016/10/15675765_10158012738500523_7036287175439312472_o.jpg",
       "https://www.bruleefoodservice.com/wp-content/uploads/2020/01/tv-film-gallery-11.jpg",
       "https://content.jdmagicbox.com/comp/ernakulam/u5/0484px484.x484.131126110815.k7u5/catalogue/omc-cateres-and-event-makers-eroor-ernakulam-event-organisers-o442m.jpg",
       "https://5.imimg.com/data5/SELLER/Default/2023/5/312453139/NO/MK/WE/190510459/film-shoot-catering-services-500x500.jpg",
    ]
  ];

  useEffect(() => {
    const checkIfInView = () => {
      const windowHeight = window.innerHeight;
      const windowTopPosition = window.scrollY;
      const windowBottomPosition = windowTopPosition + windowHeight;

      animationElements.current.forEach((element) => {
        const elementHeight = element.offsetHeight;
        const elementTopPosition = element.offsetTop;
        const elementBottomPosition = elementTopPosition + elementHeight;

        if (
          elementBottomPosition >= windowTopPosition &&
          elementTopPosition <= windowBottomPosition
        ) {
          element.classList.add('animate');
        } else {
          element.classList.remove('animate');
        }
      });
    };

    window.addEventListener('scroll', checkIfInView);
    window.addEventListener('resize', checkIfInView);
    checkIfInView(); // Initial check

    return () => {
      window.removeEventListener('scroll', checkIfInView);
      window.removeEventListener('resize', checkIfInView);
    };
  }, []);

  const openGallery = (galleryIndex) => {
    setCurrentGallery(galleries[galleryIndex]);
    setPhotoIndex(0);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const nextImage = () => {
    setPhotoIndex((photoIndex + 1) % currentGallery.length);
  };

  const prevImage = () => {
    setPhotoIndex((photoIndex + currentGallery.length - 1) % currentGallery.length);
  };

  return (
    <div className='bg-gray-300'>
      <div id="container">
        <header className="full">
          <section className="half p-10 bg-[#3c3c3c] left parallax" ref={el => animationElements.current[0] = el}>
            <h1 className='text-2xl text-white font-bold mb-6'>LOCATION SCOUTING SERVICE</h1>
            <p className='text-white'>We have expert location scouts in every region of MP, to help overcome administrative, linguistic and cultural barriers and ensure smooth sailing for your filming projects.</p>
          </section>
          <section className="half right">
            <figure className="parallax" ref={el => animationElements.current[0] = el} onClick={() => openGallery(0)}>
              <img src={location} alt="Location Scouting" />
            </figure>
          </section>
        </header>
        <section className="full">
          <section className="half p-10 bg-[#3c3c3c] right parallax" ref={el => animationElements.current[1] = el}>
            <h1 className='text-2xl text-white font-bold mb-6'>FILMING PERMISSIONS</h1>
            <p className='text-white'>Our film fixers work with state, city and local administrations, helping you avoid a ton of complicated paperwork for securing filming permissions.</p>
          </section>
          <section className="half left">
            <figure className="parallax" ref={el => animationElements.current[1] = el} onClick={() => openGallery(1)}>
              <img src={filming} alt="Filming Permissions" />
            </figure>
          </section>
        </section>
        <footer className="full">
          <section className="half left p-10 bg-[#3c3c3c] parallax" ref={el => animationElements.current[2] = el}>
            <h1 className='text-2xl text-white font-bold mb-6'>TRAVEL , BOARDING & LODGING</h1>
            <p className='text-white'>Worried about your travel , stay , F&B while you were here? Just leave it on us!!! We will give you the best options for your TBL that comes under your budgets.</p>
          </section>
          <section className="half right">
            <figure className="parallax" ref={el => animationElements.current[2] = el} onClick={() => openGallery(2)}>
              <img src="https://static.thenounproject.com/png/1761355-200.png" alt="Travel, Boarding & Lodging" />
            </figure>
          </section>
        </footer>
        <section className="full">
          <section className="half p-10 bg-[#3c3c3c] right parallax" ref={el => animationElements.current[3] = el}>
            <h1 className='text-2xl text-white font-bold mb-6'>FILMING CREW</h1>
            <p className='text-white'>We have a strong working relationship with the best filming crews in MP.</p>
          </section>
          <section className="half left">
            <figure className="parallax" ref={el => animationElements.current[3] = el} onClick={() => openGallery(3)}>
              
              <img src={crew} alt="Filming Crew" />
            </figure>
          </section>
        </section>
        <footer className="full">
          <section className="half p-10 bg-[#3c3c3c] left parallax" ref={el => animationElements.current[4] = el}>
            <h1 className='text-2xl text-white font-bold mb-6'>EQUIPMENT RENTALS</h1>
            <p className='text-white'>Whether you need a single piece of shooting equipment or an entire kit for your filming project in Madhya Pradesh, our film fixers connect with the best rental houses for procuring state-of-the-art equipment.</p>
          </section>
          <section className="half right">
            <figure className="parallax" ref={el => animationElements.current[4] = el} onClick={() => openGallery(4)}>
              <img src={rentals} alt="Equipment Rentals" />
            </figure>
          </section>
        </footer>
        <section className="full">
          <section className="half p-10 bg-[#3c3c3c] right parallax" ref={el => animationElements.current[5] = el}>
            <h1 className='text-2xl text-white font-bold mb-6'>CASTING</h1>
            <p className='text-white'>We have our In-house casting director who will get you the best talented artists, models, junior artists, etc. as per the script and creative requirement.</p>
          </section>
          <section className="half left">
            <figure className="parallax" ref={el => animationElements.current[5] = el} onClick={() => openGallery(5)}>
              <img src={casting} alt="Casting" />
            </figure>
          </section>
        </section>
        <footer className="full">
          <section className="half p-10 bg-[#3c3c3c] left parallax" ref={el => animationElements.current[6] = el}>
            <h1 className='text-2xl text-white font-bold mb-6'>MANPOWER</h1>
            <p className='text-white'>Skilled workers managing and operating machinery, ensuring quality control, maintaining production flow, and optimizing efficiency to meet production targets and deadlines effectively.</p>
          </section>
          <section className="half right">
            <figure className="parallax" ref={el => animationElements.current[6] = el} onClick={() => openGallery(6)}>
              <img src={manpower} alt="Manpower" />
            </figure>
          </section>
        </footer>
        <section className="full">
          <section className="half p-10 bg-[#3c3c3c] right parallax" ref={el => animationElements.current[7] = el}>
            <h1 className='text-2xl text-white font-bold mb-6'>CATERING</h1>
            <p className='text-white'>Catering services provide meal preparation, delivery, and presentation for events, including menu planning, cooking, serving staff, setup and cleanup, tableware, and sometimes event coordination to ensure a seamless dining experience.</p>
          </section>
          <section className="half left">
            <figure className="parallax" ref={el => animationElements.current[7] = el} onClick={() => openGallery(7)}>
              <img src={catering} alt="Catering" />
            </figure>
          </section>
        </section>
        
        {galleryOpen && (
          <div className="gallery-overlay">
            <div className="gallery-container">
              <button className="close-button" onClick={closeGallery}>
                <FontAwesomeIcon icon={faTimesCircle} />
              </button>
              <button className="prev-button" onClick={prevImage}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <img src={currentGallery[photoIndex]} alt="Gallery" className="gallery-image" />
              <button className="next-button" onClick={nextImage}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Works;
