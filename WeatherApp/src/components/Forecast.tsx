import useStoreWeather from "../store/storeWeather";
import { getWeatherIcon } from "../utils/getWeatherIcon";

function Forecast() {
  const { forecastData } = useStoreWeather();

  // Filter out the dates that are earlier than the current time minus 4 hours
  const filteredForecastData = forecastData?.list.filter(
    ({ dt_txt }) => new Date(dt_txt) >= new Date(Date.now() - 4 * 60 * 60 * 1000)
  );

  // Map the filtered forecast data to weather data
  const weatherData = filteredForecastData?.map(({ dt_txt, main: { temp }, weather: [{ main }] }) => {
    const dateTime = new Date(dt_txt);
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() - (now.getHours() % 3), 0, 0);
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
    <div style={{ display: 'flex', overflowX: 'scroll', maxWidth: '100%' }}>
      {weatherData?.map(({ dateTime, main, temperature }, index) => (
        <div key={index} style={{ marginRight: '10px' }}>
          <div>{getWeatherIcon(main)}</div>
          <div>{temperature}°C</div>
          <div>{dateTime}</div>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
