import "./KeyInfo.css";
import PinDropIcon from "@mui/icons-material/PinDrop";
import RecordVoiceOver from "@mui/icons-material/RecordVoiceOver";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoneyIcon from "@mui/icons-material/Money";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
// importing css file and mui icons

function KeyInfo({ props }) {
  const {
    city,
    country,
    timezone,
    languageName,
    currencyName,
    currency,
    exchangeRate,
  } = props;
  //using props to get information from DataProvider

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
          <p>
            1 GBP = {exchangeRate} {currency}
          </p>
        </div>
      </div>
    </>
  );
}

export default KeyInfo;
