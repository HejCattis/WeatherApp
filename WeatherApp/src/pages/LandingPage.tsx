import { useEffect } from "react";
import Api from "../components/Api";
import useStoreWeather from "../store/storeWeather";
import Header from "../components/Header";
import WeatherIcon from "../components/WeatherIcon";
import { formatDate } from "../utils/dateUtils";
import SunTime from "../components/SunTime";


function LandingPage() {
  const { weatherData } = useStoreWeather((state) => ({
    weatherData: state.weatherData,
  }));
  
  const { getWeatherData } = Api();
  const formattedDate = formatDate(new Date());

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div>
        <Header title={weatherData?.name} subtitle={weatherData?.sys.country} text={formattedDate} icon></Header>
        { weatherData && <WeatherIcon weatherCondition={weatherData.weather[0].main} degree={weatherData.main.temp} ></WeatherIcon>}
        { weatherData && <SunTime sunrise={weatherData.sys.sunrise} sunset={weatherData.sys.sunset}></SunTime>}
    </div>
  );
}

export default LandingPage;
