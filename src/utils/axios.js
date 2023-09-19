import axios from "axios";

const customAxiosRequest = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error; // Re-throw the error to propagate it to the caller
  }
};

export default customAxiosRequest;
