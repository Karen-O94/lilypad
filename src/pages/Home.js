import React from 'react';
import './Home.css';
import TitleBanner from '../components/TitleBanner';
import SearchBar from '../components/SearchBar';
import LilypadLogo from '../images/LilypadLogo.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="title-banner">
        <h1></h1>
        <div className="image-container">
          <img src={LilypadLogo} alt="Logo" className="logo-image" />
        </div>
      </div>

      <div className="search-bar-container">
        <input type="text" placeholder="Where do you want to go?" className="search-input" />
        <button className="search-button">Search</button>
      </div>
      
      <div className="title-container">
        <h3>Explore the World with Us</h3>
      </div>
    </div>
  );
};

export default Home;
