import { ReactNode } from 'react';
import { FaSun, FaCloud, FaCloudRain, FaBolt, FaSnowflake } from 'react-icons/fa';


export function getWeatherIcon(main: string | null | undefined | number | ReactNode) {
    switch (main) {
      case 'Clear':
        return <FaSun />;
      case 'Clouds':
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