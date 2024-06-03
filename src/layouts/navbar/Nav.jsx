import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';
import logo from "../../assets/logo.png";
import '@ionic/react/css/core.css';
import "./Nav.scss";
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="flex items-center h-20 w-full justify-between p-6 bg-black relative z-[999] lg:static">
      <div className="text-white text-2xl font-bold">
        <img className="h-16" src={logo} alt="Logo" />
      </div>
      <nav className={`navbar fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center transition-transform transform ${isNavOpen ? 'translate-x-0' : 'translate-x-full'} lg:static lg:flex lg:translate-x-0 lg:flex-row`}>
        <ul className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          <li><Link to="/" className="text-white text-xl lg:text-base uppercase">Home</Link></li>
          <li><Link to="/services" className="text-white text-xl lg:text-base uppercase">Services</Link></li>
          <li><Link to="/projects" className="text-white text-xl lg:text-base uppercase">Projects</Link></li>
          <li><Link to="/about" className="text-white text-xl lg:text-base uppercase">About Us</Link></li>
          <li><Link to="/contact" className="text-white text-xl lg:text-base uppercase">Contact</Link></li>
        </ul>
      </nav>
      <button onClick={toggleNavbar} className="lg:hidden z-50">
        <IonIcon icon={isNavOpen ? closeOutline : menuOutline} className="text-white text-3xl" />
      </button>
    </header>
  );
};

export default Nav;
