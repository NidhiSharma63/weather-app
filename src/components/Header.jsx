import React from "react";
import { useUserContext } from "../provider/userContextProvider";

const Header = () => {
  const { userInput, setUserInput, setSearch, setSearchTemp } = useUserContext();

  /**
   * change event value based on user input
   */
  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  /**
   * handle search
   */

  const hanldeBlur = () => {
    setSearchTemp(userInput);
  };

  const handleSearch = () => {
    setSearch(true);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-[20px] font-bold text-white">Weather App</h1>
      <div className="flex items-center gap-2 mt-2">
        <input
          value={userInput}
          onChange={handleChange}
          onBlur={hanldeBlur}
          placeholder="Enter your city name or zipcode"
          className="w-96 p-2 rounded-sm focus:outline-none font-medium"
        />
        <button className="bg-white px-4 py-2 rounded-sm font-medium" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
