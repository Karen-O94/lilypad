import './Home.css'; 
import TitleBanner from "../components/TitleBanner";
import SearchBar from "../components/SearchBar";
import React from 'react';
import LilypadLogo from "../images/LilypadLogo.jpg"


const Home = () => {

  return (
    <div>
      <TitleBanner />
      <SearchBar />
    </div>
  );
};

export default Home;
