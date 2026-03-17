import React from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.city} is ${Math.round(response.data.temperature.current)}°F`,
    );
  }
  let apiKey = "23ab4btd750623bd6a0096bbc3of4f4f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <ThreeDots
      height="80"
      width="80"
      color="blue"
      ariaLabel="tail-spin-loading"
      visible={true}
    />
    // <div><h2>Hello from Weather</h2></div>
  );
}
