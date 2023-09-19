/**
 *
 * @param {can be string or zipcode} userInput
 * @param {} url
 * @returns url based on user input
 */

const getUrlAccordingToUserInput = (userInput, url) => {
  let setUrlAccordingToUserInput = "";
  if (/^\d+$/.test(userInput)) {
    /**
     * user input is zip code
     */
    setUrlAccordingToUserInput = `${url}zip=${userInput}&appid=${process.env.REACT_APP_API_KEY}`;
  } else {
    /**
     * user input is string
     */
    setUrlAccordingToUserInput = `${url}q=${userInput}&appid=${process.env.REACT_APP_API_KEY}`;
  }
  return setUrlAccordingToUserInput;
};

export default getUrlAccordingToUserInput;
