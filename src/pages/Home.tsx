import * as React from "react";
import WeatherList from "../components/weather-list/WeatherList";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="wrapper">
      <WeatherList />
    </div>
  );
};

export default Home;
