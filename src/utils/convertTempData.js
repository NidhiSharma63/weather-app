/**
 * Convert temperature from Kelvin to Celsius
 */
export const kelvinToCelsius = (kelvin) => {
  return (kelvin - 273.15).toFixed(0); // Round to 0 decimal places
};

/**
 * Convert temperature from Celsius to Fahrenheit
 */
export const kelvinToFahrenheit = (kelvin) => {
  return (((kelvin - 273.15) * 9) / 5 + 32).toFixed(0); // Round to 0 decimal places
};
