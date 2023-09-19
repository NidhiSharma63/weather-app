import { useEffect, useState } from "react";
import { useUserContext } from "../provider/userContextProvider";
import { useWeatherContext } from "../provider/weatherContextProvider";
import { kelvinToCelsius, kelvinToFahrenheit } from "../utils/convertTempData";

const useWeatherDetail = () => {
  const { dayData, dayDataLoading } = useWeatherContext();
  const { userInput, setConvertDailyForeCastToCelsius } = useUserContext();
  const [temperatureValue, setTemperatureValue] = useState({ temp: "", min: "", max: "" });
  const [convertToCelsius, setConvertToCelsius] = useState(true);

  /**
   * toggle the celsius data every time user hit the toggle button
   */
  useEffect(() => {
    if (dayData?.length === 0) return;
    if (convertToCelsius) {
      /**
       * Celsius
       */
      const tempCelsius = kelvinToCelsius(dayData?.data?.main?.temp);
      const minCelsius = kelvinToCelsius(dayData?.data?.main?.temp_min);
      const maxCelsius = kelvinToCelsius(dayData?.data?.main?.temp_max);

      setTemperatureValue({
        temp: `${tempCelsius}°C`,
        min: `${minCelsius}°C`,
        max: `${maxCelsius}°C`,
      });
    } else {
      /**
       * Fahrenheit
       */
      const tempFahrenheit = kelvinToFahrenheit(dayData?.data?.main?.temp);
      const minFahrenheit = kelvinToFahrenheit(dayData?.data?.main?.temp_min);
      const maxFahrenheit = kelvinToFahrenheit(dayData?.data?.main?.temp_max);

      setTemperatureValue({
        temp: `${tempFahrenheit}°F`,
        min: `${minFahrenheit}°F`,
        max: `${maxFahrenheit}°F`,
      });
    }
  }, [convertToCelsius, dayData]);

  /**
   * function to toggle between celsius
   */
  const handleToggleCelsius = () => {
    setConvertToCelsius((prev) => !prev);
    setConvertDailyForeCastToCelsius((prev) => !prev);
  };

  return { handleToggleCelsius, temperatureValue, dayData, convertToCelsius, userInput, dayDataLoading };
};

export default useWeatherDetail;
