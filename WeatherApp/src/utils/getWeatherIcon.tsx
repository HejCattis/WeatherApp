import { ReactNode } from 'react';
import { FaSun, FaCloud, FaCloudRain, FaBolt, FaSnowflake } from 'react-icons/fa';


export function getWeatherIcon(main: string | null | undefined | number | ReactNode) {
    switch (main) {
      case 'Clear':
        return <FaSun />;
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
        return <FaCloud />;
      case 'Rain':
      case 'Drizzle':
        return <FaCloudRain />;
      case 'Thunderstorm':
        return <FaBolt />;
      case 'Snow':
        return <FaSnowflake />;
      default:
        return null;
    }
  }