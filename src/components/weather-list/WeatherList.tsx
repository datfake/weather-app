import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Item from "../item/Item";
interface WeatherListProps {}

const initialCitys: Array<City> = [
  {
    name: "hanoi",
  },
];

const WeatherList: React.FC<WeatherListProps> = () => {
  // const [citys, setCityss] = useState<Array<City>>(initialCitys);
  return (
    <div>
      <div className="container-fluid">DashBoard</div>
      <Container>
        <Row>
          {initialCitys.map((city) => (
            <Col xs={12} md={4}>
              <Item city={city} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WeatherList;
