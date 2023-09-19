import React from "react";
import DailyForecast from "./components/DailyForecast";
import Header from "./components/Header";
import WeatherDetails from "./components/WeatherDetails";

const App = () => {
  return (
    <div className="bg-emerald-600 h-[100vh] pt-3">
      <div className="flex flex-col items-center">
        <Header />
        <WeatherDetails />
        <DailyForecast />
      </div>
    </div>
  );
};

export default App;
