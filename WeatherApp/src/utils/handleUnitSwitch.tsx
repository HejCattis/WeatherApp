import { useCallback } from "react";
import useStoreUnit from "../store/storeUnits";
import useStoreWeather from "../store/storeWeather";
import useStoreSaved from "../store/storeSaved";

export const useUnitSwitch = () => {
  const { storeUnit, setStoreUnit } = useStoreUnit();
  const { updateWeatherData, weatherData, forecastData, updateForecastData } = useStoreWeather();
  const { storeSaved, setStoreSaved } = useStoreSaved();

  const handleUnitSwitch = useCallback(
    (unit: string) => {
      if (storeUnit !== unit) {
        setStoreUnit(unit);

        // convert temperature for weather data
        const weatherTemperature = weatherData?.main?.temp;
        if (weatherTemperature) {
          const convertedWeatherTemp =
            unit === "metric" ? ((weatherTemperature - 32) * 5) / 9 : (weatherTemperature * 9) / 5 + 32;
          updateWeatherData({
            main: { ...weatherData.main, temp: convertedWeatherTemp },
          });
        }

        // convert temperature for forecast data
        const updatedForecastData = forecastData?.list?.map((item) => {
          const forecastTemperature = item.main?.temp;
          if (forecastTemperature) {
            const convertedForecastTemp =
              unit === "metric" ? ((forecastTemperature - 32) * 5) / 9 : (forecastTemperature * 9) / 5 + 32;
            return { ...item, main: { ...item.main, temp: convertedForecastTemp } };
          }
          return item;
        });
        if (updatedForecastData) {
          updateForecastData({ ...forecastData, list: updatedForecastData });
        }

        // update saved data
        const updatedSavedData = storeSaved.map((item) => {
          const { degree, ...rest } = item;
          const convertedDegree = unit === "metric" ? ((degree - 32) * 5) / 9 : (degree * 9) / 5 + 32;
          return { ...rest, degree: convertedDegree };
        });
        setStoreSaved(() => updatedSavedData);
      }
    },
    [storeUnit, setStoreUnit, updateWeatherData, weatherData, forecastData, updateForecastData, storeSaved, setStoreSaved]
  );

  return handleUnitSwitch;
};
