import { faTemperatureHigh, faTemperatureLow } from "@fortawesome/free-solid-svg-icons"; // Import the icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import GetWeatherImage from "../common/GetWeatherImage";
import useDailyForecast from "../hook/useDailyForecast";
import { useUserContext } from "../provider/userContextProvider";
import { kelvinToCelsius, kelvinToFahrenheit } from "../utils/convertTempData";
import getDay from "../utils/getDay";

const DailyForecast = () => {
  const { data } = useDailyForecast();
  const { convertDailyForeCastToCelsius } = useUserContext();

  return (
    <div className="flex mt-0 sm-mt-10 w-1/2 justify-center items-center flex-col mb-6">
      <div className="w-full">
        <p className="border-b-2  text-center text-[20px] font-bold ">DailyForecast</p>
      </div>
      <div className="mt-3 flex gap-5 sm:gap-20">
        {data?.map((data) => {
          return (
            <div key={data.day} className="flex gap-3 flex-col">
              <p className="font-medium">{getDay(data?.day)}</p>
              <GetWeatherImage icon={data?.weather} />
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faTemperatureLow} className="text-secondary" />
                <p className="font-medium text-[13px] sm:text-[15px]">
                  {convertDailyForeCastToCelsius
                    ? `${kelvinToCelsius(data?.min)}°C`
                    : `${kelvinToFahrenheit(data?.min)}°F`}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faTemperatureHigh} className="text-secondary" />
                <p className="font-medium  text-[13px] sm:text-[15px]">
                  {convertDailyForeCastToCelsius
                    ? `${kelvinToCelsius(data?.max)}°C`
                    : `${kelvinToFahrenheit(data?.max)}°F`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyForecast;
