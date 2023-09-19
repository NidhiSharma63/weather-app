import { faSunPlantWilt, faTemperatureHigh, faTemperatureLow, faWind } from "@fortawesome/free-solid-svg-icons"; // Import the icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import GetWeatherImage from "../common/GetWeatherImage";
import useWeatherDetail from "../hook/useWeatherDetail";
import { useUserContext } from "../provider/userContextProvider";
import formatDate from "../utils/formateDate";

const WeatherDetails = () => {
  const { handleToggleCelsius, temperatureValue, dayData } = useWeatherDetail();
  const { searchTemp, convertDailyForeCastToCelsius } = useUserContext();

  return (
    <div className="flex flex-col items-center">
      {/* upper section */}

      <div className="flex flex-col items-center">
        <p className="text-[15px]">{formatDate(new Date())}</p>
        <p className="text-[40px] font-bold">{searchTemp}</p>
      </div>

      {/* display temperature */}

      <div className="flex gap-2 items-center flex-col">
        <div className="flex items-center justify-center gap-3">
          <GetWeatherImage icon={dayData?.data?.weather[0]?.icon} />
          <p className="text-[20px] font-bold">{temperatureValue.temp}</p>
        </div>
        <button className="bg-buttonColor px-2 rounded h-[40px] font-medium text-white" onClick={handleToggleCelsius}>
          Convert to {convertDailyForeCastToCelsius ? "Fahrenheit" : "Celsius"}
        </button>
      </div>
      {/* {v ? (
        ""
      ) : ( */}
      <div className="flex gap-5 mt-3 p-2 flex-col items-center">
        {/* show min max temperature*/}
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faTemperatureLow} />
            <p>Min: &nbsp; {temperatureValue.min} </p>
          </div>
          <p>|</p>
          <div className="flex items-center gap-3 ">
            <FontAwesomeIcon icon={faTemperatureHigh} />
            <p>Max: &nbsp;{temperatureValue.max}</p>
          </div>
        </div>
        {/*  */}
        {/*  */}
        {/* show other details */}
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-3 ">
            <FontAwesomeIcon icon={faSunPlantWilt} />
            <p>Humidity: &nbsp; {dayData?.data?.main?.humidity}%</p>
          </div>
          <p>|</p>
          <div className="flex items-center gap-3 ">
            <FontAwesomeIcon icon={faWind} />
            <p>Wind: &nbsp; {dayData?.data?.wind?.speed}km/h</p>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default WeatherDetails;
