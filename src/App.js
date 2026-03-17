import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hola Mundo</h1>
        <Weather city="Odem" />
      </header>
    </div>
  );
}

export default App;
