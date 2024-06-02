import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';
import logo from "../../assets/logo.png"
import '@ionic/react/css/core.css';
import "./Nav.scss"

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={`flex items-center h-20 w-full justify-between p-6 bg-black ${isNavOpen ? 'active' : ''}`}>
      <div className="text-white text-2xl font-bold">
         <img className='h-16' src={logo} alt="" />
      </div>
      <nav className={`navbar absolute top-0 left-0 w-full h-full bg-black flex justify-center items-center transition-transform transform ${isNavOpen ? 'translate-x-0' : 'translate-x-full'} lg:static lg:flex-row lg:translate-x-0`}>
        <ul className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          <li><a href="#" className="text-white text-xl lg:text-base uppercase">Home</a></li>
          <li><a href="#" className="text-white text-xl lg:text-base uppercase">Services</a></li>
          <li><a href="#" className="text-white text-xl lg:text-base uppercase">Projects</a></li>
          <li><a href="#" className="text-white text-xl lg:text-base uppercase">About Us</a></li>
          <li><a href="#" className="text-white text-xl lg:text-base uppercase">Contact</a></li>
        </ul>
      </nav>
      <button onClick={toggleNavbar} className="lg:hidden z-50">
        <IonIcon icon={isNavOpen ? closeOutline : menuOutline} className="text-white text-3xl" />
      </button>
    </header>
  );
};

export default Nav;
