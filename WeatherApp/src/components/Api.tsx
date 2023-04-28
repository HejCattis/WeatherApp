import axios from "axios";
import { useEffect } from "react";
import useStoreWeather from "../store/storeWeather";
import useStoreUnit from "../store/storeUnits";

function Api() {
  const { setWeatherData, setForecastData } = useStoreWeather();
  const { storeUnit } = useStoreUnit();

  function fetchCurrentLocationWeatherData(latitude: number, longitude: number) {
    const apiCurrentLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${storeUnit}&appid=${import.meta.env.VITE_APIkey}`;
    return axios.get(apiCurrentLocation);
  }

  function fetchCurrentLocationForecastData(latitude: number, longitude: number) {
    const apiCurrentLocation = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${storeUnit}&appid=${import.meta.env.VITE_APIkey}`;
    return axios.get(apiCurrentLocation);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        fetchCurrentLocationWeatherData(latitude, longitude)
          .then(response => {
            setWeatherData(response.data);
          })
          .catch(error => {
            console.log(error);
          });

        fetchCurrentLocationForecastData(latitude, longitude)
          .then(response => {
            setForecastData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      },
      error => {
        console.log(error);
      }
    );
  }, []);

  return null;
}

export default Api;
