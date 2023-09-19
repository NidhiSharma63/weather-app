import { useEffect, useState } from "react";
import { useUserContext } from "../provider/userContextProvider";
import { useWeatherContext } from "../provider/weatherContextProvider";
import { kelvinToCelsius, kelvinToFahrenheit } from "../utils/convertTempData";
import getFourDayForeCast from "../utils/getFourDayForeCast";

const useWeatherDetail = () => {
  const { dayData, dayDataLoading, foreCastData } = useWeatherContext();
  const { userInput, setConvertDailyForeCastToCelsius } = useUserContext();
  const [temperatureValue, setTemperatureValue] = useState({ temp: "", min: "", max: "" });
  const [convertToCelsius, setConvertToCelsius] = useState(true);

  /**
   * toggle the celsius data every time user hit the toggle button
   */
  useEffect(() => {
    if (dayData?.length === 0 || foreCastData?.length === 0) return;

    const { currentDayData } = getFourDayForeCast(foreCastData);

    if (convertToCelsius) {
      /**
       * Celsius
       */
      const tempCelsius = kelvinToCelsius(dayData?.data?.main?.temp);
      const minCelsius = kelvinToCelsius(currentDayData?.min);
      const maxCelsius = kelvinToCelsius(currentDayData?.max);

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
      const minFahrenheit = kelvinToFahrenheit(currentDayData?.min);
      const maxFahrenheit = kelvinToFahrenheit(currentDayData?.max);

      setTemperatureValue({
        temp: `${tempFahrenheit}°F`,
        min: `${minFahrenheit}°F`,
        max: `${maxFahrenheit}°F`,
      });
    }
  }, [convertToCelsius, dayData, foreCastData]);

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
