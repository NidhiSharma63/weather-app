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
    <div className="flex mt-0 sm-mt-10 w-1/2 justify-center items-center flex-col">
      <div className="w-full">
        <p className="border-b-2  text-center text-[20px] font-bold ">DailyForecast</p>
      </div>
      <div className="mt-3 flex gap-10 sm:gap-20">
        {data?.map((data) => {
          return (
            <div key={data.day} className="flex gap-3  flex-col">
              <p className="font-medium">{getDay(data?.day)}</p>
              <GetWeatherImage icon={data?.weather} />
              <p className="font-medium">
                {convertDailyForeCastToCelsius
                  ? `${kelvinToCelsius(data?.temp)}°C`
                  : `${kelvinToFahrenheit(data?.temp)}°F`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyForecast;
