import { create } from "zustand";
import { ApiResponse } from "../interface/ApiResponse";
import { WeatherData } from "../interface/WeatherDataInterface";

interface StoreWeather {
  weatherData: ApiResponse | null;
  setWeatherData: (weatherData: WeatherData) => void;
}

const useStoreWeather = create<StoreWeather>((set) => ({
  weatherData: null,
  setWeatherData: (weatherData) => set(() => ({weatherData})),
}));

export default useStoreWeather;
