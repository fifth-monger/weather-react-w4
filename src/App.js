import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <header>
          <span className="brand-title">STROMATA</span>
          <span className="brand-subtitle">weather</span>
        </header>
        <Weather defaultCity="Odem" />
        <footer>
          Created by{" "}
          <a
            href="https://victoriagarcia.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Victoria Garcia
          </a>{" "}
          ·{" "}
          <a
            href="https://github.com/fifth-monger/weather-react-w4"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          ·{" "}
          <a
            href="https://stromata.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
