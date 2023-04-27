import "../style/Forecast.css";
import useStoreWeather from "../store/storeWeather";
import { getWeatherIcon } from "../utils/getWeatherIcon";

function Forecast() {
  const { forecastData } = useStoreWeather();

  const forecast = forecastData?.list.filter(({ dt_txt }) => new Date(dt_txt) >= new Date(Date.now() - 4 * 60 * 60 * 1000)).map(({ dt_txt, main: { temp }, weather: [{ main }] }) => {
    const dateTime = new Date(dt_txt);
    const now = new Date();
    const isNow = Math.abs(dateTime.getTime() - now.getTime()) <= 1.5 * 60 * 60 * 1000;
    
    const dateTimeString = isNow
      ? "now"
      : dateTime.toLocaleDateString() === now.toLocaleDateString()
      ? dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
      : `${dateTime.toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric' })} ${dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}`;
    
    return {
      temperature: Math.round(temp),
      main,
      dateTime: dateTimeString,
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
