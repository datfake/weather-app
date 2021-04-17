import * as React from "react";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
const API_KEY = "0cc93f693bc9c6566aebe57fe293ecd4";

interface ItemProps {
  city: City;
}

const Item: React.FC<ItemProps> = ({ city }) => {
  const [inforWeather, setInforWeather] = useState<InforWeather>();
  const [image, setImage] = useState<string>();
  let history = useHistory();
  const getWeatherInfo = async () => {
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (data.cod === 200) {
      setInforWeather({
        city: data.name,
        day: new Date(parseInt(data.dt, 10) * 1000)
          .toLocaleString()
          .slice(0, 19)
          .replace("T", " "),
        minTemp: data.main.temp_min,
        maxTemp: data.main.temp_max,
        main: data.weather[0].main,
        percentRain: "56",
      });
      setImage(
        "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
      );
    }
  };

  useEffect(() => {
    getWeatherInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const viewDetails = () => {
    history.push("detail/" + city.name);
  };

  return (
    <div className="container">
      <Card style={{ width: "20rem", minHeight: "250px", cursor: "pointer" }}>
        <Card.Title className="container-item__title">
          {inforWeather?.city}
        </Card.Title>
        <Card.Body onClick={viewDetails}>
          <Row>
            <Col>
              <Card.Img variant="top" src={image} />
            </Col>
            <Col>
              <Card.Text>{inforWeather?.day}</Card.Text>
              <Card.Text>
                {inforWeather?.minTemp} C/
                {inforWeather?.maxTemp} C
              </Card.Text>
              <Card.Text>{inforWeather?.main}</Card.Text>
              <Card.Text>{inforWeather?.percentRain} % Rain</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
