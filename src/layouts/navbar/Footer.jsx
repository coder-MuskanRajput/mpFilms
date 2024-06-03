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
  return (
    <>
      <footer className="bg-[#171717] p-6 sm:p-24">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <span className="block text-[#ED1C24] text-lg mb-5 sm:text-xl">GET IN TOUCH</span>
            <h2 className="text-white text-2xl mb-5 sm:text-5xl" style={{ wordSpacing: '0.2em' }}>
              Ready To Get Focused?
            </h2>
            <h2 className="text-white text-2xl sm:text-5xl font-bold" style={{ wordSpacing: '0.25em' }}>
              Get In Touch
            </h2>
          </div>
          <Link to="/contact" className="w-32 h-32 rounded-full flex items-center justify-center border-2 border-white transition-all duration-300 hover:bg-[#ED1C24] hover:border-transparent">
            <i className="text-white text-2xl ri-arrow-right-up-line transition-transform duration-300 hover:translate-x-2 hover:translate-y-[-2px]"></i>
          </Link>
        </div>
      </footer>
      <div className='relative' style={{ backgroundImage: `url("https://faime-next.vercel.app/_next/static/media/img-1.6608414b.jpg")` }}>\
        <div className="absolute inset-0 bg-black opacity-80"></div>

      <footer className=" p-6 sm:p-24 flex flex-col sm:flex-row items-start justify-between space-y-6 sm:space-y-0 text-white bg-cover bg-center">
        <div className="relative flex flex-col w-60 items-center sm:items-start">
          <img className="h-16 mb-10" src={logo} alt="Logo" />
          <h2 className="text-center sm:text-left text-sm sm:text-base">
            I can film your project whether it is a commercial advertisement, a short film, or a documentary film.
          </h2>
        </div>
        <div className="relative w-96 flex flex-col items-center sm:items-start">
          <h2 className="text-lg font-bold mb-2">Our Gallery</h2>
          <div className="flex flex-wrap gap-2">
            <img className="w-28 h-28 object-cover cursor-pointer" src={jnu} alt="Jnu" onClick={() => openLightbox(jnu)} />
            <img className="w-28 h-28 object-cover cursor-pointer" src={janni} alt="Janni Ek Kahani" onClick={() => openLightbox(janni)} />
            <img className="w-28 h-28 object-cover cursor-pointer" src={ek} alt="Ek Dujhe Ke Vaste" onClick={() => openLightbox(ek)} />
            <img className="w-28 h-28 object-cover cursor-pointer" src={kayamat} alt="Kayamat Se Kayamat Tk" onClick={() => openLightbox(kayamat)} />
            <img className="w-28 h-28 object-cover cursor-pointer" src={sajish} alt="Sajish" onClick={() => openLightbox(sajish)} />
            <img className="w-28 h-28 object-cover cursor-pointer" src={life} alt="Life" onClick={() => openLightbox(life)} />
          </div>
        </div>
        <div className="relative flex flex-col items-center sm:items-start">
          <h2 className="text-lg font-bold mb-2">Follow Me</h2>
          <p className="text-sm sm:text-base">Connect with me on social media</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ED1C24]"><i className="ri-facebook-fill"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ED1C24]"><i className="ri-twitter-fill"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ED1C24]"><i className="ri-instagram-fill"></i></a>
          </div>
        </div>
        <div className="relative flex flex-col items-center sm:items-start">
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <ul className="space-y-2 w-96 text-sm sm:text-base">
            <li><i className="text-[#ED1C24] ri-mail-line"></i> sachin@mpfilms.co.in, official.mpfilms@gmail.com</li>
            <li><i className="text-[#ED1C24] ri-phone-line"></i> (+91) 730-301-2394, 799-993-5339</li>
            <li><i className="text-[#ED1C24] ri-map-pin-line"></i> 01 Jp Colony, Near St.Paul School, Raisen Road Anand Nagar Bhopal, Madhya Pradesh, Pin code - 462022</li>
          </ul>
        </div>
      </footer>



      <hr className=" border-white " />

      <p className="text-center relative pb-10 text-white mt-10">© 2024 <span className='text-[#ED1C24]'>MpFilms</span> All rights reserved.</p>
</div>
    </>
  );
}

export default Footer;
