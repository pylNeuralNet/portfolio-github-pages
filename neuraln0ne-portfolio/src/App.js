import React from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="content">
        <h2>About Me</h2>
        <p>This is where your content will start...</p>
        {/* Add more content here */}
      </div>
      <Footer />
    </div>
  );
}

export default App;