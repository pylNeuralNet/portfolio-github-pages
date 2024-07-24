// src/components/Banner.js
import React, { useEffect, useRef } from 'react';
import './Banner.css';
import backgroundImage from '../assets/images/banner-image.png';

const Banner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const scrollPosition = window.scrollY;
        const bannerHeight = bannerRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        
        if (scrollPosition < bannerHeight - viewportHeight) {
          bannerRef.current.style.transform = `translateY(-${scrollPosition}px)`;
        } else {
          bannerRef.current.style.transform = `translateY(-${bannerHeight - viewportHeight}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={bannerRef} className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Your Portfolio</h1>
    </div>
  );
};

export default Banner;