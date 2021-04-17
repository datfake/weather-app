import * as React from "react";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import Item from "../item/Item";
interface WeatherListProps {}

const initialCities: Array<City> = [
  {
    name: "hanoi",
  },
];

const WeatherList: React.FC<WeatherListProps> = () => {
  const [cities, setCities] = useState<Array<City>>(initialCities);
  const [newCity, setNewCity] = useState<City>();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getData = () => {
    const data = localStorage.getItem("cities");
    if (data != null) {
      setCities(JSON.parse(data));
    }
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const addCity = () => {
    if (newCity) {
      cities.push(newCity);
      localStorage.setItem("cities", JSON.stringify(cities));
      setCities(cities);
      setShow(false);
    }
  };
  return (
    <div>
      <div className="container-fluid">DashBoard</div>
      <Container>
        <Row>
          {cities.map((city) => (
            <Col xs={12} md={4}>
              <Item city={city} />
            </Col>
          ))}
          <Col xs={12} md={4}>
            <div className="container">
              <Card
                style={{
                  width: "20rem",
                  minHeight: "250px",
                  cursor: "pointer",
                }}
              >
                <Card.Body className="item-center">
                  <h4 className="item-center__add-city" onClick={handleShow}>
                    + Add city
                  </h4>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Choose a city</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form.Control
                        onChange={(e) => setNewCity({ name: e.target.value })}
                        type="text"
                        placeholder="City name"
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Cancel
                      </Button>
                      <Button variant="primary" onClick={addCity}>
                        Ok
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WeatherList;
