import { faSunPlantWilt, faTemperatureHigh, faTemperatureLow, faWind } from "@fortawesome/free-solid-svg-icons"; // Import the icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import useWeatherDetail from "../hook/useWeatherDetail";
import formatDate from "../utils/formateDate";

const WeatherDetails = () => {
  const { handleToggleCelsius, temperatureValue, dayData, convertToCelsius, userInput } = useWeatherDetail();
  console.log(dayData, ":::day date");
  return (
    <div className="mt-8 flex flex-col items-center">
      {/* upper section */}

      <div className="flex flex-col items-center">
        <p className="text-[20px] text-white">{formatDate(new Date())}</p>
        <p className="text-[40px] text-white font-bold">{userInput}</p>
      </div>

      {/* display temperature */}

      <div className="flex gap-9 items-center">
        <button className="bg-white px-2 rounded h-[40px] font-medium" onClick={handleToggleCelsius}>
          Convert to {convertToCelsius ? "Fahrenheit" : "Celsius"}
        </button>
        <p className="text-[40px] text-white font-bold">{temperatureValue.temp}</p>
      </div>

      <div className="flex gap-5 mt-3">
        {/* show min max temperature*/}
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-3 text-white">
            <FontAwesomeIcon icon={faTemperatureLow} />
            <p>Min: &nbsp; {temperatureValue.min} </p>
          </div>
          <p className="text-white">|</p>
          <div className="flex items-center gap-3  text-white">
            <FontAwesomeIcon icon={faTemperatureHigh} />
            <p>Max: &nbsp;{temperatureValue.max}</p>
          </div>
        </div>
        {/*  */}
        <p className="text-white">|</p>
        {/*  */}
        {/* show other details */}
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-3  text-white">
            <FontAwesomeIcon icon={faSunPlantWilt} />
            <p>Humidity: &nbsp; {dayData?.data?.main?.humidity}%</p>
          </div>
          <p className="text-white">|</p>
          <div className="flex items-center gap-3  text-white">
            <FontAwesomeIcon icon={faWind} />
            <p>Wind: &nbsp; {dayData?.data?.wind?.speed}km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
