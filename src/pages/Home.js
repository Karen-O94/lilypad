import './Home.css'; 
import TitleBanner from "../components/TitleBanner";
import SearchBar from "../components/SearchBar";
import React from 'react';
import LilypadLogo from "../images/LilypadLogo.jpg"


const Home = ({props}) => {
  return (
    <div>
      <TitleBanner />
      <SearchBar updateCity={props.updateCity}/>
    </div>
  );
};

export default Home;
