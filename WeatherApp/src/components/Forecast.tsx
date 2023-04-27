import useStoreWeather from "../store/storeWeather";

function Forecast () {
    const { forecastData } = useStoreWeather();
  
    const weatherData = forecastData?.list.map((data) => {
      const dateTime = new Date(data.dt_txt);
      const temperature = Math.round(data.main.temp);
      const description = data.weather[0].description;
  
      return {
        temperature,
        description,
        dateTime: `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`,
      };
    });
  
    return (
      <div style={{ display: 'flex', overflowX: 'scroll', maxWidth: '100%' }}>
        {weatherData?.map((data, index) => (
          <div key={index} style={{ marginRight: '10px' }}>
            <div>{data.dateTime}</div>
            <div>{data.description}</div>
            <div>{data.temperature}°C</div>
          </div>
        ))}
      </div>
    )
  }
  
  export default Forecast;
  