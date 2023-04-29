import useStoreUnit from "../store/storeUnits";
import "../style/WeatherIcon.css"

interface WeatherIconProps {
  degree: number;
  weatherCondition: string;
}

function WeatherIcon({ weatherCondition, degree }: WeatherIconProps) {
  const { storeUnit } = useStoreUnit();
  let weatherClass = "";

  switch (weatherCondition) {
    case "Clear":
      if (isNight()) {
        weatherClass = "starry";
      } else {
        weatherClass = "sunny";
      }
      break;
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
    case "Clouds":
      weatherClass = "cloudy";
      break;
    case "Rain":
    case "Drizzle":
      weatherClass = "rainy";
      break;
    case "Thunderstorm":
      weatherClass = "stormy";
      break;
    case "Snow":
      weatherClass = "snowy";
      break;
    default:
      break;
  }
  
  function isNight() {
    const now = new Date();
    const hours = now.getHours();
    return hours >= 20 || hours < 6;
  }
  

  return (
    <div className="weather-current">
      <div className={weatherClass}></div>
      <div className="weather-current-info">
        <div>
          <h2>{Math.floor(degree)}</h2>
          <h3>{storeUnit === "metric" ? "°C" : "°F"}</h3>
        </div>
        <h3>{weatherCondition}</h3>
      </div>
    </div>
  );
}

export default WeatherIcon;
