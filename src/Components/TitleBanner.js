import LilypadLogo from "../images/LilypadLogo.png"

function TitleBanner() {
  return (
    <>
    <div className="image-container">
    <img src={LilypadLogo} alt="Logo" className="logo-image" />
    </div>
      <h1>Travel with Lilypad</h1>
    </>
  );
}

export default TitleBanner;
