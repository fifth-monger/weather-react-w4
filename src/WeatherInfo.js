import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <p className="weather-meta">
        <FormattedDate date={props.data.date} />
        {" · "}
        <span className="text-capitalize">{props.data.description}</span>
      </p>
      <p className="coordinates">
        [ {props.data.coordinates.latitude.toFixed(2)}° N · {props.data.coordinates.longitude.toFixed(2)}° W ]
      </p>

      <div className="row mt-4 align-items-center">
        <div className="col-6">
          <div className="d-flex align-items-center">
            <div>
              <WeatherIcon code={props.data.icon} size={60} />
            </div>
            <div>
              <WeatherTemperature fahrenheit={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <ul>
            <li>
              Feels Like:{" "}
              <span className="secondary-text">
                {Math.round(props.data.feelsLike)}°
              </span>
            </li>
            <li>
              Humidity:{" "}
              <span className="secondary-text">{props.data.humidity}%</span>
            </li>
            <li>
              Wind:{" "}
              <span className="secondary-text">{props.data.wind} km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
