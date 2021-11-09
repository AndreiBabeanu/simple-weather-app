import axios from "axios";

const KEY = "36283d25d0d8d972eead92f0c3f96c43";
const URL = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = async (city) => {
  const { data } = await axios.get(URL, {
    params: {
      q: city,
      units: 'metric',
      APPID: KEY,
    },
  });
  return data;
};

export { getWeather };
