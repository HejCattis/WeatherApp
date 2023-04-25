import { useEffect } from "react";
import useApi from "../components/Api";
import useStoreWeather from "../store/storeWeather";
import Header from "../components/Header";
import WeatherIcon from "../components/WeatherIcon";


function LandingPage() {
  const { weatherData } = useStoreWeather((state) => ({
    weatherData: state.weatherData,
  }));
  const { getWeatherData } = useApi();

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div>
        <Header></Header>
        <WeatherIcon></WeatherIcon>
    </div>
  );
}

export default LandingPage;
