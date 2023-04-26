import { create } from "zustand";
import { ApiResponse } from "../interface/ApiResponse";
import { WeatherData } from "../interface/WeatherDataInterface";

interface StoreWeather {
  weatherData: ApiResponse | null;
  setWeatherData: (weatherData: WeatherData) => void;
  updateWeatherData: any;
}

const useStoreWeather = create<StoreWeather>((set) => ({
  weatherData: null,
  setWeatherData: (weatherData) => set(() => ({weatherData})),
  updateWeatherData: (data : any) =>
  set((state) => ({
    weatherData: { ...state.weatherData, ...data },
  })),
}));

export default useStoreWeather;
