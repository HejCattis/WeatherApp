import "../style/Forecast.css";
import useStoreWeather from "../store/storeWeather";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import { formatTime } from "../utils/formatTimeUtils";


function Forecast() {
  const { forecastData } = useStoreWeather();

  const forecast = forecastData?.list
  .filter(({ dt_txt }) => new Date(dt_txt) >= new Date(Date.now() - 4 * 60 * 60 * 1000))
  .map(({ dt_txt, main: { temp }, weather: [{ main }] }) => {
    const date = new Date(dt_txt);
    const isToday = date.toLocaleDateString() === new Date().toLocaleDateString();
    const dateTime = isToday
      ? `${formatTime(date.getTime() / 1000)}`
      : `${date.toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric' })} ${formatTime(date.getTime() / 1000)}`;
    return {
      temperature: Math.round(temp),
      main,
      dateTime,
    };
  });

  
  return (
    <div className="forecast-container">
      {forecast?.map(({ dateTime, main, temperature }, index) => (
        <section key={index}>
          <div>{getWeatherIcon(main)}</div>
          <p>{`${temperature} °C`}</p>
          <p className="forecast-time">{dateTime}</p>
        </section>
      ))}
    </div>
  );
}

export default Forecast;
