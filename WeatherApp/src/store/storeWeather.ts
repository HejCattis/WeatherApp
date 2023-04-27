import { create } from "zustand";
import { ApiResponse } from "../interface/ApiResponse";
import { WeatherData } from "../interface/WeatherDataInterface";
import { WeatherForecastResponse } from "../interface/WeatherForecastResponse";

interface StoreWeather {
  weatherData: ApiResponse | null;
  forecastData: WeatherForecastResponse | null;
  setWeatherData: (weatherData: WeatherData) => void;
  setForecastData: (forecastData: WeatherForecastResponse) => void;
  updateWeatherData: any;
  updateForecastData: any;
}

const useStoreWeather = create<StoreWeather>((set, get) => ({
  weatherData: null,
  forecastData: null,
  setWeatherData: (weatherData) => set(() => ({ weatherData })),
  setForecastData: (forecastData) => set(() => ({ forecastData })),
  updateWeatherData: (data : WeatherData) =>
    set((state) => ({
      weatherData: { ...state.weatherData, ...data },
    })),
  updateForecastData: (data : any) =>
    set((state) => ({
      forecastData: { ...state.forecastData, ...data },
    })),
}));

export default useStoreWeather;
