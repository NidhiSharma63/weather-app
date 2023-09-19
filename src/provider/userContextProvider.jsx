import React, { createContext, useContext, useState } from "react";

const UserContext = createContext({
  convertDailyForeCastToCelsius: true /* Need this variable in to files to manage data */,
  setConvertDailyForeCastToCelsius: (e) => {},
  userInput: "",
  setUserInput: (e) => {},
  search: false,
  setSearch: (e) => {},
});

/** Context provider which holds data for categories
 * @param children
 */
export default function UserContextProvider({ children }) {
  const [userInput, setUserInput] = useState("");
  const [search, setSearch] = useState(false);
  const [convertDailyForeCastToCelsius, setConvertDailyForeCastToCelsius] = useState(true);
  const [searchTemp, setSearchTemp] = useState("");

  return (
    <UserContext.Provider
      value={{
        convertDailyForeCastToCelsius,
        setConvertDailyForeCastToCelsius,
        userInput,
        setUserInput,
        search,
        setSearch,
        searchTemp,
        setSearchTemp,
      }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  return context;
}
