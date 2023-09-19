/**
 *
 * It reduce the data to only day temperature and weather
 */

function getFourDayForeCast(data) {
  const convertedData = data?.data?.list?.reduce((accumulator, item) => {
    const currentDay = new Date(item.dt_txt).getDay();

    const isAlreadyAdded = accumulator.find((obj) => obj.day === currentDay);
    if (!isAlreadyAdded) {
      accumulator.push({ day: currentDay, temp: item.main.temp, weather: item.weather[0]?.main });
    }

    return accumulator;
  }, []);
  return convertedData?.slice(1, 5);
}

export default getFourDayForeCast;
