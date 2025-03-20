import React from 'react';
import './App.css';
import HeaderSearch from './components/HeaderSearch';
import casualImg from './pictures/casual outfit.jpg';
import formalImg from './pictures/formal outfit.jpg';
import sportImg from './pictures/sport outfit.jpg';
import streetImg from './pictures/street outfit.jpg';


function App() {
  return (
    <div className="app-container">
      <HeaderSearch />
      <div className="hero-section">
        <h1>探索時尚風格</h1>
      </div>

      <div className="styles-grid">
        <div className="style-card">
          <h3>休閒風格</h3>
            <img src={casualImg} alt="Casual Style" />
        </div>
        <div className="style-card">
          <h3>正式風格</h3>
            <img src={formalImg} alt="Casual Style" />
        </div>
        <div className="style-card">
          <h3>運動風格</h3>
            <img src={sportImg} alt="Casual Style" />
        </div>
        <div className="style-card">
          <h3>街頭風格</h3>
            <img src={streetImg} alt="Casual Style" />
        </div>
      </div>
    </div>
  );
}

export default App;
