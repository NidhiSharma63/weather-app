import { useEffect, useState } from "react";
import { useWeatherContext } from "../provider/weatherContextProvider";
import { kelvinToCelsius } from "../utils/convertTempData";
import getCurrentDayForeCast from "../utils/getCurrenDayForeCast";

const useChart = () => {
  const { foreCastData } = useWeatherContext();
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
    const temp = data?.map((item) => kelvinToCelsius(item.temp));
    const weather = data?.map((item) => item.weather);
    setChartData({
      labels: weather,
      datasets: [
        {
          label: "Hourly forecast in celsius",
          data: temp,
          borderColor: "rgb(75, 192, 192,0.9)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
        },
      ],
    });
  }, [foreCastData]);

  return { chartData };
};

export default useChart;
