import React from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
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
      <h1>Oaxaca City</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex align-items-center">
            <img
              src="https://www.gstatic.com/weather/conditions/v1/svg/partly_cloudy_light.svg"
              alt="partly cloudy"
              className="float-left"
            />
            <div>
              <span className="temperature">71</span>
              <span className="unit">°F</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Percipitation: <span className="secondary-text">15%</span>
            </li>
            <li>
              Humidity: <span className="secondary-text">72%</span>
            </li>
            <li>
              Wind: <span className="secondary-text">13 km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
