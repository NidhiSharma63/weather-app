import React, { createContext, useContext, useState } from "react";
import useGetWeather from "../hook/useGetWeather";

const WeatherContext = createContext({
  dayData: [],
  foreCastData: [],
  isForeCastDataLoading: "",
});

/** Context provider which holds data for categories
 * @param children
 */
export default function WeatherContextProvider({ children }) {
  const [userInput, setUserInput] = useState("");
  const [search, setSearch] = useState(false);
  const { useGetCurrentWeather, useGetForeCastWeather } = useGetWeather();
  const { data: dayData } = useGetCurrentWeather();
  const { data: foreCastData, isLoading: isForeCastDataLoading } = useGetForeCastWeather();
  const [convertDailyForeCastToCelsius, setConvertDailyForeCastToCelsius] = useState(true);

  return (
    <WeatherContext.Provider
      value={{
        dayData,
        foreCastData,
        isForeCastDataLoading,
        convertDailyForeCastToCelsius,
        setConvertDailyForeCastToCelsius,
        userInput,
        setUserInput,
        search,
        setSearch,
      }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeatherContext() {
  const context = useContext(WeatherContext);
  return context;
}
