# LILYPAD
LILYPAD is React based travel assistant app that aims to provide frequent travelers a quick snapshot of news, events, translations etc for a city they wish to visit

## Screenshots/Videos

* [Link to app video demo](https://www.loom.com/embed/ded11921268640bcaf0e7479819b9ea8)

* Lilypad Homepage\
![Lilypad Homepage](/src/images/lilypad-start.png)


* Lilypad Homepage with City\
![Lilypad Homepage with Destination](/src/images/lilypad-start-destination.png)


* Lilypad Results Page\
![Lilypad Results Page](/src/images/lilypad-results.png)


* Lilypad Currency Conversion\
![Lilypad Currency Conversion](/src/images/lilypad-currency.png)


* Lilypad Translation\
![Lilypad Translation](/src/images/lilypad-translation.png)


## Technologies
* React
* JSX
* Material UI (MUI)
* Node.js
* Docker

## APIs
* [OpenWeatherMap API](https://openweathermap.org/api)
* [Ticketmaster API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)
* [RestCountries API](https://gitlab.com/restcountries/restcountries)
* [GNews API](https://gnews.io/)
* [City API](https://api-ninjas.com/)
* [FreeCurrencyAPI](https://freecurrencyapi.com/)
* [LibreTranslate](https://libretranslate.com/)
* [Pexels Photo API](https://www.pexels.com/api/)

## Installation
To install the app on your local computer, you will need to fork this repo.

Once the repo is cloned, you will need to run `npm install` or `npm i` in your command line/terminal in order to install all the dependencies to run the application successfully/

### API Keys
OpenWeatherMap API, TicketMaster API, News API, FreeCurrency API & Pexels Photo API calls require an API key. The keys are all provided in the 'DataProvider.jsx' file, however please note there is a limit to how many calls are allowed per day. Thus if the maximum call is reached, you will need to wait or get a new API key to make further requests

### Self-Hosting APIs Using Docker
Due to the 'RestCountries' being depreciated in May 2023 and the Translate API being a custom API, these APIs can only be run locally. Thus in order to use these APIs, you must install [Docker Desktop](https://www.docker.com/products/docker-desktop/) and build the Docker images found in the respective repos. You can find the RestCountries API files [here](https://gitlab.com/restcountries/restcountries) and the LibreTranslate files [here](https://github.com/LibreTranslate/LibreTranslate).

We've created a Makefile that you can use to clone both repositories, build the Docker files and then start the containers. It also contains a command to start the application. To use the Makefile, once you've cloned our repo, `cd` into it and enter `make build` into your terminal. You only need to do this once, unless issues are encountered.

We've adjusted the build commands for Macs running on Apple M chips and if you have one of these machines, everything should install correctly. 

### Running The App

To initialise the Docker containers and the app, you can then run `make start`. You can do this in one go after cloning the repo, by typing in `make build start` which will install everything and start the app when the build has finished. For future app starts, just use the `make start` command.

If not using Docker, once all the dependencies are installed, you will need to run `npm run start` to initialise the app. A new tab will open in your browser automatically to render the app.

Use `npm start` to run the application in development mode. This should automatically open it in your local browser via [http://localhost:3000](http://localhost:3000). The page will reload when you make changes and you may also see errors in the console.

## Test
The following libraries were used for testing:
* React Testing Library

Use `npm test` to launch the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Contributors
* [Arianne Donoghue](https://github.com/azzywazzy)
* [Karen Opoku](https://github.com/Karen-O94)
* [Kayanat Suleman](https://github.com/KayanatSuleman)
* [Laura Malherbe](https://github.com/L4ur4-M4L)
* [Siham Dahir](https://github.com/sihamad)
* [Witt Kegel](https://github.com/WittK95)

## Links to other resources
* [Team 2 Project Report](https://docs.google.com/document/d/19OYA3i-i2gSblfsnoITfIiUzMzYZ5RmaSBvMOmNLzao/edit?usp=sharing)
* [Team 2 Project Log](https://docs.google.com/spreadsheets/d/1gkZwv35KH3mfGGNlMJk5ytGsKKcVO0tA/edit?usp=sharing&ouid=111438519884210394918&rtpof=true&sd=true)
