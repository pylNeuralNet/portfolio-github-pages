// src/components/Banner.js
import React, { useEffect, useRef, useState } from 'react';
import './Banner.css';
import backgroundImage from '../assets/images/banner-image.png';

const Banner = () => {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (bannerRef.current && titleRef.current) {
      const bannerHeight = bannerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Parallax effect for background
      const parallaxFactor = 0.5;
      const yPos = -(scrollY * parallaxFactor);
      bannerRef.current.style.backgroundPositionY = `${yPos}px`;

      // Title reveal effect
      const titleRevealThreshold = bannerHeight / 2;
      if (scrollY < titleRevealThreshold) {
        const opacity = 1 - (scrollY / titleRevealThreshold);
        const translateY = scrollY / 2;
        titleRef.current.style.opacity = opacity;
        titleRef.current.style.transform = `translateY(${translateY}px)`;
      }
    }
  }, [scrollY]);

  return (
    <div ref={bannerRef} className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 ref={titleRef}>Adam - Portfolio</h1>
    </div>
  );
};

export default Banner;