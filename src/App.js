import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Entry from './components/Entry';
import EntryDetails from './components/EntryDetails';
import EntryPost from './components/EntryPost';
import Post from './components/Post';
import BlogPost from './components/BlogPost';
import TileGrid from './components/TileGrid';
import DynamicLoadingScreen from './components/DynamicLoadingScreen';
import fogVideo from './assets/animations/fog.mp4';
import bannerImage from './assets/images/banner-image.png';
import './App.css';

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
            <Route path="/" element={<TileGrid />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
  }

export default App;