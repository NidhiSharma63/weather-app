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
  switch (icon) {
    case "01d":
    case "01n":
      return <img className="w-[25px]" src={clearSky} alt="clear sky" />;
    case "02d":
    case "02n":
      return <img className="w-[25px]" src={cloudy} alt="cloudy" />;
    case "03d":
    case "03n":
      return <img className="w-[25px]" src={clouds} alt="clouds" />;
    case "04d":
    case "04n":
      return <img className="w-[25px]" src={Scattered} alt="clouds" />;
    case "09d":
    case "09n":
      return <img className="w-[25px]" src={raining} alt="rain" />;
    case "10d":
    case "10n":
      return <img className="w-[25px]" src={heavyRain} alt="rain" />;
    case "11d":
    case "11n":
      return <img className="w-[25px]" src={storm} alt="storm" />;
    case "13d":
    case "13n":
      return <img className="w-[25px]" src={snow} alt="storm" />;
    case "50d":
    case "50n":
      return <img className="w-[25px]" src={mist} alt="storm" />;
    default:
      return <img className="w-[25px]" src={clearSky} alt="clear sky" />; // Provide a default value for unknown icons
  }
};

export default GetWeatherImage;
