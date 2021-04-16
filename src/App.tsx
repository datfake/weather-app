import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import WeatherList from "./components/weather-list/WeatherList";

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="wrapper">
        <WeatherList />
      </div>
    </div>
  );
}

export default App;
