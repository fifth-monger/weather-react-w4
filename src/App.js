import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1 class="brand">STROMATA</h1>
          <h2 class="brand">weather at a glance</h2>
        </header>
        <Weather defaultCity="Odem" />
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
    </div>
  );
}

export default App;
