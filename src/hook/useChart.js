import { useEffect, useState } from "react";
import { useUserContext } from "../provider/userContextProvider";
import { useWeatherContext } from "../provider/weatherContextProvider";
import { kelvinToCelsius, kelvinToFahrenheit } from "../utils/convertTempData";
import getCurrentDayForeCast from "../utils/getCurrenDayForeCast";

const useChart = () => {
  const { foreCastData } = useWeatherContext();
  const { convertDailyForeCastToCelsius } = useUserContext();
  const [chartData, setChartData] = useState({
    lables: [],
    datasets: [
      {
        label: "Hourly forecast",
        data: [],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  });

  useEffect(() => {
    if (!foreCastData) return;
    const data = getCurrentDayForeCast(foreCastData);
    const temp = data?.map((item) => {
      return convertDailyForeCastToCelsius ? kelvinToCelsius(item.temp) : kelvinToFahrenheit(item.temp);
    });
    const weather = data?.map((item) => item.weather);
    setChartData({
      labels: weather,
      datasets: [
        {
          label: `Hourly forecast in  ${convertDailyForeCastToCelsius ? "celsius" : "Fahrenheit"}`,
          data: temp,
          borderColor: "rgb(75, 192, 192,0.9)",
          fill: true,
          tension: 0.5,
          backgroundColor: "rgba(75, 192, 192, 0.1)",
        },
      ],
    });
  }, [foreCastData, convertDailyForeCastToCelsius]);

  return { chartData };
};

export default useChart;
