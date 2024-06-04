import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import jnu from "../../assets/Jnu.jpeg"
import janni from "../../assets/JanniEkKahani.jpeg";
import ek from "../../assets/EkDujheKeVaste.jpeg";
import kayamat from "../../assets/KayamatSeKayamatTk.jpeg";
import sajish from "../../assets/Sajish.jpeg";
import life from "../../assets/LifeNavrangi.jpeg";
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

const Footer = () => {
  const imgArray = [jnu, janni, ek, kayamat, sajish, life];

  const [isItemOpen, setIsItemOpen] = useState(false);
  const openLightBox = (item)=>{
    setIsItemOpen(item)
  }

  return (
    <>
      <footer className="bg-[#171717] p-6 sm:p-12 lg:p-24">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <span className="block text-[#ED1C24] text-lg mb-5 sm:text-xl">GET IN TOUCH</span>
            <h2 className="text-white text-2xl mb-5 sm:text-4xl lg:text-5xl" style={{ wordSpacing: '0.2em' }}>
              Ready To Get Focused?
            </h2>
            <h2 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold" style={{ wordSpacing: '0.25em' }}>
              Get In Touch
            </h2>
          </div>
          <Link to="/contact" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full flex items-center justify-center border-2 border-white transition-all duration-300 hover:bg-[#ED1C24] hover:border-transparent">
            <i className="text-white text-2xl ri-arrow-right-up-line transition-transform duration-300 hover:translate-x-2 hover:translate-y-[-2px]"></i>
          </Link>
        </div>
      </footer>
      <div className='relative bg-cover bg-center' style={{ backgroundImage: `url("https://faime-next.vercel.app/_next/static/media/img-1.6608414b.jpg")` }}>
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <footer className="relative p-6 sm:p-12 lg:p-24 flex flex-col sm:flex-row items-start justify-between space-y-6 sm:space-y-0 text-white">
          <div className="relative flex flex-col w-full sm:w-1/4 items-center sm:items-start">
            <img className="h-16 mb-10" src={logo} alt="Logo" />
            <h2 className="text-center sm:text-left text-sm sm:text-base">
              I can film your project whether it is a commercial advertisement, a short film, or a documentary film.
            </h2>
          </div>
          <div className="relative w-full sm:w-1/2 flex flex-col items-center sm:items-start">
            <h2 className="text-lg font-bold mb-2">Our Gallery</h2>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {imgArray.map((item, ind) => (
                <img key={ind} className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover cursor-pointer" src={item} alt="item" onClick={() => openLightBox(item)} />
              ))}
              
            </div>
          </div>
          <div className="relative flex flex-col w-full sm:w-1/4 items-center sm:items-start">
            <h2 className="text-lg font-bold mb-2">Follow Me</h2>
            <p className="text-sm sm:text-base">Connect with me on social media</p>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ED1C24]"><i className="ri-facebook-fill"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ED1C24]"><i className="ri-twitter-fill"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ED1C24]"><i className="ri-instagram-fill"></i></a>
            </div>
          </div>
          <div className="relative flex flex-col w-full sm:w-1/4 items-center sm:items-start">
            <h2 className="text-lg font-bold mb-2">Contact Us</h2>
            <ul className="space-y-2 text-center sm:text-left text-sm sm:text-base">
              <li><i className="text-[#ED1C24] ri-mail-line"></i> sachin@mpfilms.co.in, official.mpfilms@gmail.com</li>
              <li><i className="text-[#ED1C24] ri-phone-line"></i> (+91) 730-301-2394, 799-993-5339</li>
              <li><i className="text-[#ED1C24] ri-map-pin-line"></i> 01 Jp Colony, Near St.Paul School, Raisen Road Anand Nagar Bhopal, Madhya Pradesh, Pin code - 462022</li>
            </ul>
          </div>
        </footer>
        <hr className="border-white" />
        <p className="text-center relative pb-10 text-white mt-10">© 2024 <span className='text-[#ED1C24]'>MpFilms</span> All rights reserved.</p>
      </div>
      {false && <>
              <div className='fixed top-0 left-0 g-blur w-full h-screen z-50'></div>
              </>}
    </>
  );
}

export default Footer;
