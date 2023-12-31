import React from "react";
import { toast } from "react-toastify";
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

  const handleSearch = () => {
    if (!userInput) {
      toast.error("Please enter a valid city name or zip code");
    }
    setSearch(true);
    setSearchTemp(userInput);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-[18px] font-bold">Weather App</h1>
      <div className="flex items-center gap-2 mt-2">
        <input
          value={userInput}
          onChange={handleChange}
          placeholder="Enter your city name or zipcode"
          className="w-50 sm:w-96 p-2 rounded-sm focus:outline-none font-medium border border-transparent"
        />
        <button className="bg-buttonColor px-4 py-2 rounded-sm font-medium text-white" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
