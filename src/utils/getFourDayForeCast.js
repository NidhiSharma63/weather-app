/**
 *
 * It reduce the data to only day temperature and weather
 */

function getFourDayForeCast(data) {
  const convertedData = data?.data?.list?.reduce((accumulator, item) => {
    const currentDay = new Date(item.dt_txt).getDay();

    const isAlreadyAdded = accumulator.find((obj) => obj.day === currentDay);
    if (!isAlreadyAdded) {
      accumulator.push({
        day: currentDay,
        min: item.main.temp_min,
        max: item.main.temp_max,
        weather: item.weather[0]?.icon,
      });
    } else {
      if (isAlreadyAdded.min > item.main.temp_min) {
        isAlreadyAdded.min = item.main.temp_min;
      }
      if (isAlreadyAdded.max < item.main.temp_max) {
        isAlreadyAdded.max = item.main.temp_max;
      }
    }

    return accumulator;
  }, []);

  const fourDayData = convertedData?.slice(1, 5);
  const currentDayData = convertedData[0];

  return { fourDayData, currentDayData };
}

export default getFourDayForeCast;
