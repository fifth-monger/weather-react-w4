import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex align-items-center">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
            />
            <div>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°F</span>
            </div>
          </div>
        </div>
        <div className="col-6">
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
