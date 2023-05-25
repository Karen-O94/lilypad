import "./KeyInfo.css";
import PinDropIcon from "@mui/icons-material/PinDrop";
import RecordVoiceOver from "@mui/icons-material/RecordVoiceOver";
import MoneyIcon from '@mui/icons-material/Money';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';


function KeyInfo(props) {
  const {city, country, languageName, currencyName, exchangeRate, currency} = props;
  return (
    <>
      <div className="container">
        <div className="icon">
          <PinDropIcon />
        </div>
        <div className="text">
          <p>{city}, {country}</p>
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
          <MoneyIcon />
        </div>
        <div className="text">
          <p>{currencyName}</p>
        </div>
      </div>
      <div className="container">
        <div className="icon">
          <CurrencyPoundIcon />
        </div>
        <div className="text">
          <p>1 GBP = {exchangeRate} {currency}</p>
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
