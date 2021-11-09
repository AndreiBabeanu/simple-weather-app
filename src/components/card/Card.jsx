import React from "react";
import "../../styles/Card.css";

const Card = ({ weather }) => {
  const icon = weather.main
    ? `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    : "";

  return (
    <div className="card__container">
      {weather.main && (
        <>
          <h1>
            {weather.name}
            <sup>{weather.sys.country}</sup>
          </h1>
          <div>
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div>{weather.weather[0].main}</div>
          <img src={icon} alt={weather.weather[0].description} />
        </>
      )}
    </div>
  );
};

export default Card;
