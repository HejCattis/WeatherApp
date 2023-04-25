import { useEffect } from "react";
import useApi from "../components/Api";
import useStoreWeather from "../store/storeWeather";
import Header from "../components/Header";

function LandingPage() {
  const { weatherData } = useStoreWeather((state) => ({
    weatherData: state.weatherData,
  }));
  const { getWeatherData } = useApi();

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div>
        <Header></Header>
    </div>
  );
}

export default LandingPage;
