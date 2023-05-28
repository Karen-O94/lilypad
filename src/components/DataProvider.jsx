import React, { Children, cloneElement } from "react";
import { useEffect, useState } from "react";
import languageList from "../json/languagecodetable.json";

const DataProvider = ({ children }) => {
  const [city, setCity] = useState();
  const [country, setCountry] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [currencyName, setCurrencyName] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [language, setLanguage] = useState(null);
  const [languageName, setLanguageName] = useState(null);
  const [locationPhoto, setLocationPhoto] = useState(null);
  // useState to update the component with information coming from the API

  const updateCity = (cityName) => {
    if (city !== cityName) {
      setCity(cityName);
      setCountry();
      setLongitude();
      setLatitude();
      setTimezone();
      setCurrency();
      setCurrencyName();
      setExchangeRate();
      setLanguage();
      setLanguageName();
      setLocationPhoto();
    }
    // updates the values of each
  };

  useEffect(() => {
    async function fetchCountry() {
      if (country) {
        return country;
      }

            if (city) {
                let apiKey = "TPeKHqkG6z2eYd8cYAuj4Q==ChId75RDBpyFpona"
                let queryURL = `https://api.api-ninjas.com/v1/city?name=${city}`
                
                try {
                    const response = await fetch(queryURL, {
                        method: 'GET',
                        headers: {'X-Api-Key': apiKey}
                    });
                    
                    let data = await response.json();
                    let country = data[0].country; // this API only ever returns one data point -if this ever returned more than one, we only want one
                    // console.log(country)
                    console.log(city)
                    return country
                }
                catch (error) {
                    alert("There was an error fetching your data, please check you've typed the city name correctly", error);
                  }
                
            }
        }
        
    
        async function fetchLongitude() {
            if (longitude) {
                return longitude
            }

            if (city) {
                let apiKey = "TPeKHqkG6z2eYd8cYAuj4Q==ChId75RDBpyFpona"
                let queryURL = `https://api.api-ninjas.com/v1/city?name=${city}`
                
                try {
                    const response = await fetch(queryURL, {
                        method: 'GET',
                        headers: {'X-Api-Key': apiKey}
                    });
                    
                    let data = await response.json();
                    let longitude = data[0].longitude;
                    // console.log(longitude)
                    return longitude
                }
                catch (error) {
                    alert("There was an error fetching the city data", error);
                  }                
            }
        }
    
    
        async function fetchLatitude() {
            if (latitude) {
                return latitude
            }

            if (longitude) {
                let apiKey = "TPeKHqkG6z2eYd8cYAuj4Q==ChId75RDBpyFpona"
                let queryURL = `https://api.api-ninjas.com/v1/city?name=${city}`
                
                try {
                    const response = await fetch(queryURL, {
                        method: 'GET',
                        headers: {'X-Api-Key': apiKey}
                    });
                    
                    let data = await response.json();
                    let latitude = data[0].latitude;
                    // console.log(latitude)
                    return latitude
                }
                catch (error) {
                    alert("There was an error fetching the city data", error);
                  }
            }
        }


    async function fetchTimezone() {
      if (timezone) {
        return timezone;
      }

            if (longitude) {
                let apiKey = "c38077db5d2d3cc7511c35c5146ebdb4"
                let queryURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}`
                
                try {
                    const response = await fetch(queryURL, {
                        method: "GET",
                    });
                    
                    let data = await response.json();
                    let timezone = data.timezone;
                    // console.log(timezone)
                    return timezone
                }
                catch (error) {
                    alert("There was an error fetching the time data", error);
                  }
            }
        }
    
    
        async function fetchCurrency() {
            if (currency) {
                return currency
            }

      if (country) {
        let queryURL = `http://localhost:5001/v3.1/alpha/${country}?fields=currencies`;

                try {
                    const response = await fetch(queryURL, {
                        method: 'GET'
                    });
            
                    let data = await response.json();
                    // console.log(data)
                    return Object.keys(data.currencies)[0];
                }
                catch (error) {
                    alert("There was an error fetching the currency data", error);
                  }
            }
        }


    async function fetchCurrencyName() {
      if (currencyName) {
        return currencyName;
      }

      if (country) {
        let queryURL = `http://localhost:5001/v3.1/alpha/${country}?fields=currencies`;

                try {
                    const response = await fetch(queryURL, {
                        method: 'GET'
                    });
            
                    let data = await response.json();
                    // console.log(data)
                    let currencyKey = Object.keys(data.currencies)[0];
    
                    return data.currencies[currencyKey].name;
                }
                catch (error) {
                    alert("There was an error fetching the currency data", error);
                  }
            }
        }

    async function fetchExchangeRate() {
      if (exchangeRate) {
        return exchangeRate;
      }

            if (currency) {
                let apiKey = "AcoRUsoipr4ezllPB8m9rIXjy27p4OH8OKCYfESt"
                let queryURL = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&currencies=${currency}&base_currency=GBP`
                
                try {
                    const response = await fetch(queryURL, {
                        method: 'GET',
                    });
            
                    let data = await response.json();
                    // console.log(data)
                    let exchangeRate = data.data[currency];
    
                    return exchangeRate
                }
                catch (error) {
                    alert("There was an error fetching the currency data", error);
                  }
            }
        }
    
    
        async function fetchLanguage() {     
            if (country) {
                if (language) {
                    return language
                }
    
                let queryURL = `http://localhost:5001/v3.1/alpha/${country}?fields=languages`
    
                try {
                    const response = await fetch(queryURL, {
                        method: 'GET'
                    });
        
                    let data = await response.json();
                    let languageCode = Object.keys(data.languages)[0].toLowerCase();
                    if (languageCode.length === 2){
                        return languageCode
                    }
                    return languageList[languageCode]
                }
                catch (error) {
                    alert("There was an error fetching the language data", error);
                  }
            }
        }


        async function fetchLanguageName() {     
            if (country) {
                if (languageName) {
                    return languageName
                }
    
                let languageThreeDigit
    
    
                let queryURL = `http://localhost:5001/v3.1/alpha/${country}?fields=languages`
    
                try {
                    const response = await fetch(queryURL, {
                        method: 'GET'
                    });
        
                    let data = await response.json();
                    languageThreeDigit = Object.keys(data.languages)[0].toLowerCase();
                    // console.log(deata)
                    return data.languages[languageThreeDigit]
                }
                catch (error) {
                    alert("There was an error fetching the language data", error);
                  }
            }
        }

    async function fetchLocationPhoto() {
      if (locationPhoto) {
        return locationPhoto;
      }

            if (latitude) {
                let apiKey = "xQ2jQbQVMvucBH2sNWSM6l9X5oWI2TH89SXXUDMwXMtQx5QPM0eYxFRr"
                let queryURL = `https://api.pexels.com/v1/search?query=${city}&orientation=landscape&page=1`
                
                try {
                    const response = await fetch(queryURL, {
                        method: 'GET',
                        headers: {'Authorization': apiKey}
                    });
                    
                    let data = await response.json();
                    let photos = []
                    data.photos.forEach((photo) => {
                        photos.push(photo.src.original)
                    })
                    // let photo = data.photos[0].src.original;
                    // console.log(photos)
                    return photos
                }
                catch (error) {
                    alert("There was an error fetching the photo", error);
                  }
            }
        }


    if (!country) {
      fetchCountry().then((c) => setCountry(c));
    }
    if (!longitude) {
      fetchLongitude().then((l) => setLongitude(l));
    }
    if (!latitude) {
      fetchLatitude().then((l) => setLatitude(l));
    }
    if (!timezone) {
      fetchTimezone().then((t) => setTimezone(t));
    }
    if (!currency) {
      fetchCurrency().then((c) => setCurrency(c));
    }
    if (!currencyName) {
      fetchCurrencyName().then((c) => setCurrencyName(c));
    }
    if (!exchangeRate) {
      fetchExchangeRate().then((e) => setExchangeRate(e));
    }
    if (!language) {
      fetchLanguage().then((l) => setLanguage(l));
    }
    if (!languageName) {
      fetchLanguageName().then((l) => setLanguageName(l));
    }
    if (!locationPhoto) {
      fetchLocationPhoto().then((p) => setLocationPhoto(p));
    }
  }, [
    country,
    city,
    setCity,
    longitude,
    latitude,
    timezone,
    currency,
    currencyName,
    exchangeRate,
    language,
    languageName,
    locationPhoto,
  ]);

  const props = {
    city,
    updateCity,
    country,
    longitude,
    latitude,
    timezone,
    currency,
    currencyName,
    exchangeRate,
    language,
    languageName,
    locationPhoto,
  };

  return (
    <div>
      {Children.map(children, (child) => {
        return cloneElement(child, props, null);
      })}
    </div>
  );
};
export default DataProvider;
