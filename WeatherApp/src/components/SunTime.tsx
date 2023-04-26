import "../style/SunTime.css"
import { formatTime } from "../utils/formatTimeUtils";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";

interface SunTimeProps {
  sunrise: number;
  sunset: number;
}

function SunTime({ sunrise, sunset }: SunTimeProps) {
  const formattedSunrise = formatTime(sunrise);
  const formattedSunset = formatTime(sunset);

  return (
    <div className="sun-container">
        <div className="sun-info">
            <div><BsFillSunriseFill></BsFillSunriseFill></div>
            <p>{formattedSunrise}</p>
            <p className="sun-text">Sunrise</p>
        </div>
        <div className="sun-info">
            <div><BsFillSunsetFill></BsFillSunsetFill></div>
            <p>{formattedSunset}</p>
            <p className="sun-text">Sunset</p>
        </div>
    </div>
  );
}

export default SunTime;
