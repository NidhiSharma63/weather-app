import clearSky from "../assets/clear-sky.png";
import clouds from "../assets/clouds.png";
import cloudy from "../assets/cloudy.png";
import heavyRain from "../assets/heavy-rain.png";
import mist from "../assets/mist.png";
import raining from "../assets/raining.png";
import Scattered from "../assets/scattered.png";
import snow from "../assets/snowing.png";
import storm from "../assets/storm.png";

const GetWeatherImage = ({ icon }) => {
  console.log(icon, "::cinos");
  switch (icon) {
    case "01d":
      return <img className="w-[50px]" src={clearSky} alt="clear sky" />;
    case "02d":
      return <img src={cloudy} alt="cloudy" />;
    case "03d":
      return <img src={clouds} alt="clouds" />;
    case "04d":
      return <img src={Scattered} alt="clouds" />;
    case "09d":
      return <img src={raining} alt="rain" />;
    case "10d":
      return <img src={heavyRain} alt="rain" />;
    case "11d":
      return <img src={storm} alt="storm" />;
    case "13d":
      return <img src={snow} alt="storm" />;
    case "50d":
      return <img src={mist} alt="storm" />;
    default:
      return "unknown"; // Provide a default value for unknown icons
  }
};

export default GetWeatherImage;
