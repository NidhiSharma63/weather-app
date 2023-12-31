import { useEffect, useState } from "react";
import { useWeatherContext } from "../provider/weatherContextProvider";
import getFourDayForeCast from "../utils/getFourDayForeCast";

const useDailyForecast = () => {
  const { foreCastData, isForeCastDataLoading, convertDailyForeCastToCelsius } = useWeatherContext();
  const [data, setData] = useState([]);

  /**
   * set reduced data
   */
  useEffect(() => {
    if (!isForeCastDataLoading && foreCastData) {
      const { fourDayData } = getFourDayForeCast(foreCastData);
      setData(fourDayData);
    }
  }, [isForeCastDataLoading, foreCastData]);

  return { data, convertDailyForeCastToCelsius };
};

export default useDailyForecast;
