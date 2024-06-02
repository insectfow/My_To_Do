import axios from "axios";

export const getWeather = async () => {
  try {
    const res = await axios.get(`http://localhost:3004/weather`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
