import React from 'react';
import { useLocation } from 'react-router-dom'; 

function Banner() {
  const location = useLocation();
  const currentPage = location.pathname.split('/')[1]; 

  const generateBannerText = () => {
    switch (currentPage) {
      case 'services':
        return {
          title: 'Our Services',
          description: 'Explore the range of services we offer.'
        };
      case 'projects':
        return {
          title: 'Our Projects',
          description: 'Discover the amazing projects we have completed.'
        };
      case 'about':
        return {
          title: 'About Us',
          description: 'Learn more about our company and our mission.'
        };
      case 'contact':
        return {
          title: 'Contact Us',
          description: 'Get in touch with us for inquiries or collaborations.'
        };
      default:
        return {
          title: 'Welcome to Our Website',
          description: 'Learn more about our services, projects, about us, and how to contact us.'
        };
    }
  };

  const { title, description } = generateBannerText();

  return (
    <div style={{ backgroundImage: `url("https://faime-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-bg.40d2ba1b.jpg&w=1920&q=75")` }} className="banner bg-cover bg-center relative h-96">
      <div className="absolute inset-0 bg-[#171717] opacity-60"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg sm:text-xl lg:text-2xl">{description}</p>
      </div>
    </div>
  );
}

export default Banner;
