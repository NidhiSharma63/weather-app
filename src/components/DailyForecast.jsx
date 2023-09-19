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
    <div className="flex mt-10 w-1/2 justify-center  items-center flex-col">
      <div className="w-full">
        <p className="border-b-2  text-center text-[20px] font-bold text-white">DailyForecast</p>
      </div>
      <div className="mt-3 flex gap-20">
        {data?.map((data) => {
          return (
            <div key={data.day} className="flex gap-3 text-white flex-col">
              <p>{getDay(data?.day)}</p>
              <GetWeatherImage icon={data?.weather} />
              <p>
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
