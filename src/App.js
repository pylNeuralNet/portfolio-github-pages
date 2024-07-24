import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Entry from './components/Entry';
import EntryDetails from './components/EntryDetails';
import DynamicLoadingScreen from './components/DynamicLoadingScreen';
import fogVideo from './assets/animations/fog.mp4';
import bannerImage from './assets/images/banner-image.png';
import './App.css';
import blogImage from './assets/images/blog.png';
import travelImage from './assets/images/travel.jpeg';
import aboutMeImage from './assets/images/about-me.jpeg';
import projectsImage from './assets/images/projects.jpeg';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAssets = async () => {
      const videoPromise = new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.src = fogVideo;
        video.onloadedmetadata = resolve;
        video.onerror = reject;
      });

      const imagePromise = new Promise((resolve, reject) => {
        const img = new Image();
        img.src = bannerImage;
        img.onload = resolve;
        img.onerror = reject;
      });

      try {
        await Promise.all([videoPromise, imagePromise]);
        // Add a minimum loading time of 3 seconds
        await new Promise(resolve => setTimeout(resolve, 3000));
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading assets:', error);
        setIsLoading(false);
      }
    };

    loadAssets();
  }, []);

  if (isLoading) {
    return <DynamicLoadingScreen />;
  }

  const entries = [
    {
      id: 1,
      image: blogImage,
      title: "Web3 Philosophical Blog",
      description: "Posts about meaning.",
      link: "https://mirror.xyz/0xEDC1fdbD19744685BCB4d04Be98CaD15f31e5b23/j3_wgoGZjCT61xRh5aS7R9JROICCJyjqRO9lKisDXsA"
    },
    {
      id: 2,
      image: travelImage,
      title: "Personal Travel Blog",
      description: "It is not simple to travel meaningfuly so here I explore what those travels actually mean to me.",
      link: "https://www.instagram.com/eigenwerter/"
    },
    {
      id: 3,
      image: aboutMeImage,
      title: "About me",
      description: "",
      link: "/entry/3"
    },
  ];

  return (
    <Router>
      <div className="App">
        <Banner />
        <div className="fog-overlay">
          <video autoPlay loop muted playsInline className="fog-video">
            <source src={fogVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={
              <div className="entries-container">
                {/* <h2>Welcome</h2> */}
                {entries.map((entry) => (
                  <Entry
                    key={entry.id}
                    image={entry.image}
                    title={entry.title}
                    description={entry.description}
                    link={entry.link}
                  />
                ))}
              </div>
            } />
            <Route path="/entry/:id" element={<EntryDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;