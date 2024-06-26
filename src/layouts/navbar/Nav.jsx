import React, { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import 'remixicon/fonts/remixicon.css';
import { menuOutline, closeOutline } from 'ionicons/icons';
import logo from "../../assets/logo.png";
import '@ionic/react/css/core.css';
import "./Nav.scss";
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsNavOpen(false);
    window.scrollTo(0, 0); 
  }, []);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="flex items-center h-20 w-full justify-between p-6 bg-[#171717] relative z-[999] lg:static">
      <div className="text-white text-2xl font-bold">
        <img className="h-16 w-44" src={logo} alt="Logo" />
      </div>
      <nav className={`navbar fixed top-0 left-0 w-full h-full bg-[#171717] flex justify-center items-center transition-transform transform ${isNavOpen ? 'translate-x-0' : 'translate-x-full'} lg:static lg:flex lg:translate-x-0 lg:flex-row`}>
        <ul className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          <li onClick={()=>setIsNavOpen(false)}><Link to="/" className={`${location.pathname === '/' ? 'text-[#ED1C24]' : 'text-white'} text-xl lg:text-base uppercase`}>Home</Link></li>
          <li onClick={()=>setIsNavOpen(false)}><Link to="/services" className={`${location.pathname === '/services' ? 'text-[#ED1C24]' : 'text-white'} text-xl lg:text-base uppercase`}>Services</Link></li>
          <li onClick={()=>setIsNavOpen(false)}><Link to="/projects" className={`${location.pathname === '/projects' ? 'text-[#ED1C24]' : 'text-white'} text-xl lg:text-base uppercase`}>Projects</Link></li>
          <li onClick={()=>setIsNavOpen(false)}><Link to="/about" className={`${location.pathname === '/about' ? 'text-[#ED1C24]' : 'text-white'} text-xl lg:text-base uppercase`}>About Us</Link></li>
          <li onClick={()=>setIsNavOpen(false)}><Link to="/contact" className={`${location.pathname === '/contact' ? 'text-[#ED1C24]' : 'text-white'} text-xl lg:text-base uppercase`}>Contact</Link></li>
        </ul>
      </nav>
      <div className="lg:flex hidden">
        <Link to='/contact' className='bg-[#ED1C24] w-32 p-4 rounded-lg text-white flex items-center justify-center gap-2'>
          Let's Chat
          <i className="ri-arrow-right-up-line"></i>
        </Link>
      </div>
      <button onClick={toggleNavbar} className="lg:hidden z-50" aria-label="Toggle navigation">
        <IonIcon icon={isNavOpen ? closeOutline : menuOutline} className="text-white text-3xl" />
      </button>
    </header>
  );
};

export default Nav;
