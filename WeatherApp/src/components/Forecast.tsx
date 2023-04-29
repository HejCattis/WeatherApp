import "../style/Forecast.css";
import useStoreWeather from "../store/storeWeather";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import { formatTime } from "../utils/formatTimeUtils";
import { useState } from "react";
import useStoreUnit from "../store/storeUnits";

function Forecast() {
  const { forecastData } = useStoreWeather();
  const { storeUnit } = useStoreUnit();
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(!showAll)
  }


  const forecast = forecastData?.list
    .filter(({ dt_txt }) => new Date(dt_txt) >= new Date(Date.now() - 5 * 60 * 60 * 1000))
    .map(({ dt_txt, main: { temp }, weather: [{ main }] }) => {
      const dateTime = new Date(dt_txt);
      const now = new Date();
      let isNow = false;
      if (Math.abs(dateTime.getTime() - now.getTime()) <= 1.5 * 60 * 60 * 1000) {
        isNow = true;
      }

      const dateTimeString = isNow
        ? <span className="forecast-time now">Now</span>
        : dateTime.toLocaleDateString() === now.toLocaleDateString()
        ? formatTime(dateTime.getTime() / 1000)
        : `${dateTime.toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric' })} ${formatTime(dateTime.getTime() / 1000)}`;

      return {
        temperature: Math.round(temp),
        main,
        dateTime: dateTimeString,
      };
    });

  return (
    <div>
        <div className={`forecast-container ${showAll ? 'active-btn' : ''}`}>
            {forecast?.map(({ dateTime, main, temperature }, index) => (
            <section key={index}>
                <div>{getWeatherIcon(main)}</div>
                <p>{`${temperature} ${storeUnit === "metric" ? "°C" : "°F"}`}</p>
                <p className="forecast-time">{dateTime}</p>
            </section>
            ))}
        </div>
        {forecast && (
            <button onClick={handleClick} className="btn-show">
            {showAll ? 'Show less' : 'Show more'}
            </button>
        )}
    </div>

  );
}

export default Forecast;
