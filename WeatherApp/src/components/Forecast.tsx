import "../style/Forecast.css";
import useStoreWeather from "../store/storeWeather";
import { getWeatherIcon } from "../utils/getWeatherIcon";

function Forecast() {
  const { forecastData } = useStoreWeather();

  const forecast = forecastData?.list.filter(({ dt_txt }) => new Date(dt_txt) >= new Date(Date.now() - 4 * 60 * 60 * 1000)).map(({ dt_txt, main: { temp }, weather: [{ main }] }) => ({
      temperature: Math.round(temp),
      main,
      dateTime: (new Date(dt_txt).toLocaleDateString() === new Date().toLocaleDateString() ? new Date(dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }) : `${new Date(dt_txt).toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric' })} ${new Date(dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}`),
    }));
    
  return (
    <div className="forecast-container">
      {forecast?.map(({ dateTime, main, temperature }, index) => (
        <div key={index} style={{ marginRight: '10px' }}>
          <div>{getWeatherIcon(main)}</div>
          <div>{`${temperature}°C`}</div>
          <div>{dateTime}</div>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
