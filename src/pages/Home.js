import './Home.css'; 
import TitleBanner from "../components/TitleBanner";
import SearchBar from "../components/SearchBar";
import React from 'react';



const Home = () => {

  return (
    <div>
      <TitleBanner />
      <SearchBar />
    </div>
  );
};

export default Home;