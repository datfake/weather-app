type City = {
  name: string;
};

type InforWeather = {
  city: string;
  day: string;
  minTemp: Number;
  maxTemp: Number;
  main: string;
  percentRain: string;
};

type InforWeatherDetail = {
  city: string;
  time: string;
  temp: Number;
  humidity: Number;
  main: string;
  percentRain: string;
  wind: Number;
};

type Location = {
  lat: Number;
  lon: Number;
};

type WeatherSummary = {
  time: string;
  image: string;
  temp: Number;
};
