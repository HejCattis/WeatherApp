import { useEffect } from "react";
import useApi from "../components/Api";
import useStoreWeather from "../store/storeWeather";

function LandingPage() {
  const { weatherData } = useStoreWeather((state) => ({
    weatherData: state.weatherData,
  }));
  const { getWeatherData } = useApi();

  useEffect(() => {
    getWeatherData();
  }, []);

  console.log(weatherData?.main)

  return (
    <div>
      <h1>Weather App</h1>
      {weatherData ? (
        <div>
          <h1>{weatherData.name}</h1>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather Description: </p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default LandingPage;
