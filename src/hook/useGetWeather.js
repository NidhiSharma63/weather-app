import { useQuery } from "@tanstack/react-query";
import { useUserContext } from "../provider/userContextProvider";
import customAxiosRequest from "../utils/axios";
import getUrlAccordingToUserInput from "../utils/getUrlAccordingToUserInput";
import { BASE_URL, FORECAST_URL } from "../utils/misc";

const useGetWeather = () => {
  const { searchTemp } = useUserContext();
  /**
   *
   * @returns get current weather
   */
  const useGetCurrentWeather = () => {
    return useQuery({
      queryKey: ["weather", searchTemp],
      enabled: Boolean(searchTemp),
      queryFn: () => {
        if (searchTemp) {
          return customAxiosRequest(getUrlAccordingToUserInput(searchTemp, BASE_URL));
        } else {
          return [];
        }
      },
      onError: (error) => {},
    });
  };

  /**
   *
   * get forecast weather
   */
  const useGetForeCastWeather = () => {
    return useQuery({
      queryKey: ["forecast-weather", searchTemp],
      enabled: Boolean(searchTemp),
      queryFn: () => {
        return customAxiosRequest(getUrlAccordingToUserInput(searchTemp, FORECAST_URL));
      },
      onError: (error) => {},
    });
  };
  return {
    useGetCurrentWeather,
    useGetForeCastWeather,
  };
};

export default useGetWeather;
