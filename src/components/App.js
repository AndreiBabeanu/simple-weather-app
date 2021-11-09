import React, { useState } from "react";
import "../styles/App.css";
import sky_img from "../images/sky.jpg";
import Card from "./card/Card";
import { getWeather } from "../api";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({})

  const onKeyPress = async (e) => {
    if (e.key === "Enter") {
        const response = await getWeather(query);
        setWeather(response)
        console.log(response)
    //   getWeather(query)
    //     .then((result) => {
    //       console.log(result);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });

      setQuery("");
    }
  };

  return (
    <div className="app__container">
      <img src={sky_img} alt="sky" className="app__background-img" />
      <div className="app__card-container">
        <Card weather={weather}/>
      </div>
      <div className="app__input-container">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyPress={onKeyPress}
          placeholder="Search a city"
          className="app__input"
        />
      </div>
    </div>
  );
};

export default App;
