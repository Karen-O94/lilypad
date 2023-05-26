import "./KeyInfo.css";
import PinDropIcon from "@mui/icons-material/PinDrop";
import RecordVoiceOver from "@mui/icons-material/RecordVoiceOver";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function KeyInfo({ props }) {
  const { city, country, timezone, languageName } = props;
  return (
    <>
      <div className="container">
        <div className="icon">
          <PinDropIcon />
        </div>
        <div className="text">
          <p>
            {city}, {country}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="icon">
          <RecordVoiceOver />
        </div>
        <div className="text">
          <p>{languageName}</p>
        </div>
      </div>

      <div className="container">
        <div className="icon">
          <AccessTimeIcon />
        </div>
        <div className="text">
          <p>{timezone} </p>
        </div>
      </div>

      <div>
        <div></div>
      </div>
    </>
  );
}

export default KeyInfo;
