import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        This project was coded by{" "}
        <a
          href="https://victoriagarcia.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Victoria Garcia
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/fifth-monger/weather-react-w4"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>
      </footer>
    </div>
  );
}

export default App;
