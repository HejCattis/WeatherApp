# React TypeScript Weather App
### WeatherWomen by Cattis Gustafsson
This is a weather application built with React and TypeScript that allows users to view current weather and forecast data for any location around the world. It also has the capability to save locations and preferred units of measurement (imperial or metric) locally, using Zustand.

## Live Demo
The app is live and can be accessed through this link: https://weatherwomen.netlify.com/

## Getting Started
To run this project locally, follow these steps:

1. Clone this repository by running this command in your terminal:
`git clone https://github.com/HejCattis/WeatherApp`
2. Navigate into the project directory:
`cd react-ts-weather-app`
3. Install dependencies by running:
`npm install`
4. Create a .env file in the root directory of the project and add the following line, replacing API_KEY with your own OpenWeatherMap API key:
`VITE_APIkey = API_KEY`
5. Start the development server by running:
`npm run dev`

## Pages
This app has four pages:

### Error Page
This page is displayed when the user navigates to a route that doesn't exist (404 error).

### Landing Page
This page displays the current weather and forecast for the user's current location, as determined by the browser's geolocation API.

### Search Page
This page allows users to search for weather data for any location using the navbar search bar.

### Saved Page
This page displays all the locations that the user has saved using Zustand.

## Dependencies
This app has the following dependencies:

- axios
- chart.js
- react
- react-chartjs-2
- react-dom
- react-icons
- react-router-dom
- zustand

## Scripts
This app has the following scripts:

- dev: starts the development server.
- build: builds the app for production.
- preview: serves the production build for previewing.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.