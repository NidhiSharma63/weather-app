import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import DailyForecast from "./components/DailyForecast";
import Header from "./components/Header";
import WeatherDetails from "./components/WeatherDetails";
import { useUserContext } from "./provider/userContextProvider";
import { useWeatherContext } from "./provider/weatherContextProvider";

const App = () => {
  const { dayData, dayDataLoading, foreCastData, isForeCastDataLoading } = useWeatherContext();
  const { searchTemp } = useUserContext();

  return (
    <div className="bg-emerald-600 h-[100vh] pt-3">
      <div className="flex flex-col items-center">
        <Header />
        {!dayData && !searchTemp && <p>Search today weather!</p>}
        {searchTemp && dayDataLoading && isForeCastDataLoading && (
          <div className="flex items-center">
            <ClipLoader />
          </div>
        )}
        {searchTemp && dayData && foreCastData && (
          <>
            <WeatherDetails />
            <DailyForecast />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
