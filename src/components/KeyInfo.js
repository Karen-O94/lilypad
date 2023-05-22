import "./KeyInfo.css";
import PinDropIcon from "@mui/icons-material/PinDrop";
import RecordVoiceOver from "@mui/icons-material/RecordVoiceOver";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function KeyInfo() {
  return (
    <>
      <div className="container">
        <div className="icon">
          <PinDropIcon />
        </div>
        <div className="text">
          <p>United Kingdom</p>
        </div>
      </div>
      <div className="container">
        <div className="icon">
          <RecordVoiceOver />
        </div>
        <div className="text">
          <p>English Speaking </p>
        </div>
      </div>
      <div className="container">
        <div className="icon">
          <AttachMoneyIcon />
        </div>
        <div className="text">
          <p>GBP </p>
        </div>
      </div>
      <div className="container">
        <div className="icon">
          <AccessTimeIcon />
        </div>
        <div className="text">
          <p>16:32 </p>
        </div>
      </div>
    </>
  );
}

export default KeyInfo;
