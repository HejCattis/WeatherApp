import { useEffect } from "react";
import Api from "../components/Api";
import useStoreWeather from "../store/storeWeather";
import Header from "../components/Header";
import WeatherIcon from "../components/WeatherIcon";
import { formatDate } from "../utils/dateUtils";
import SunTime from "../components/SunTime";
import CurrentInfo from "../components/CurrentInfo";
import { FaWind, FaEye  } from "react-icons/fa";
import { MdWaterDrop, MdOutlineCalendarToday } from "react-icons/md";


function LandingPage() {
  const { weatherData } = useStoreWeather((state) => ({
    weatherData: state.weatherData,
  }));
  
  const { getWeatherData } = Api();
  const formattedDate = formatDate(new Date());

  useEffect(() => {
    getWeatherData();
  }, []);

  const current = [
    {
      title: 'Today',
      desc: weatherData ? weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1) : undefined,
      icon: <MdOutlineCalendarToday></MdOutlineCalendarToday>
    },
    {
      title: 'Wind',
      desc: weatherData?.wind.speed,
      icon: <FaWind></FaWind>
    },
    {
      title: 'Humidity',
      desc: weatherData?.main.humidity,
      icon: <MdWaterDrop></MdWaterDrop>
    },
    {
      title: 'Visibility',
      desc: weatherData?.visibility,
      icon: <FaEye></FaEye>
    }
  ]

  return (
    <div>
        <Header title={weatherData?.name} subtitle={weatherData?.sys.country} text={formattedDate} icon></Header>
        { weatherData && <WeatherIcon weatherCondition={weatherData.weather[0].main} degree={weatherData.main.temp} ></WeatherIcon>}
        { weatherData && <SunTime sunrise={weatherData.sys.sunrise} sunset={weatherData.sys.sunset}></SunTime>}
        { weatherData && <CurrentInfo current={current}></CurrentInfo>}
    </div>
  );
}

export default LandingPage;
