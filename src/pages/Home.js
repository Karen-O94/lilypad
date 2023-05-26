import TitleBanner from "../components/TitleBanner";
import SearchBar from "../components/SearchBar";

const Home = ({props}) => {
  return (
    <>
      <TitleBanner />
      <SearchBar updateCity={props.updateCity}/>
    </>
  );
};

export default Home;
