import React, { createContext, useContext } from "react";
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
  const { useGetCurrentWeather, useGetForeCastWeather } = useGetWeather();
  const { data: dayData, isLoading: dayDataLoading } = useGetCurrentWeather();
  const { data: foreCastData, isLoading: isForeCastDataLoading } = useGetForeCastWeather();

  return (
    <WeatherContext.Provider
      value={{
        dayData,
        foreCastData,
        isForeCastDataLoading,
        dayDataLoading,
      }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeatherContext() {
  const context = useContext(WeatherContext);
  return context;
}
