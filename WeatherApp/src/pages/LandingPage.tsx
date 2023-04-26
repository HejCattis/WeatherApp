import { useEffect } from "react";
import useApi from "../components/Api";
import useStoreWeather from "../store/storeWeather";
import Header from "../components/Header";
import WeatherIcon from "../components/WeatherIcon";


function LandingPage() {
  const { weatherData } = useStoreWeather((state) => ({
    weatherData: state.weatherData,
  }));
  const { getWeatherData } = useApi();
  const formatDate = (date: Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayOfWeek = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    return `${dayOfWeek}, ${dayOfMonth} ${month}`;
  }

  const today = new Date();
  const formattedDate = formatDate(today);

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div>
        <Header title={weatherData?.name} subtitle={weatherData?.sys.country} text={formattedDate} icon></Header>
        { weatherData && <WeatherIcon weatherCondition={weatherData.weather[0].main} degree={weatherData.main.temp} ></WeatherIcon>}
    </div>
  );
}

export default LandingPage;
