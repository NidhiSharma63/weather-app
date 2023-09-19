import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Charts from "./components/Charts";
import DailyForecast from "./components/DailyForecast";
import Header from "./components/Header";
import WeatherDetails from "./components/WeatherDetails";
import { useUserContext } from "./provider/userContextProvider";
import { useWeatherContext } from "./provider/weatherContextProvider";

const App = () => {
  const { dayData, dayDataLoading, foreCastData, isForeCastDataLoading } = useWeatherContext();
  const { searchTemp } = useUserContext();

  return (
    <div className="bg-c9d1cc h-[100vh] pt-3">
      <div className="flex flex-col items-center ">
        <Header />
        {!dayData && !searchTemp && <p className="text-white font-medium mt-4 font-[40px]">Search today weather!</p>}
        {searchTemp && (dayDataLoading || isForeCastDataLoading) && (
          <div className="flex items-center mt-4">
            <ClipLoader color="black" />
          </div>
        )}
        {searchTemp && dayData && foreCastData && (
          <>
            <div className="flex md:items-start items-center  gap-10 mt-10 md:flex-row flex-col-reverse">
              <Charts />
              <WeatherDetails />
            </div>
            <DailyForecast />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
