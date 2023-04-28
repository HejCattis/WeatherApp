import axios from "axios";
import { useEffect } from "react";
import useStoreWeather from "../store/storeWeather";
import useStoreUnit from "../store/storeUnits";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

function SearchApi() {
    const navigate = useNavigate();
    const { query } = useParams<{ query: string }>();
    const { setWeatherData, setForecastData } = useStoreWeather();
    const { storeUnit } = useStoreUnit();
  
    function fetchQueryLocationWeatherData() {
      const apiQueryLocation = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${storeUnit}&appid=${import.meta.env.VITE_APIkey2}`;
      return axios.get(apiQueryLocation);
    }
  
    function fetchQueryLocationForecastData() {
      const apiQueryLocation = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=${storeUnit}&appid=${import.meta.env.VITE_APIkey2}`;
      return axios.get(apiQueryLocation);
    }
  
    useEffect(() => {
      fetchQueryLocationWeatherData()
        .then((response) => {
          setWeatherData(response.data);
        });
  
      fetchQueryLocationForecastData()
        .then((response) => {
          setForecastData(response.data);
        })
        .then(() => {
          navigate(`/search`);
        });
    }, []);
  
    return (
        <div>
            <Navbar></Navbar>
            <Header title={undefined} subtitle={undefined} text={undefined}></Header>
        </div>
    );
  }
  
  export default SearchApi;
  