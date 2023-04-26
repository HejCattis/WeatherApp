import { useState, useEffect } from 'react';
import axios from 'axios';
import useStoreWeather from '../store/storeWeather';
import { ApiResponse } from '../interface/ApiResponse';
import useStoreUnit from '../store/storeUnits';

function Api () {
    const { setWeatherData } = useStoreWeather((state) => ({
      setWeatherData: state.setWeatherData,
    }));
  // LÄGG TILL I API
    const { storeUnit } = useStoreUnit();

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
        // if (lat && lng) {
        //   axios
        //     .get<ApiResponse>(
        //       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${import.meta.env.VITE_APIkey}`
        //     )
        //     .then((response) => {
        //       setWeatherData(response.data);
        //     })
        //     .catch((error) => {
        //       console.error(error);
        //     });
        // }

        const fakeData: ApiResponse = {
      coord: {
        lon: 0.1,
        lat: 51.5,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      base: "stations",
      main: {
        temp: 10.34,
        feels_like: 8.74,
        temp_min: 8.41,
        temp_max: 11.92,
        pressure: 1018,
        humidity: 50,
      },
      visibility: 10000,
      wind: {
        speed: 2.57,
        deg: 90,
      },
      clouds: {
        all: 0,
      },
      dt: 1682445777,
      sys: {
        type: 1,
        id: 1414,
        country: "GB",
        sunrise: 1682397823,
        sunset: 1682449872,
      },
      timezone: 3600,
      id: 7302135,
      name: "Abbey Wood",
      cod: 200,
    };
    setWeatherData(fakeData);
      };
  
    return { getWeatherData };
  };
  

export default Api;
