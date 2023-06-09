import useStoreWeather from "../store/storeWeather";
import Header from "../components/Header";
import WeatherIcon from "../components/WeatherIcon";
import { formatDate } from "../utils/dateUtils";
import SunTime from "../components/SunTime";
import CurrentInfo from "../components/CurrentInfo";
import { FaWind, FaEye  } from "react-icons/fa";
import { MdWaterDrop, MdOutlineCalendarToday } from "react-icons/md";
import Forecast from "../components/Forecast";
import Navbar from "../components/Navbar";
import LineChart from "../components/LineChart";



function SearchPage() {
    const { weatherData, forecastData} = useStoreWeather()
    const formattedDate = formatDate(new Date());

    const current = [
      {
        title: 'Today',
        desc: weatherData ? weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1) : undefined,
        icon: <MdOutlineCalendarToday></MdOutlineCalendarToday>
      },
      {
        title: 'Wind',
        desc: weatherData?.wind.speed + ' m/s',
        icon: <FaWind></FaWind>
      },
      {
        title: 'Humidity',
        desc: weatherData?.main.humidity + ' %',
        icon: <MdWaterDrop></MdWaterDrop>
      },
      {
        title: 'Visibility',
        desc: weatherData?.visibility + ' m ',
        icon: <FaEye></FaEye>
      }
    ]
    
    return (
      <div>
          <Navbar></Navbar>
       
          <Header title={weatherData?.name} subtitle={weatherData?.sys.country} text={formattedDate} icon></Header>
          { weatherData && <WeatherIcon weatherCondition={weatherData.weather[0].main} degree={weatherData.main.temp} ></WeatherIcon>}
          { weatherData && <SunTime sunrise={weatherData.sys.sunrise} sunset={weatherData.sys.sunset}></SunTime>}
          { weatherData && <CurrentInfo current={current}></CurrentInfo>}
          { forecastData && <Forecast></Forecast>}
          { forecastData && <LineChart></LineChart>}
      </div>
    );
}

export default SearchPage