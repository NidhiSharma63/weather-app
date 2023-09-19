/**
 *
 * It reduce the data to only day temperature and weather
 */

function getCurrentDayForeCast(data) {
  const convertedData = data?.data?.list?.reduce((accumulator, item) => {
    const itemDate = new Date(item.dt_txt).getDate();
    const currentDate = new Date().getDate();
    if (itemDate === currentDate) {
      accumulator.push({ temp: item.main.temp, weather: item.weather[0]?.main });
    }

    return accumulator;
  }, []);
  return convertedData;
}

export default getCurrentDayForeCast;
