import { useState, useEffect } from 'react';
import axios from 'axios';
import useStoreWeather from '../store/storeWeather';
import { ApiResponse } from '../interface/ApiResponse';

const useApi = () => {
    const { setWeatherData } = useStoreWeather((state) => ({
      setWeatherData: state.setWeatherData,
    }));
  
    const [lat, setLat] = useState<null | number>(null);
    const [lng, setLng] = useState<null | number>(null);
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          console.error('Unable to retrieve your location');
        }
      );
    }, []);
  
    const getWeatherData = () => {
        if (lat && lng) {
          axios
            .get<ApiResponse>(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${import.meta.env.VITE_APIkey2}`
            )
            .then((response) => {
              setWeatherData(response.data);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      };
  
    return { getWeatherData };
  };
  

export default useApi;
