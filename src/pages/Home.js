import './Home.css';
import React from 'react';
import TitleBanner from "../components/TitleBanner";
import SearchBar from "../components/SearchBar";
import LilypadLogo from "../images/LilypadLogo.jpg"


const Home = () => {
  return (
    <div className="home-container">
          <div className="image-container">
      <img src={LilypadLogo} alt="Logo" className="logo-image" />
    </div>
    <div className="title-banner">
      <h1>Welcome to Lilypad</h1>
    </div>
    <div className="search-bar-container">
      <input type="text" placeholder="Search..." className="search-input" />
      <button className="search-button">Search</button>
    </div>
    <div className="title-container">
      <h2>Explore the World with Us</h2>
    </div>
  </div>

  );
};

export default Home;
