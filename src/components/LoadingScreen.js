import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

function LoadingScreen() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <div className="loading-screen">
      <div className={`word-container ${animate ? 'animate' : ''}`}>
        <div className="word word-1">Loading</div>
        <div className="word word-2">the</div>
        <div className="word word-3">experience</div>
      </div>
    </div>
  );
}

export default LoadingScreen;