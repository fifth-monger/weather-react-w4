import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      date: "Thursday 2:35 PM",
      feelsLike: response.data.temperature.feels_like,
      description: response.data.condition.description,
      iconUrl:
        "https://www.gstatic.com/weather/conditions/v1/svg/sunny_light.svg",
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn w-100" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex align-items-center">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div>
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Feels Like:{" "}
                <span className="secondary-text">
                  {Math.round(weatherData.feelsLike)}
                </span>
              </li>
              <li>
                Humidity:{" "}
                <span className="secondary-text">{weatherData.humidity}%</span>
              </li>
              <li>
                Wind:{" "}
                <span className="secondary-text">{weatherData.wind} km/h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "23ab4btd750623bd6a0096bbc3of4f4f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
