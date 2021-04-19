import * as React from "react";
import { useEffect, useState } from "react";
// import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
const API_KEY = "0cc93f693bc9c6566aebe57fe293ecd4";

interface DetailCityProps {
  name: string;
}

const initialWeatherSummarys: Array<WeatherSummary> = [
  {
    time: "error",
    image: "error",
    temp: -999,
  },
];

const DetailCity: React.FC<DetailCityProps> = ({ name }) => {
  const [inforWeather, setInforWeather] = useState<InforWeatherDetail>();
  const [image, setImage] = useState<string>();
  const [weatherSummarys, setWeatherSummarys] = useState<Array<WeatherSummary>>(
    initialWeatherSummarys
  );
  const getDetailWeather = async () => {
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (data.cod === 200) {
      const api_call_detail = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,daily,alerts&appid=${API_KEY}`
      );
      const dataDetail = await api_call_detail.json();
      if (dataDetail) {
        setInforWeather({
          city: name,
          time: new Date(parseInt(dataDetail.current.dt, 10) * 1000)
            .toLocaleString()
            .slice(0, 19)
            .replace("T", " "),
          temp: dataDetail.current.temp,
          humidity: dataDetail.current.humidity,
          main: dataDetail.current.weather[0].main,
          percentRain: "56",
          wind: dataDetail.current.wind_speed,
        });
        setImage(
          "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
        );
        let inforWeathers = new Array<WeatherSummary>();
        for (let i = 0; i < 18; i++) {
          inforWeathers.push({
            time: new Date(parseInt(dataDetail.hourly[i * 2].dt, 10) * 1000)
              .toLocaleString()
              .slice(0, 19)
              .replace("T", " "),
            image:
              "http://openweathermap.org/img/wn/" +
              dataDetail.hourly[i * 2].weather[0].icon +
              ".png",
            temp: dataDetail.hourly[i * 2].temp,
          });
        }
        setWeatherSummarys(inforWeathers);
      }
    }
  };
  useEffect(() => {
    getDetailWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="container-fluid">DashBoard / Detail</div>
      <Container>
        <Row>
          <div className="content">
            <Container fluid>
              <Row>
                <Col>
                  <h4>{inforWeather?.city}</h4>
                  <h5>{inforWeather?.time}</h5>
                  <h5>{inforWeather?.main}</h5>
                  <span>
                    <img
                      src={image}
                      alt="icon weather"
                      width="120"
                      height="100"
                    ></img>{" "}
                  </span>
                  <h4 style={{ display: "inline-block" }}>
                    {inforWeather?.temp} F
                  </h4>
                </Col>
                <Col>
                  <div className="infor-weather__detail">
                    <h5>humidity: {inforWeather?.humidity}%</h5>
                    <h5>wind: {inforWeather?.wind}km/h</h5>
                  </div>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                {weatherSummarys.map((weatherSummary) => (
                  <Col className="detail-item">
                    <p>{weatherSummary?.time}</p>
                    <span>
                      <img src={weatherSummary.image} alt="icon weather"></img>{" "}
                    </span>
                    <p>{weatherSummary?.temp} F</p>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default DetailCity;
